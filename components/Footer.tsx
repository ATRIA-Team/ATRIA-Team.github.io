"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

export default function Footer() {
  const buildYear = new Date().getFullYear()
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  const displayYear = year ?? buildYear
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p className="site-footer-copy">
          © <span suppressHydrationWarning>{displayYear}</span> {siteConfig.name}. All rights
          reserved.
        </p>
        <ul className="site-footer-links">
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
