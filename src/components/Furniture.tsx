import './Furniture.css'

/**
 * Decorative frame elements borrowed from the reference layout.
 * Both are fixed, non-interactive and hidden from screen readers — they exist
 * to fill the margins, not to carry meaning.
 */

type EdgeTextProps = {
  text: string
  /** 'down' reads top-to-bottom (default), 'up' reads bottom-to-top. */
  direction?: 'down' | 'up'
}

/** Rotated line of type down the right margin. */
export function EdgeText({ text, direction = 'down' }: EdgeTextProps) {
  return (
    <div className={`edge-text edge-text--${direction}`} aria-hidden="true">
      {text}
    </div>
  )
}

type PageLabelProps = {
  primary: string
  secondary?: string
}

/** Small two-line label pinned top right, opposite the nav. */
export function PageLabel({ primary, secondary }: PageLabelProps) {
  return (
    <div className="page-label" aria-hidden="true">
      <span className="page-label__primary">{primary}</span>
      {secondary ? <span className="page-label__secondary">{secondary}</span> : null}
    </div>
  )
}
