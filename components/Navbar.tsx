'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/site-config'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isPrivacy = pathname === '/privacy'

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary">
      <div className="site-nav-inner">
        {isPrivacy ? (
          <>
            <Link href="/" className="site-nav-back" aria-label="To homepage">
              <svg
                className="site-nav-back-icon"
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12.5 4.5L7 10L12.5 15.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>To homepage</span>
            </Link>
            <span className="site-nav-title">Privacy Policy</span>
            <span aria-hidden="true" />
          </>
        ) : (
          <>
            <Link
              href="/"
              className="site-nav-brand"
              aria-label="Homepage"
              onClick={() => setOpen(false)}
            >
              <img
                className="site-nav-logo"
                src="/images/atria-logo-mark.png"
                alt=""
                aria-hidden="true"
              />
              <span>{siteConfig.name}</span>
            </Link>

            <button
              type="button"
              className="site-nav-toggle"
              aria-controls="site-nav-links"
              aria-expanded={open}
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="site-nav-toggle-bar" />
              <span className="site-nav-toggle-bar" />
              <span className="site-nav-toggle-bar" />
            </button>

            <ul id="site-nav-links" className="site-nav-links">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}
