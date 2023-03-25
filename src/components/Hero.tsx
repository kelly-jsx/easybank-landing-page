import React from 'react'

export const Hero = () => {
  return (
    <section className="text-center relative">
      <div className="bg-header-mobile w-full h-full bg-custom-mobile-header-size bg-no-repeat absolute"></div>
      <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-top -top-44 bg-custom-mobile-mockup-size"></div>
      {/* <div className="px-4 gap-4 h-screen flex flex-col items-center relative z-20 justify-end"> */}
      <div className="h-screen relative z-20 px-4">
        <div className="h-full flex flex-col justify-end">
          <div className="h-3/5 flex flex-col justify-center items-center text-center gap-5">
            <h1 className="text-4xl text-primary-dark-blue">
              Next generation digital banking
            </h1>
            <h2 className="text-neutral-grayish-blue text-sm">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </h2>
            <button className="text-neutral-light-grayish-blue bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan font-bold rounded-full py-4 px-10 w-max">
              Request Invite
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
