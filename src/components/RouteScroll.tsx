import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route-driven scroll behaviour.
 *
 * Two jobs:
 *
 * 1. Reset the scroll position on navigation. React Router keeps it, so
 *    leaving Photos halfway down and clicking [ABOUT] would land mid-page.
 *
 * 2. Lock the document on pages that are meant to hold still. `.page--fixed`
 *    already clips its own content, but body and .container are min-height
 *    100vh while the page is 100dvh — on mobile 100vh includes the area
 *    behind the URL bar, so the document itself could still scroll by that
 *    difference. Locking html and body removes it.
 *
 * Which pages scroll is read from the DOM rather than a list of routes kept
 * here: the page components already declare `.page--scroll` or
 * `.page--fixed`, and a second list would eventually disagree with them.
 * This runs in an effect, after the new route has been committed.
 */
function RouteScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const scrollable = document.querySelector('.page--scroll') !== null
    const root = document.documentElement
    root.classList.toggle('is-scroll-locked', !scrollable)
    document.body.classList.toggle('is-scroll-locked', !scrollable)

    return () => {
      root.classList.remove('is-scroll-locked')
      document.body.classList.remove('is-scroll-locked')
    }
  }, [pathname])

  return null
}

export default RouteScroll
