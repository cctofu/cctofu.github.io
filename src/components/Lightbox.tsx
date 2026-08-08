import { useCallback, useEffect, useRef } from 'react'
import type { Photo } from '../photos'
import './Lightbox.css'

type LightboxProps = {
  photos: Photo[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const photo = photos[index]

  const goTo = useCallback(
    (delta: number) => {
      const next = (index + delta + photos.length) % photos.length
      onNavigate(next)
    },
    [index, photos.length, onNavigate],
  )

  // Keyboard: escape to close, arrows to move, tab stays inside the dialog.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goTo(1)
        return
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goTo(-1)
        return
      }
      if (event.key !== 'Tab') return

      const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled])',
      )
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [goTo, onClose])

  // Lock the page behind the overlay.
  useEffect(() => {
    document.body.classList.add('is-locked')
    return () => document.body.classList.remove('is-locked')
  }, [])

  // Move focus in on open. Returning focus to the thumbnail is handled by
  // the Photos page, which knows which one was clicked.
  useEffect(() => {
    closeRef.current?.focus()
  }, [])

  // Warm the neighbours so arrow-key browsing doesn't flash.
  useEffect(() => {
    if (photos.length < 2) return
    const neighbours = [
      photos[(index + 1) % photos.length],
      photos[(index - 1 + photos.length) % photos.length],
    ]
    neighbours.forEach((neighbour) => {
      const img = new Image()
      img.src = neighbour.src
    })
  }, [index, photos])

  if (!photo) return null

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      ref={dialogRef}
      onClick={(event) => {
        // Click on the backdrop, not the image, closes.
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {/* Live so arrow-key navigation is announced, not silent. */}
      <div className="lightbox__counter" aria-live="polite">
        {pad(index + 1)} / {pad(photos.length)}
      </div>

      <button ref={closeRef} className="lightbox__close" onClick={onClose}>
        [CLOSE]
      </button>

      <figure className="lightbox__figure">
        <img
          className="lightbox__image"
          src={photo.src}
          alt={photo.id.replace(/[-_]/g, ' ')}
          width={photo.width}
          height={photo.height}
          decoding="async"
        />
      </figure>

      {photos.length > 1 ? (
        <div className="lightbox__controls">
          <button className="lightbox__nav" onClick={() => goTo(-1)} aria-label="Previous photo">
            [&lt;]
          </button>
          <button className="lightbox__nav" onClick={() => goTo(1)} aria-label="Next photo">
            [&gt;]
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Lightbox
