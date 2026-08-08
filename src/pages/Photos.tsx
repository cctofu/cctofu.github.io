import { useRef, useState } from 'react'
import { photos } from '../photos'
import Lightbox from '../components/Lightbox'
import { PageLabel } from '../components/Furniture'
import './Photos.css'

function Photos() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const open = (index: number, element: HTMLButtonElement) => {
    triggerRef.current = element
    setOpenIndex(index)
  }

  const close = () => {
    setOpenIndex(null)
    // Send focus back where it came from.
    triggerRef.current?.focus()
  }

  return (
    <div className="page--scroll photos">
      <PageLabel primary="Photos" secondary={`${photos.length} frames`} />

      <header className="photos__header">
        <p className="photos__intro">
          Shot using Fujifilm XM5 Camera with 27mm lens
        </p>
      </header>

      {photos.length === 0 ? (
        <div className="photos__empty">
          <p>
            Nothing here yet. Drop image files into <code>src/photos/files/</code>, run{' '}
            <code>npm run photos</code>, and they'll appear on this page automatically.
          </p>
        </div>
      ) : (
        <div className="photos__grid">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              className="photos__item"
              onClick={(event) => open(index, event.currentTarget)}
              aria-label={`Open ${photo.id.replace(/[-_]/g, ' ')}`}
            >
              <img
                src={photo.src}
                alt={photo.id.replace(/[-_]/g, ' ')}
                width={photo.width}
                height={photo.height}
                style={photo.aspect ? { aspectRatio: String(photo.aspect) } : undefined}
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      )}

      {openIndex !== null ? (
        <Lightbox
          photos={photos}
          index={openIndex}
          onClose={close}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </div>
  )
}

export default Photos
