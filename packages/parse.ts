import { process } from './process/process'
import { HeadingToken, Token } from './types/types'

const lineParse = (text: string) => {
  const processed = process(text)
  return processed
}

export const parse = (text: string) => {
  const lines = text.split('\n')
  const lineTokens: (Token[] | HeadingToken[])[] = []
  for (const line of lines) {
    const processed = lineParse(line)
    lineTokens.push(processed)
  }
  return lineTokens
}
