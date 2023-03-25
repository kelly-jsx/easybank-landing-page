import React from 'react'

type Props = {
  title: string
  desc: string
  image: string
}

export const Pros = ({ title, desc, image }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <img src={image} alt="" />
      <h1 className="text-2xl text-primary-dark-blue">{title}</h1>
      <p className="text-neutral-grayish-blue text-sm">{desc}</p>
    </div>
  )
}
