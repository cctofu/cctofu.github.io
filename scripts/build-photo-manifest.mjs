#!/usr/bin/env node
/**
 * Reads every image in src/photos/files and writes its intrinsic dimensions
 * to src/photos/dimensions.ts.
 *
 * The grid uses these to reserve space before an image loads, which is the
 * difference between a calm page and one that jumps while loading.
 *
 *   npm run photos
 *
 * Runs automatically before every build via the `prebuild` script.
 */

import { readdirSync, writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname, extname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { imageDimensions } from './image-dimensions.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const filesDir = join(root, 'src', 'photos', 'files')
const outFile = join(root, 'src', 'photos', 'dimensions.ts')

const EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'])

if (!existsSync(filesDir)) {
  mkdirSync(filesDir, { recursive: true })
}

const files = readdirSync(filesDir)
  .filter((name) => EXTENSIONS.has(extname(name).toLowerCase()))
  .sort()

const entries = []
const skipped = []

for (const name of files) {
  // 64KB is far more than any of these formats needs for its header.
  const buffer = readFileSync(join(filesDir, name))
  const size = imageDimensions(buffer)
  if (size) {
    entries.push([name, size])
  } else {
    skipped.push(name)
  }
}

const body = entries
  .map(([name, { width, height }]) => `  ${JSON.stringify(name)}: { width: ${width}, height: ${height} },`)
  .join('\n')

const output = `/**
 * GENERATED FILE — do not edit by hand.
 * Run \`npm run photos\` to regenerate from the contents of src/photos/files.
 *
 * Intrinsic pixel dimensions keyed by filename. These let the grid reserve
 * space before an image loads, which is what keeps layout shift at zero.
 */

type PhotoDimensions = {
  width: number
  height: number
}

export const dimensions: Record<string, PhotoDimensions> = {${entries.length ? `\n${body}\n` : ''}}
`

writeFileSync(outFile, output, 'utf8')

console.log(
  `[photos] ${entries.length} image${entries.length === 1 ? '' : 's'} indexed → src/photos/dimensions.ts`,
)

if (skipped.length) {
  console.warn(`[photos] could not read dimensions for: ${skipped.join(', ')}`)
  console.warn('[photos] these still display, but without reserved space in the grid.')
}
