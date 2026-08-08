import { useId } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { STAMP_PATH } from './stampPath'
import './Stamp.css'

type StampProps = {
  /**
   * Photograph shown through the stamp. It is scaled to cover the whole
   * viewport, and the stamp reveals only the slice lying behind it — a hole
   * cut in a sheet of paper laid over a print. Without it the stamp is a
   * blank sheet and `children` fills it.
   */
  image?: string
  /** Rendered inside the perforated border. */
  children?: ReactNode
  /** Extra class for page-specific styling. */
  className?: string
}

/**
 * A postage stamp: solid body with punched perforations round the edge.
 *
 * The outline is an SVG clipPath in objectBoundingBox units, so it scales with
 * the element and needs no JavaScript measurement. See stampPath.ts for the
 * geometry and why this is a clip-path rather than a CSS mask.
 */
function Stamp({ image, children, className }: StampProps) {
  // useId can emit colons, which are awkward inside url(#...).
  const clipId = `stamp-${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  const classes = ['stamp', image ? 'stamp--window' : 'stamp--blank', className]
    .filter(Boolean)
    .join(' ')

  const style = {
    clipPath: `url(#${clipId})`,
    ...(image ? { '--stamp-image': `url(${image})` } : {}),
  } as CSSProperties

  return (
    <>
      <svg className="stamp__defs" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={STAMP_PATH} clipRule="evenodd" />
          </clipPath>
        </defs>
      </svg>

      <div className={classes} style={style}>
        {children ? <div className="stamp__inner">{children}</div> : null}
      </div>
    </>
  )
}

export default Stamp
