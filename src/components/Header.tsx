import React from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
// import Img from 'gatsby-image'

export const Header = () => {
  return (
    <header className="flex justify justify-between p-4 bg-white items-center sticky top-0 z-50">
      <img src={logo} alt="" />
      <img src={hamburger} alt="" />
    </header>
  )
}
