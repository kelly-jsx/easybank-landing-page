import React from 'react'

import logo from '../images/logo-white.svg'

import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

export const Footer = () => (
  <footer className="footer bg-primary-dark-blue py-10 flex flex-col items-center gap-8">
    <div className="">
      <img src={logo} alt="" />
    </div>
    <div className="flex gap-4">
      <img src={facebook} alt="facebook" />
      <img src={youtube} alt="youtube" />
      <img src={twitter} alt="twitter" />
      <img src={pinterest} alt="pinterest" />
      <img src={instagram} alt="instagram" />
    </div>
    <ul className="flex flex-col text-center text-neutral-light-grayish-blue gap-2">
      <a href="#">About Us</a>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
      <a href="#">Careers</a>
      <a href="#">Support</a>
      <a href="#">Privacy Policy</a>
    </ul>

    <button className="text-neutral-light-grayish-blue bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan font-bold rounded-full py-3 px-8 w-max">
      Request Invite
    </button>
    <p className="text-neutral-grayish-blue">© Easybank. All Rights Reserved</p>
    <div className="attribution text-neutral-grayish-blue">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">Your Name Here</a>.
    </div>
  </footer>
)
