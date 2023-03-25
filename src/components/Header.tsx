import React from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
// import Img from 'gatsby-image'

export const Header = () => {
  return (
    <>
      <header className="flex justify justify-between p-4 bg-white">
        <img src={logo} alt="" />
        <h1>test</h1>
        <h1>test</h1>
        <img src={hamburger} alt="" />
      </header>
    </>
  )
}
