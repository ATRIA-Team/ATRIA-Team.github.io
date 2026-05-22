import Image from 'next/image'

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
  // Prefix root-relative paths with basePath so the image resolves correctly
  // when the site is deployed to a GitHub Pages project subpath.
  const resolvedSrc = src.startsWith('/') ? `${basePath}${src}` : src

  return (
    <figure className="product-image">
      <Image src={resolvedSrc} alt={alt} width={width} height={height} loading="lazy" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
