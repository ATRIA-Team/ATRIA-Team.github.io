/**
 * Single source of truth for site-wide text, links, and navigation.
 * Edit values here to update the navbar, footer, metadata, and any
 * MDX content that interpolates them.
 */
export const siteConfig = {
  name: 'ATRIA: Heart Team Meetings',
  description:
    'A medical collaboration suite for clinicians: meet, draw, annotate, and review DICOM imagery together — in real time.',
  contactEmail: 'contact@example.com',
  issuesUrl: 'https://github.com',
  navLinks: [
    { label: 'Description', href: '/#description' },
    { label: 'Features', href: '/#features' },
    { label: 'Screenshots', href: '/#screenshots' },
    { label: 'Disclaimer', href: '/#disclaimer' },
    { label: 'Contacts', href: '/#contacts' },
  ],
} as const

export type SiteConfig = typeof siteConfig
