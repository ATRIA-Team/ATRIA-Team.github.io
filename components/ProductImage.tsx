'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

type Props = {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}

export default function ProductImage({
  src,
  alt,
  caption,
  width = 1200,
  height = 675,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)

  // Prefix root-relative paths with basePath so the image resolves correctly
  // when the site is deployed to a GitHub Pages project subpath.
  const resolvedSrc = src.startsWith('/') ? `${basePath}${src}` : src

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <figure className="product-image">
      <button
        type="button"
        className="product-image-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`Open full-size image: ${alt}`}
      >
        <Image src={resolvedSrc} alt={alt} width={width} height={height} loading="lazy" />
      </button>
      {caption ? <figcaption>{caption}</figcaption> : null}
      {isOpen ? (
        <div className="image-viewer" role="dialog" aria-modal="true" aria-label={alt}>
          <button
            type="button"
            className="image-viewer-backdrop"
            onClick={() => setIsOpen(false)}
            aria-label="Close image viewer"
          />
          <div className="image-viewer-panel">
            <button
              type="button"
              className="image-viewer-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close image viewer"
            >
              &times;
            </button>
            <Image
              src={resolvedSrc}
              alt={alt}
              width={width}
              height={height}
              className="image-viewer-image"
              priority
            />
            {caption ? <p className="image-viewer-caption">{caption}</p> : null}
          </div>
        </div>
      ) : null}
    </figure>
  )
}
