import { drawMeshGradient } from "@outpacelabs/avatars";

// Matches GradientAvatar's internals so output looks identical.
export const AVATAR_RENDER_SIZE = 256;
const BLUR_FRACTION = 0.06;

export const avatarBlur = (size: number) =>
  Math.max(1, Math.round(size * BLUR_FRACTION));

export function paintAvatar(canvas: HTMLCanvasElement) {
  const { avatarSeed, avatarSize } = canvas.dataset;
  const ctx = canvas.getContext("2d");
  if (!avatarSeed || !ctx) return;

  ctx.clearRect(0, 0, AVATAR_RENDER_SIZE, AVATAR_RENDER_SIZE);
  drawMeshGradient(ctx, avatarSeed, AVATAR_RENDER_SIZE, {
    displaySize: Number(avatarSize),
  });
}

// Swup swaps in server HTML that React never mounts, so avatars in swapped
// content have to be painted from the DOM.
export function paintAvatars(root: ParentNode = document) {
  root
    .querySelectorAll<HTMLCanvasElement>("canvas[data-avatar-seed]")
    .forEach(paintAvatar);
}
