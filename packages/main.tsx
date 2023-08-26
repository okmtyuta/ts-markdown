import React from 'react'
import ReactDOM from 'react-dom/client'
import '@okmtyuta/amatelas/lib/index.css'
import { Markdown } from './markdown'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>
      <p>fjaldfj</p>
    </h1>
    <Markdown>
      {String.raw`
      #HEADING 1
      Welcome my **_Markdown Parsing System!!_**
      Used by some of the world's largest companies, Next.js enables you to create **full-stack Web applications** by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
      `}
    </Markdown>
  </React.StrictMode>
)
