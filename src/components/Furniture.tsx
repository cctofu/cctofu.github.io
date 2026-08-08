import './Furniture.css'

/**
 * Decorative frame elements borrowed from the reference layout.
 * Both are fixed, non-interactive and hidden from screen readers — they exist
 * to fill the margins, not to carry meaning.
 */

type EdgeTextProps = {
  text: string
}

/** Rotated line of type reading top-to-bottom down the right margin. */
export function EdgeText({ text }: EdgeTextProps) {
  return (
    <div className="edge-text" aria-hidden="true">
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
