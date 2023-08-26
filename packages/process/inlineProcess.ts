import { Token } from '../types/types'

const inlineDecorationSymbolRegExp = /\*+|_+/

const escapeRegExpString = (regExpString: string) => {
  return regExpString.replace(/([/()[\]{}|*+-.,^$?\\])/g, '\\$1')
}

const specifyInlineDecorationType = (inlineDecorationSymbol: string) => {
  if (inlineDecorationSymbol === '*' || inlineDecorationSymbol === '_') {
    return 'italic'
  }

  if (inlineDecorationSymbol === '**' || inlineDecorationSymbol === '__') {
    return 'bold'
  }

  return 'normal'
}

export const inlineProcess = (text: string): Token[] => {
  const tokens: Token[] = []
  let processing = text

  while (processing.length > 0) {
    const symbolMatchArray = processing.match(inlineDecorationSymbolRegExp)
    if (!symbolMatchArray) {
      const textToken: Token = {
        id: 0,
        tokenType: 'text',
        children: processing
      }

      processing = ''
      tokens.push(textToken)
    } else {
      const matchedSymbol = symbolMatchArray[0]
      const inlineDecorationType = specifyInlineDecorationType(matchedSymbol)
      const escapedMatchedSymbol = escapeRegExpString(matchedSymbol)
      const regExp = RegExp(`${escapedMatchedSymbol}(.*?)${escapedMatchedSymbol}`)

      const decoratedTextMatchArray = processing.match(regExp)
      if (decoratedTextMatchArray) {
        const decoratedText = decoratedTextMatchArray[1]
        const preText = processing.substring(0, Number(decoratedTextMatchArray.index))
        const postText = processing.substring(
          Number(decoratedTextMatchArray.index) + decoratedTextMatchArray[0].length,
          processing.length
        )
        processing = postText
        const preToken: Token = {
          id: 0,
          tokenType: 'text',
          children: preText
        }
        const decoratedTextToken: Token = {
          id: 0,
          tokenType: inlineDecorationType,
          children: inlineProcess(decoratedText)
        }

        tokens.push(preToken, decoratedTextToken)
      } else {
        throw new Error('Parse Error!')
      }
    }
  }

  return tokens
}
