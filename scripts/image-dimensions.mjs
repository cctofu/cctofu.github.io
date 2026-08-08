/**
 * Minimal image dimension reader — no dependencies.
 *
 * Reads only the header bytes of PNG, JPEG, GIF, WebP and AVIF/HEIF files.
 * This exists so the photo manifest doesn't need `image-size` or `sharp`
 * (the latter being a native module that makes CI unhappy).
 *
 * Returns { width, height } or null if the format isn't recognised.
 */

function readPng(buf) {
  // 8-byte signature, then IHDR: 4-byte length, 4-byte type, then W and H.
  if (buf.length < 24) return null
  if (buf.readUInt32BE(0) !== 0x89504e47) return null
  if (buf.toString('ascii', 12, 16) !== 'IHDR') return null
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) }
}

function readGif(buf) {
  if (buf.length < 10) return null
  const sig = buf.toString('ascii', 0, 6)
  if (sig !== 'GIF87a' && sig !== 'GIF89a') return null
  return { width: buf.readUInt16LE(6), height: buf.readUInt16LE(8) }
}

function readJpeg(buf) {
  if (buf.length < 4) return null
  if (buf.readUInt16BE(0) !== 0xffd8) return null

  let offset = 2
  while (offset < buf.length - 9) {
    // Markers are 0xFF followed by a type byte; runs of 0xFF are padding.
    if (buf[offset] !== 0xff) {
      offset += 1
      continue
    }
    const marker = buf[offset + 1]
    if (marker === 0xff) {
      offset += 1
      continue
    }

    // Standalone markers carry no length payload.
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2
      continue
    }

    const length = buf.readUInt16BE(offset + 2)

    // SOF0–SOF15 hold the frame dimensions. DHT (C4), JPG (C8) and DAC (CC)
    // sit in the same numeric range but are not start-of-frame markers.
    const isSof =
      marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc

    if (isSof) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) }
    }

    // Start of scan — pixel data follows, no dimensions left to find.
    if (marker === 0xda) return null

    offset += 2 + length
  }
  return null
}

function readWebp(buf) {
  if (buf.length < 30) return null
  if (buf.toString('ascii', 0, 4) !== 'RIFF') return null
  if (buf.toString('ascii', 8, 12) !== 'WEBP') return null

  const format = buf.toString('ascii', 12, 16)

  if (format === 'VP8X') {
    // 24-bit little-endian canvas dimensions, stored minus one.
    const width = buf.readUIntLE(24, 3) + 1
    const height = buf.readUIntLE(27, 3) + 1
    return { width, height }
  }

  if (format === 'VP8 ') {
    // Lossy: 3-byte start code, then 14-bit width and height.
    if (buf[23] !== 0x9d || buf[24] !== 0x01 || buf[25] !== 0x2a) return null
    return {
      width: buf.readUInt16LE(26) & 0x3fff,
      height: buf.readUInt16LE(28) & 0x3fff,
    }
  }

  if (format === 'VP8L') {
    // Lossless: 1-byte signature then 28 bits packing both dimensions.
    if (buf[20] !== 0x2f) return null
    const bits = buf.readUInt32LE(21)
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    }
  }

  return null
}

function readIsobmff(buf) {
  // AVIF / HEIC. Walk boxes looking for `ispe`, which holds the image extent.
  if (buf.length < 12) return null
  if (buf.toString('ascii', 4, 8) !== 'ftyp') return null

  const marker = Buffer.from('ispe', 'ascii')
  const index = buf.indexOf(marker)
  if (index === -1 || index + 16 > buf.length) return null

  // ispe: 4-byte type, 1-byte version, 3-byte flags, then W and H.
  return {
    width: buf.readUInt32BE(index + 8),
    height: buf.readUInt32BE(index + 12),
  }
}

const READERS = [readPng, readGif, readJpeg, readWebp, readIsobmff]

export function imageDimensions(buffer) {
  for (const reader of READERS) {
    try {
      const result = reader(buffer)
      if (result && result.width > 0 && result.height > 0) return result
    } catch {
      // Malformed header for this format; try the next reader.
    }
  }
  return null
}

export default imageDimensions
