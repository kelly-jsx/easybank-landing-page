import React from 'react'

import online from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboarding from '../images/icon-onboarding.svg'
import openapi from '../images/icon-api.svg'

import { Pros } from './Pros'

export const WhyUs = () => {
  const prosdata = [
    {
      id: 1,
      title: 'Online Banking',
      desc: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
      image: online,
    },
    {
      id: 2,
      title: 'Simple Budgeting',
      desc: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.',
      image: budgeting,
    },
    {
      id: 3,
      title: 'Fast Onboarding',
      desc: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.',
      image: onboarding,
    },
    {
      id: 4,
      title: 'Open API',
      desc: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.',
      image: openapi,
    },
  ]

  return (
    <section className="text-center bg-neutral-very-light-gray p-4 flex flex-col gap-4 pb-20 shadow-sm">
      <h1 className="text-4xl text-primary-dark-blue">Why choose Easybank?</h1>
      <p className="text-neutral-grayish-blue text-sm mb-6">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>
      {prosdata.map((item, index) => (
        <Pros
          key={index}
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </section>
  )
}
