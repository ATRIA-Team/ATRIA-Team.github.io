import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

function SmartLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href = '', children, ...rest } = props
  // Internal routes: use next/link so basePath is applied automatically.
  if (href.startsWith('/')) {
    return (
      <Link href={href} className="text-link" {...rest}>
        {children}
      </Link>
    )
  }
  // External or anchor links: plain <a>.
  const isExternal = /^https?:\/\//.test(href)
  return (
    <a
      href={href}
      className="text-link"
      {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="page-title" {...props} />,
    h2: (props) => <h2 className="section-title" {...props} />,
    p: (props) => <p className="body-copy" {...props} />,
    ul: (props) => <ul className="bullet-list" {...props} />,
    a: SmartLink,
    ...components,
  }
}
