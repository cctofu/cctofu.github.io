# Photos

Drop image files in this folder and they appear on `/photos` automatically —
there's no list to maintain.

```
npm run photos    # re-reads this folder and regenerates dimensions.ts
```

That also runs automatically before every `npm run build`.

## Naming

Files are sorted newest-first by filename, so date-prefixing gives you
chronological ordering for free:

```
2026-08-08-lisbon-rooftop.jpg
2026-07-22-morning-train.jpg
```

The filename (minus extension and with dashes turned into spaces) becomes the
image's alt text, so it's worth naming them descriptively.

## Before you add them

Full-resolution camera files will make this page enormous. Resize to roughly
2000px on the long edge and convert to WebP first:

```bash
# needs imagemagick: brew install imagemagick
magick input.jpg -resize 2000x2000\> -quality 82 output.webp
```

Supported extensions: `.jpg` `.jpeg` `.png` `.webp` `.avif`
