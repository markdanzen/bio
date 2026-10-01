"use client";

import { useEffect } from "react";
import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";
import { paintAvatars } from "@/lib/avatar";

export default function SwupProvider() {
  useEffect(() => {
    const swup = new Swup({
      containers: ["#swup"],
      animationSelector: '[class*="transition-"]',
      plugins: [new SwupHeadPlugin({ awaitAssets: true })],
      requestHeaders: { "X-Swup-Request": "1" },
    });

    swup.hooks.on("content:replace", () => paintAvatars());

    // Delegated so it keeps working on content Swup swaps in, where React
    // handlers are not attached.
    const onClick = (event: MouseEvent) => {
      const button = (event.target as Element).closest<HTMLButtonElement>(
        "[data-see-more]",
      );
      if (!button) return;
      const listId = button.getAttribute("aria-controls");
      if (listId) document.getElementById(listId)?.removeAttribute("data-collapsed");
      button.setAttribute("aria-expanded", "true");
      button.hidden = true;
    };
    document.addEventListener("click", onClick);

    return () => {
      swup.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
