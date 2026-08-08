#!/usr/bin/env python3
"""
Turn a paper scan into public/paper-tile.webp — a small, seamless,
cream-tinted grain used as the page background.

    python3 scripts/build-paper-tile.py            # default grain, 2.5
    python3 scripts/build-paper-tile.py 1.5        # softer
    python3 scripts/build-paper-tile.py 4          # coarser
    python3 scripts/build-paper-tile.py 2.5 public/other.jpg

Source: public/paper.jpg if present, otherwise public/paper.png.

The argument is a target grain standard deviation in 0-255 levels, not a
percentage of the source. That matters because different scans have wildly
different contrast — the current paper.jpg has roughly twice the fibre
contrast of the paper.png it replaced, so the same "50% strength" would have
looked twice as coarse. Targeting the measured result keeps the page looking
the same whichever scan you feed it.

Three problems this solves, in order:

1. Size. Scans run to several megabytes, far too heavy to sit behind every
   page. The output is tens of kilobytes.

2. Seams. Scans are not tileable: opposite edges typically differ two to three
   times more than the internal grain, so plain repetition shows a grid. A
   centre crop is mirrored into a 2x2 block, which makes every edge meet its
   own reflection and therefore match exactly.

   Mirroring alone is not enough. Any slow lighting variation across the crop
   becomes a symmetric pattern once mirrored and reads as banding when tiled.
   So the crop is high-passed first — subtract a heavy blur, add the mean back
   — which discards the lighting and keeps the fibre.

3. Colour. Scans are near-white; the site is warm cream. Each pixel's
   luminance is taken as a proportion of the crop's mean and applied to
   #f2eddc, so the grain survives and the tile's average colour lands exactly
   on the cream it replaces. Softening pulls pixels toward that same mean, so
   changing the grain never shifts the hue.
"""

import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "paper-tile.webp"

BLUR = 6            # high-pass radius; swept against banding for this scan
MARGIN = 0.96       # keep off the very edge of the scan
CREAM = np.array([242, 237, 220], dtype=float)   # must match --paper
DEFAULT_GRAIN = 2.5


def find_source() -> Path:
    for name in ("paper.jpg", "paper.jpeg", "paper.png"):
        p = ROOT / "public" / name
        if p.exists():
            return p
    raise SystemExit("no paper.jpg / paper.jpeg / paper.png in public/")


def main() -> None:
    target = DEFAULT_GRAIN
    if len(sys.argv) > 1:
        target = float(sys.argv[1])
        if not 0 <= target <= 40:
            raise SystemExit("target grain should be between 0 and 40")
    src_path = Path(sys.argv[2]) if len(sys.argv) > 2 else find_source()
    if not src_path.is_absolute():
        src_path = ROOT / src_path

    src = Image.open(src_path).convert("RGB")
    w, h = src.size

    # Largest square that fits, minus a margin: scan edges carry vignetting
    # and sometimes the edge of the sheet itself.
    size = int(min(w, h) * MARGIN)
    cx, cy = w // 2, h // 2
    crop = src.crop((cx - size // 2, cy - size // 2, cx + size // 2, cy + size // 2))

    # High-pass: keep the fibre, drop the lighting.
    a = np.asarray(crop).astype(float)
    lo = np.asarray(crop.filter(ImageFilter.GaussianBlur(BLUR))).astype(float)
    crop = Image.fromarray(np.clip(a - lo + lo.mean(axis=(0, 1)), 0, 255).astype(np.uint8))

    # Mirror into a seamless 2x2 tile.
    tile = Image.new("RGB", (size * 2, size * 2))
    tile.paste(crop, (0, 0))
    tile.paste(ImageOps.mirror(crop), (size, 0))
    tile.paste(ImageOps.flip(crop), (0, size))
    tile.paste(ImageOps.mirror(ImageOps.flip(crop)), (size, size))

    # Relative luminance, then solve for the strength that hits the target.
    t = np.asarray(tile).astype(float)
    lum = t.mean(axis=2)
    dev = lum / lum.mean() - 1.0
    full = (CREAM[None, None, :] * (1.0 + dev[:, :, None])).reshape(-1, 3).std(axis=0).mean()
    strength = min(1.0, target / full) if full else 0.0

    out = CREAM[None, None, :] * (1.0 + dev[:, :, None] * strength)
    tinted = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8))

    # Keep the tile a sensible size for a repeating background.
    if tinted.size[0] > 1280:
        tinted = tinted.resize((1280, 1280), Image.LANCZOS)

    tinted.save(OUT, "WEBP", quality=88, method=6)

    arr = np.asarray(tinted).astype(float).reshape(-1, 3)
    print(f"{src_path.name} -> {OUT.relative_to(ROOT)}  "
          f"{tinted.size[0]}x{tinted.size[1]}  {OUT.stat().st_size / 1024:.1f}KB")
    print(f"  source grain at full strength {full:.2f}; scaled by {strength:.3f}")
    print(f"  grain std   {arr.std(axis=0).round(2)}  (target {target})")
    print(f"  mean colour {arr.mean(axis=0).round(1)}  (target {CREAM})")


if __name__ == "__main__":
    main()
