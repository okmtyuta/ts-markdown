import { parse } from '.'
import { compose } from './compose/compose'

export const Markdown = (props: { children: string }) => {
  const tokenLines = parse(props.children)
  const elements: JSX.Element[] = []
  for (const tokenLine of tokenLines) {
    const lineElement = compose(tokenLine)
    const element = <div key={crypto.randomUUID()}>{lineElement}</div>

    elements.push(element)
  }

  return <span>{elements}</span>
}
