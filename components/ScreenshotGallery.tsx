import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function ScreenshotGallery({ children }: Props) {
  return <div className="screenshot-gallery">{children}</div>
}
