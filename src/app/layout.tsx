import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import SwupProvider from "@/components/SwupProvider";
import CurtainTransition from "@/components/CurtainTransition";
import "./globals.scss";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Demo Animation",
  description: "Portfolio showcasing skills, projects, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'light' || theme === 'dark') {
                document.documentElement.setAttribute('data-theme', theme);
              }
            } catch (e) {}
          `}
        </Script>
        <SwupProvider />
        <CurtainTransition />
        {children}
      </body>
    </html>
  );
}
