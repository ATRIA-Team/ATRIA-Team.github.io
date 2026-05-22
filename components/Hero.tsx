import type { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  title: string
  children?: ReactNode
}

export default function Hero({ title, children }: Props) {
  return (
    <section className="hero">
      <Image
        className="hero-logo"
        src="/images/atria-logo-mark.png"
        alt="ATRIA logo"
        width={516}
        height={182}
        priority
      />
      <h1 className="hero-title">{title}</h1>
      {children}
    </section>
  )
}
