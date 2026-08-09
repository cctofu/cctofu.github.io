import { dimensions } from './dimensions'

export type Photo = {
  /** Filename without extension — used as the caption fallback and React key. */
  id: string
  filename: string
  src: string
  width?: number
  height?: number
  /** width / height, when known. */
  aspect?: number
  /**
   * Caption parts derived from the filename, e.g.
   * `Palihotel-LosAngeles-2026` → ['Palihotel', 'Los Angeles', '2026'].
   * Empty when the filename carries no meaning (camera dumps, UUIDs).
   */
  caption: string[]
}

/**
 * Every image in src/photos/files becomes a photo. Drop a file in, it shows up —
 * no list to maintain. Vite hashes and optimises them as part of the build.
 */
const modules = import.meta.glob('./files/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,AVIF}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

function toFilename(path: string): string {
  return path.split('/').pop() ?? path
}

function stripExtension(filename: string): string {
  return filename.replace(/\.[^.]+$/, '')
}

/** Camera dumps and UUIDs (IMG_4821, FD917315-F413-...) carry no caption. */
const UNNAMED = /^(?:img|dsc|dscf|p|pxl|photo|screenshot)[-_ ]?\d+$|^[0-9a-f]{8}-[0-9a-f]{4}/i

/** `LosAngeles` → `Los Angeles`, while leaving `NYC` and `SoHo` intact. */
function splitCamelCase(part: string): string {
  return part
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .trim()
}

/**
 * Drops the counter you append to break filename collisions — `name 2`,
 * `name-3`, `name_4`, `name5` all lose the digits. Runs of four or more
 * digits are years, so `...-2026` survives untouched.
 */
function stripDuplicateSuffix(id: string): string {
  let out = id
  let previous: string
  do {
    previous = out
    out = out.replace(/[-_ ]*(?<!\d)\d{1,3}$/, '')
  } while (out !== previous)
  return out
}

/**
 * `Palihotel-LosAngeles-2026` → ['Palihotel', 'Los Angeles', '2026'].
 * Hyphens and underscores separate the parts; camelCase splits within one.
 */
export function captionFromId(id: string): string[] {
  const base = stripDuplicateSuffix(id.trim())
  if (UNNAMED.test(base)) return []
  return base
    .split(/[-_]+/)
    .map(splitCamelCase)
    .filter(Boolean)
}

export const photos: Photo[] = Object.entries(modules)
  .map(([path, src]) => {
    const filename = toFilename(path)
    const dim = dimensions[filename]
    const id = stripExtension(filename)
    return {
      id,
      filename,
      src,
      width: dim?.width,
      height: dim?.height,
      aspect: dim ? dim.width / dim.height : undefined,
      caption: captionFromId(id),
    }
  })
  // Newest first if you prefix filenames with a date (2026-08-08-name.jpg),
  // otherwise this is a stable alphabetical sort.
  .sort((a, b) => b.filename.localeCompare(a.filename, undefined, { numeric: true }))
