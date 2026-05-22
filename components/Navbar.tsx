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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                  fill="currentColor"
                />
              </svg>
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
