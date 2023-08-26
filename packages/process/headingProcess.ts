import { HeadingToken, HeadingTokenType } from '../types/types'

const headingSymbolRegExp = /^\s*#+(.*?)$/

const headingLevelToHeadingTokenType = (headingLevel: number): HeadingTokenType => {
  switch (headingLevel) {
    case 1:
      return 'h1'
    case 2:
      return 'h2'
    case 3:
      return 'h3'
    case 4:
      return 'h4'
    case 5:
      return 'h5'
    case 6:
      return 'h6'
    default:
      return 'h1'
  }
}

export const headingProcess = (text: string): HeadingToken | null => {
  const headingMatchArray = text.match(headingSymbolRegExp)
  if (headingMatchArray) {
    const headingLevel = headingMatchArray[0].length - headingMatchArray[1].length
    const headingTokenType = headingLevelToHeadingTokenType(headingLevel)
    const headingText = headingMatchArray[1]
    return {
      id: 0,
      tokenType: headingTokenType,
      children: headingText
    }
  }

  return null
}
