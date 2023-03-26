import React from 'react'
import logo from '../images/logo.svg'
import hamburger from '../images/icon-hamburger.svg'
import close from '../images/icon-close.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(!isOpen)

  return (
    <>
      <header className="flex justify justify-between p-4 bg-white items-center sticky top-0 z-50">
        <img src={logo} alt="" />
        {isOpen ? (
          <button onClick={handleOpen}>
            <img src={close} alt="" />
          </button>
        ) : (
          <button onClick={handleOpen}>
            <img src={hamburger} alt="" />
          </button>
        )}
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-30 bg-gray-800/50">
          <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-4 my-20 py-8 rounded text-2xl gap-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
        </div>
      )}
    </>
  )
}
