import { process } from './process/process'

export const ts = 'BEFORE- **italic text** **A-before _A_ A-after** | *B* | C _D_ E __F__ G**H**I J_K_'

export const parse = (text: string) => {
  const processed = process(text)
  return processed
}
