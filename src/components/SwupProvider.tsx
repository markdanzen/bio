"use client";

import { useEffect } from "react";
import Swup from "swup";

export default function SwupProvider() {
  useEffect(() => {
    const swup = new Swup({
      containers: ["#swup"],
      animationSelector: '[class*="transition-"]',
    });

    return () => {
      swup.destroy();
    };
  }, []);

  return null;
}
