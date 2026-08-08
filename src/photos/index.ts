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

export const photos: Photo[] = Object.entries(modules)
  .map(([path, src]) => {
    const filename = toFilename(path)
    const dim = dimensions[filename]
    return {
      id: stripExtension(filename),
      filename,
      src,
      width: dim?.width,
      height: dim?.height,
      aspect: dim ? dim.width / dim.height : undefined,
    }
  })
  // Newest first if you prefix filenames with a date (2026-08-08-name.jpg),
  // otherwise this is a stable alphabetical sort.
  .sort((a, b) => b.filename.localeCompare(a.filename, undefined, { numeric: true }))
