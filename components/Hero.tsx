import type { ReactNode } from 'react'

type Props = {
  title: string
  children?: ReactNode
}

export default function Hero({ title, children }: Props) {
  return (
    <section className="hero">
      <h1 className="hero-title">{title}</h1>
      {children}
    </section>
  )
}
