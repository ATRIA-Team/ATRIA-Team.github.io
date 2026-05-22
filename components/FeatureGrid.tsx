import type { ReactNode } from 'react'

type GridProps = {
  children: ReactNode
}

export default function FeatureGrid({ children }: GridProps) {
  return <div className="feature-grid">{children}</div>
}

type FeatureProps = {
  title: string
  children: ReactNode
}

export function Feature({ title, children }: FeatureProps) {
  return (
    <article className="feature-card">
      <h3>{title}</h3>
      <div className="feature-card-body">{children}</div>
    </article>
  )
}
