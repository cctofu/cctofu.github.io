/**
 * Perforated stamp outline, expressed in objectBoundingBox units (0–1).
 *
 * Why a path and not a CSS mask: the mask approach needed a tiled
 * radial-gradient composited with a padding-box layer, which is impossible to
 * verify without a browser and fails silently as a whole declaration if any
 * part of the shorthand is rejected. A path is deterministic and renders the
 * same in any SVG engine.
 *
 * Geometry measured from the reference stamp (280px wide): perforation pitch
 * ~1/12.7 of the width, hole radius ~1/52 of the width, leaving a flat land
 * between holes about as wide as the hole itself. Rounded to 1/12 and 1/48 so
 * the holes divide both edges evenly and none is clipped at a corner.
 */

/** Holes along the short edge. 4:5 aspect means 15 along the long edge. */
const ACROSS = 12
const DOWN = 15

/**
 * Hole radius as a fraction of width. Because objectBoundingBox units scale x
 * by width and y by height, a circle needs different x and y radii to survive
 * that stretch: ry is rx divided by the 1.25 aspect ratio.
 */
const RX = 1 / 48
const RY = RX / 1.25

/** One ellipse as a closed subpath, drawn as two half arcs. */
function hole(cx: number, cy: number): string {
  const f = (n: number) => Number(n.toFixed(6))
  return (
    `M${f(cx - RX)},${f(cy)}` +
    `a${f(RX)},${f(RY)} 0 1,0 ${f(RX * 2)},0` +
    `a${f(RX)},${f(RY)} 0 1,0 ${f(-RX * 2)},0Z`
  )
}

function buildPath(): string {
  // Full-bleed rectangle, then holes subtracted via clip-rule="evenodd".
  const parts = ['M0,0H1V1H0Z']

  // A Set keyed on the coordinate pair: the four corners sit on two edges
  // each, and evenodd would XOR a duplicated hole back into solid material.
  const seen = new Set<string>()
  const add = (cx: number, cy: number) => {
    const key = `${cx.toFixed(6)},${cy.toFixed(6)}`
    if (seen.has(key)) return
    seen.add(key)
    parts.push(hole(cx, cy))
  }

  for (let i = 0; i <= ACROSS; i += 1) {
    add(i / ACROSS, 0)
    add(i / ACROSS, 1)
  }
  for (let j = 0; j <= DOWN; j += 1) {
    add(0, j / DOWN)
    add(1, j / DOWN)
  }

  return parts.join('')
}

export const STAMP_PATH = buildPath()

