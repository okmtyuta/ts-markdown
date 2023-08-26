import { headingProcess } from './headingProcess'
import { inlineProcess } from './inlineProcess'

export const process = (text: string) => {
  const headingProcessed = headingProcess(text)
  if (headingProcessed) {
    return [headingProcessed]
  }

  const inlineProcessed = inlineProcess(text)
  return inlineProcessed
}
