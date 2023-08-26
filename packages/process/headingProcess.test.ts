import { expect, test } from 'vitest'
import { headingProcess } from './headingProcess'

test('#heading1 is h1', () => {
  const testText = '#heading1'
  const headingProcessed = headingProcess(testText)
  const headingToken = {
    id: 0,
    tokenType: 'h1',
    children: 'heading1'
  }
  expect(headingProcessed).toEqual(headingToken)
})
test('##heading2 is h2', () => {
  const testText = '##heading2'
  const headingProcessed = headingProcess(testText)
  const headingToken = {
    id: 0,
    tokenType: 'h2',
    children: 'heading2'
  }
  expect(headingProcessed).toEqual(headingToken)
})
test('###heading3 is h3', () => {
  const testText = '###heading3'
  const headingProcessed = headingProcess(testText)
  const headingToken = {
    id: 0,
    tokenType: 'h3',
    children: 'heading3'
  }
  expect(headingProcessed).toEqual(headingToken)
})
