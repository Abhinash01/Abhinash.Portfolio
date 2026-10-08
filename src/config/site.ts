/**
 * Site-wide configuration and metadata.
 * Single source of truth for verified identity and global branding constants.
 */

export interface SiteAuthor {
  readonly name: string
  readonly shortName: string
  readonly role: string
  readonly bio: string
  readonly email: string
  readonly github: string
  readonly timezone: string
}

export interface SiteStatus {
  readonly isAvailable: boolean
  readonly label: string
  readonly shortLabel: string
  readonly description: string
}

export interface SiteConfig {
  readonly name: string
  readonly shortName: string
  readonly title: string
  readonly description: string
  readonly author: SiteAuthor
  readonly status: SiteStatus
  readonly copyrightYear: number
}

export const siteConfig: SiteConfig = {
  name: 'Abhinash Gupta',
  shortName: 'AG',
  title: 'Abhinash Gupta — Software Engineer & Creative Web Engineer',
  description:
    'Software Engineer specializing in scalable full-stack web architectures, clean component modularity, and interactive digital experiences.',
  author: {
    name: 'Abhinash Gupta',
    shortName: 'AG',
    role: 'Software Engineer & Creative Web Engineer',
    bio: 'Software Engineer specializing in scalable full-stack web architectures, clean component modularity, and interactive digital experiences.',
    email: 'abhinashguptawork@gmail.com',
    github: 'https://github.com/Abhinash01',
    timezone: 'Asia/Kolkata (IST)',
  },
  status: {
    isAvailable: true,
    label: 'Available for Technical Roles',
    shortLabel: 'Available',
    description: 'Available for select opportunities',
  },
  copyrightYear: 2026,
}
