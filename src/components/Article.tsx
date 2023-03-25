import React from 'react'

type Props = {
  author: string
  title: string
  desc: string
  image: string
}

export const Article = ({ author, title, desc, image }: Props) => {
  return (
    <div className="article">
      <img src={image} alt={title} />
      <p>By {author}</p>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}
