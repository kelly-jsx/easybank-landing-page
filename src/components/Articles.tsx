import React from 'react'

import currency from '../images/image-currency.jpg'
import restaurant from '../images/image-restaurant.jpg'
import plane from '../images/image-plane.jpg'
import confetti from '../images/image-confetti.jpg'

import { Article } from './Article'

export const Articles = () => {
  const articlesData = [
    {
      author: 'Claire Robinson',
      title: 'Receive money in any currency with no fees',
      desc: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …',
      image: currency,
    },
    {
      author: 'Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      desc: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …',
      image: restaurant,
    },
    {
      author: 'Wilson Hutton',
      title: 'Take your Easybank card wherever you go',
      desc: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …',
      image: plane,
    },
    {
      author: 'Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      desc: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...',
      image: confetti,
    },
  ]

  return (
    <section className="text-center bg-white px-4 flex flex-col gap-8 py-20">
      <h1 className="text-4xl text-primary-dark-blue">Latest Articles</h1>
      {articlesData.map((item, index) => (
        <Article
          key={index}
          author={item.author}
          title={item.title}
          desc={item.desc}
          image={item.image}
        />
      ))}
    </section>
  )
}
