"use client";

import { useEffect, useRef } from "react";
import { AVATAR_RENDER_SIZE, avatarBlur, paintAvatar } from "@/lib/avatar";

type AvatarProps = {
  /** Each unique seed renders a unique gradient. */
  seed: string;
  /** Display size in pixels; also sets the level of detail. */
  size?: number;
  /** Corner radius. Number = pixels, string = any CSS length. */
  radius?: number | string;
  /** Stretch to fill the parent instead of rendering at a fixed `size`. */
  fill?: boolean;
};

export default function Avatar({
  seed,
  size = 32,
  radius = "9999px",
  fill,
}: AvatarProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) paintAvatar(canvasRef.current);
  }, [seed, size]);

  return (
    <span
      style={{
        display: fill ? "block" : "inline-block",
        overflow: "hidden",
        borderRadius: radius,
        width: fill ? "100%" : size,
        height: fill ? "100%" : size,
      }}
    >
      <canvas
        ref={canvasRef}
        data-avatar-seed={seed}
        data-avatar-size={size}
        width={AVATAR_RENDER_SIZE}
        height={AVATAR_RENDER_SIZE}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          filter: `blur(${avatarBlur(size)}px)`,
        }}
      />
    </span>
  );
}
