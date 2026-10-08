/**
 * Safe external link utilities and attributes resolver.
 */

export interface ExternalLinkAttributes {
  readonly target?: '_blank'
  readonly rel?: 'noopener noreferrer'
}

/**
 * Checks whether a given URL string points outside the client SPA domain.
 */
export function isExternalUrl(url: string): boolean {
  return /^(https?:\/\/|mailto:|tel:)/i.test(url)
}

/**
 * Generates security and accessibility attributes for links.
 * Adds target="_blank" and rel="noopener noreferrer" for web URLs,
 * while safely omitting target="_blank" for direct mailto: and tel: schemes.
 */
export function getExternalLinkAttributes(url: string): ExternalLinkAttributes {
  if (url.startsWith('mailto:') || url.startsWith('tel:')) {
    return {}
  }
  if (isExternalUrl(url)) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
  return {}
}
