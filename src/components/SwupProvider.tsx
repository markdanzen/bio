"use client";

import { useEffect } from "react";
import Swup from "swup";
import SwupHeadPlugin from "@swup/head-plugin";

export default function SwupProvider() {
  useEffect(() => {
    const swup = new Swup({
      containers: ["#swup"],
      animationSelector: '[class*="transition-"]',
      plugins: [new SwupHeadPlugin({ awaitAssets: true })],
    });

    return () => {
      swup.destroy();
    };
  }, []);

  return null;
}
