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
          {photos.map((photo, index) => {
            const described = photo.caption.length
              ? photo.caption.join(', ')
              : photo.id.replace(/[-_]/g, ' ')
            return (
            <button
              key={photo.id}
              className="photos__item"
              onClick={(event) => open(index, event.currentTarget)}
              aria-label={`Open ${described}`}
            >
              <img
                src={photo.src}
                alt={described}
                width={photo.width}
                height={photo.height}
                style={photo.aspect ? { aspectRatio: String(photo.aspect) } : undefined}
                loading="lazy"
                decoding="async"
              />
              {photo.caption.length > 0 ? (
                <span className="photos__caption">
                  {photo.caption.map((part, partIndex) => (
                    <span key={part + partIndex} className="photos__caption-part">
                      {part}
                    </span>
                  ))}
                </span>
              ) : null}
            </button>
            )
          })}
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
