import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import '../styles/global.scss'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Footer } from '../components/Footer'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Easybank</title>
