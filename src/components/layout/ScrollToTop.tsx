import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop ensures the window scrolls back to the top-left coordinate
 * upon every client-side route navigation.
 */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    })
  }, [pathname])

  return null
}
