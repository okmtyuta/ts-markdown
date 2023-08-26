import { expect, test } from 'vitest'
import { inlineProcess } from './inlineProcess'

test('** ** will return empty string', () => {
  const testText = '** **'
  const inlineProcessed = inlineProcess(testText)
  const preToken = {
    id: 0,
    tokenType: 'text',
    children: ''
  }
  const boldToken = {
    id: 0,
    tokenType: 'bold',
    children: [
      {
        id: 0,
        tokenType: 'text',
        children: ' '
      }
    ]
  }
  expect(inlineProcessed[0]).toEqual(preToken)
  expect(inlineProcessed[1]).toEqual(boldToken)
})

test('__ __ will return empty string', () => {
  const testText = '__ __'
  const inlineProcessed = inlineProcess(testText)
  const preToken = {
    id: 0,
    tokenType: 'text',
    children: ''
  }
  const boldToken = {
    id: 0,
    tokenType: 'bold',
    children: [
      {
        id: 0,
        tokenType: 'text',
        children: ' '
      }
    ]
  }
  expect(inlineProcessed[0]).toEqual(preToken)
  expect(inlineProcessed[1]).toEqual(boldToken)
})

test('* * will return empty string', () => {
  const testText = '* *'
  const inlineProcessed = inlineProcess(testText)
  const preToken = {
    id: 0,
    tokenType: 'text',
    children: ''
  }
  const italicToken = {
    id: 0,
    tokenType: 'italic',
    children: [
      {
        id: 0,
        tokenType: 'text',
        children: ' '
      }
    ]
  }
  expect(inlineProcessed[0]).toEqual(preToken)
  expect(inlineProcessed[1]).toEqual(italicToken)
})

test('_ _ will return empty string', () => {
  const testText = '_ _'
  const inlineProcessed = inlineProcess(testText)
  const preToken = {
    id: 0,
    tokenType: 'text',
    children: ''
  }
  const italicToken = {
    id: 0,
    tokenType: 'italic',
    children: [
      {
        id: 0,
        tokenType: 'text',
        children: ' '
      }
    ]
  }
  expect(inlineProcessed[0]).toEqual(preToken)
  expect(inlineProcessed[1]).toEqual(italicToken)
})

test('** __ will throw Error', () => {
  const textText = '** __'
  expect(() => {
    inlineProcess(textText)
  }).toThrowError()
})

test('**** will throw Error', () => {
  const textText = '****'
  expect(() => {
    inlineProcess(textText)
  }).toThrowError()
})
