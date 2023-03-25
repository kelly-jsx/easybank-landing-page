import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../styles/global.scss'
import { Header } from '../components/Header'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />

      <section>
        <h2 className="text-3xl font-bold underline text-primary-bright-cyan">
          Getting Started
        </h2>
        <p className="text-xl font-light">
          Easybank is a free and open source tool that helps you get started
          with your Gatsby site.
        </p>
      </section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Easybank</title>
