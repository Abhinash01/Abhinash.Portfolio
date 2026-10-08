/**
 * Single source of truth for canonical site navigation routes and link structures.
 */

export interface NavLinkItem {
  readonly label: string
  readonly href: string
  readonly isExternal?: boolean
}

export interface NavPrimaryItem extends NavLinkItem {
  readonly matchPrefix?: boolean
}

export interface NavCTAItem {
  readonly label: string
  readonly href: string
}

export interface FooterSection {
  readonly title: string
  readonly links: readonly NavLinkItem[]
}

/**
 * Primary header navigation links
 */
export const PRIMARY_NAV_ITEMS: readonly NavPrimaryItem[] = [
  { label: 'Work', href: '/projects', matchPrefix: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Primary call to action button
 */
export const PRIMARY_CTA: NavCTAItem = {
  label: "LET'S TALK",
  href: '/contact',
}

/**
 * Mobile drawer navigation links (including home root)
 */
export const MOBILE_NAV_ITEMS: readonly NavLinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Footer navigation directories
 */
export const FOOTER_SECTIONS: Record<'navigation' | 'archive' | 'connect', FooterSection> = {
  navigation: {
    title: 'NAVIGATION',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Work (Projects)', href: '/projects' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  archive: {
    title: 'PORTFOLIO ARCHIVE',
    links: [
      { label: 'WeatherSentinel ↗', href: '/projects/weathersentinel' },
      { label: 'CareerTrack ↗', href: '/projects/careertrack' },
      { label: 'Maa Kamakhya Hydraulic ↗', href: '/projects/maa-kamakhya-hydraulic' },
      { label: 'Jay Hanuman Astro ↗', href: '/projects/jay-hanuman-astro' },
    ],
  },
  connect: {
    title: 'CONNECT',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/Abhinash01', isExternal: true },
      { label: 'Email Direct ✉', href: 'mailto:abhinashguptawork@gmail.com', isExternal: true },
      { label: 'Inquiry Portal ↗', href: '/contact', isExternal: false },
    ],
  },
}

/**
 * Determine whether a given navigation item is active based on the current location pathname.
 */
export function isRouteActive(currentPathname: string, targetHref: string, matchPrefix = false): boolean {
  if (targetHref === '/') {
    return currentPathname === '/'
  }
  if (matchPrefix || targetHref === '/projects') {
    return currentPathname === targetHref || currentPathname.startsWith(`${targetHref}/`)
  }
  return currentPathname === targetHref
}
