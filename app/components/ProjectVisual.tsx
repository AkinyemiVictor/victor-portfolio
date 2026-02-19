"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

type ProjectVisualProps = {
  layout: string;
  liveLink?: string;
  thumbnail?: string;
  title: string;
};

type RgbColor = { r: number; g: number; b: number };
type HslColor = { h: number; s: number; l: number };
type HueBucket = { weight: number; r: number; g: number; b: number };

const HUE_BUCKETS = 24;
const SAMPLE_SIZE = 52;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function rgbToHsl({ r, g, b }: RgbColor): HslColor {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;

  if (max === min) {
    return { h: 0, s: 0, l: lightness };
  }

  const delta = max - min;
  const saturation =
    lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  let hue = 0;
  if (max === red) {
    hue = (green - blue) / delta + (green < blue ? 6 : 0);
  } else if (max === green) {
    hue = (blue - red) / delta + 2;
  } else {
    hue = (red - green) / delta + 4;
  }

  return { h: hue / 6, s: saturation, l: lightness };
}

function hueToRgb(p: number, q: number, t: number): number {
  let hue = t;
  if (hue < 0) {
    hue += 1;
  }
  if (hue > 1) {
    hue -= 1;
  }
  if (hue < 1 / 6) {
    return p + (q - p) * 6 * hue;
  }
  if (hue < 1 / 2) {
    return q;
  }
  if (hue < 2 / 3) {
    return p + (q - p) * (2 / 3 - hue) * 6;
  }
  return p;
}

function hslToRgb({ h, s, l }: HslColor): RgbColor {
  if (s === 0) {
    const gray = Math.round(l * 255);
    return { r: gray, g: gray, b: gray };
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  return {
    r: Math.round(hueToRgb(p, q, h + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, h) * 255),
    b: Math.round(hueToRgb(p, q, h - 1 / 3) * 255),
  };
}

function boostAccent(color: RgbColor): RgbColor {
  const hsl = rgbToHsl(color);
  return hslToRgb({
    h: hsl.h,
    s: clamp(Math.max(hsl.s, 0.42), 0, 0.9),
    l: clamp(hsl.l, 0.34, 0.64),
  });
}

function extractDominantAccent(image: HTMLImageElement): RgbColor | null {
  const canvas = document.createElement("canvas");
  canvas.width = SAMPLE_SIZE;
  canvas.height = SAMPLE_SIZE;

  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) {
    return null;
  }

  try {
    context.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
    const pixels = context.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE).data;
    const buckets: HueBucket[] = Array.from({ length: HUE_BUCKETS }, () => ({
      weight: 0,
      r: 0,
      g: 0,
      b: 0,
    }));

    let fallbackWeight = 0;
    let fallbackRed = 0;
    let fallbackGreen = 0;
    let fallbackBlue = 0;

    for (let index = 0; index < pixels.length; index += 4) {
      const alpha = pixels[index + 3];
      if (alpha < 120) {
        continue;
      }

      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const hsl = rgbToHsl({ r: red, g: green, b: blue });

      if (hsl.l < 0.08 || hsl.l > 0.92) {
        continue;
      }

      fallbackWeight += 1;
      fallbackRed += red;
      fallbackGreen += green;
      fallbackBlue += blue;

      if (hsl.s < 0.16) {
        continue;
      }

      const hueIndex = Math.min(
        HUE_BUCKETS - 1,
        Math.floor(hsl.h * HUE_BUCKETS),
      );
      const weight =
        (0.45 + hsl.s) * (0.65 + (1 - Math.abs(hsl.l - 0.5) * 1.8));
      const bucket = buckets[hueIndex];

      bucket.weight += weight;
      bucket.r += red * weight;
      bucket.g += green * weight;
      bucket.b += blue * weight;
    }

    let bestBucket: HueBucket | null = null;
    for (const bucket of buckets) {
      if (!bestBucket || bucket.weight > bestBucket.weight) {
        bestBucket = bucket;
      }
    }

    if (bestBucket && bestBucket.weight > 0) {
      return boostAccent({
        r: Math.round(bestBucket.r / bestBucket.weight),
        g: Math.round(bestBucket.g / bestBucket.weight),
        b: Math.round(bestBucket.b / bestBucket.weight),
      });
    }

    if (fallbackWeight === 0) {
      return null;
    }

    return boostAccent({
      r: Math.round(fallbackRed / fallbackWeight),
      g: Math.round(fallbackGreen / fallbackWeight),
      b: Math.round(fallbackBlue / fallbackWeight),
    });
  } catch {
    return null;
  }
}

export default function ProjectVisual({
  layout,
  liveLink,
  thumbnail,
  title,
}: ProjectVisualProps) {
  const [accent, setAccent] = useState<{ rgb: string; src: string } | null>(
    null,
  );

  useEffect(() => {
    if (!thumbnail) {
      return;
    }

    let isActive = true;
    const source = new window.Image();
    source.decoding = "async";
    source.crossOrigin = "anonymous";

    source.onload = () => {
      if (!isActive) {
        return;
      }

      const accent = extractDominantAccent(source);
      if (!accent) {
        setAccent((current) => {
          if (!current || current.src !== thumbnail) {
            return current;
          }
          return null;
        });
        return;
      }

      setAccent({
        rgb: `${accent.r}, ${accent.g}, ${accent.b}`,
        src: thumbnail,
      });
    };

    source.onerror = () => {
      if (isActive) {
        setAccent((current) => {
          if (!current || current.src !== thumbnail) {
            return current;
          }
          return null;
        });
      }
    };

    source.src = thumbnail;

    return () => {
      isActive = false;
    };
  }, [thumbnail]);

  const accentRgb = accent && accent.src === thumbnail ? accent.rgb : null;

  const style = useMemo(() => {
    if (!accentRgb) {
      return undefined;
    }

    return {
      "--project-accent-rgb": accentRgb,
      "--project-accent": `rgb(${accentRgb})`,
    } as CSSProperties;
  }, [accentRgb]);

  return (
    <div className="project-visual-shell" style={style}>
      <div
        className={`project-visual${thumbnail ? " has-thumbnail" : ""}`}
        data-layout={layout}
      >
        <div className="project-media-frame">
          {thumbnail ? (
            <Image
              className="project-thumbnail"
              src={thumbnail}
              alt={`${title} preview`}
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
            />
          ) : (
            <>
              <span className="visual-layer visual-main" />
              <span className="visual-layer visual-sub" />
              <span className="visual-layer visual-chip" />
            </>
          )}
        </div>
        {liveLink ? (
          <a
            className="project-cta"
            href={liveLink}
            aria-label={`Visit ${title}`}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 3h7v7h-2V6.41l-8.3 8.3-1.4-1.42 8.3-8.29H14V3Z" />
              <path d="M5 5h6v2H7v10h10v-4h2v6H5V5Z" />
            </svg>
          </a>
        ) : null}
      </div>
    </div>
  );
}
