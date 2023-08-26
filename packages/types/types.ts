export type HeadingTokenType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface HeadingToken {
  id: number
  tokenType: HeadingTokenType
  children: string
}

export type TextTokenType = 'text'
export type DecoratedTokenType = 'bold' | 'italic' | 'normal'

export interface TextToken {
  id: number
  tokenType: TextTokenType
  children: string
}

export interface DecoratedToken {
  id: number
  tokenType: DecoratedTokenType
  children: Token[]
}

export interface ParagraphToken {
  id: number
  tokenType: 'paragraph'
  children: Token[]
}

export type Token = TextToken | DecoratedToken | HeadingToken | ParagraphToken
