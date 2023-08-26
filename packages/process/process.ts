import { ParagraphToken, Token } from '../types/types'
import { headingProcess } from './headingProcess'
import { inlineProcess } from './inlineProcess'

export const process = (text: string): Token[] => {
  const headingProcessed = headingProcess(text)
  if (headingProcessed) {
    return [headingProcessed]
  }

  const inlineProcessed: ParagraphToken = {
    id: 0,
    tokenType: 'paragraph',
    children: inlineProcess(text)
  }

  return [inlineProcessed]
}
