import React from 'react'

type Props = {
  author: string
  title: string
  desc: string
  image: string
}

export const Article = ({ author, title, desc, image }: Props) => {
  return (
    <div className="bg-white rounded-md mx-1">
      <img src={image} alt={title} className="rounded-t-md" />
      <div className="text-left p-4 px-5 flex flex-col gap-2 mt-4">
        <p className="text-xs text-neutral-grayish-blue">By {author}</p>
        <h2 className="text-primary-dark-blue">{title}</h2>
        <p className="text-sm text-neutral-grayish-blue">{desc}</p>
      </div>
    </div>
  )
}
