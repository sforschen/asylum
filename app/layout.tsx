import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import HeaderNav from "../components/HeaderNav";
import ScrollReveal from "../components/ScrollReveal";

export const metadata: Metadata = {
  title: {
    default: "Serenity Forschen",
    template: "%s | Serenity Forschen",
  },
  description:
    "Portfolio and professional site for Serenity Forschen, focused on leadership, marketing operations, design systems, website management, and digital execution.",
};

// Shared site chrome for every route.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <HeaderNav />
        <ScrollReveal />

        {children}

        <footer className="site-footer">
          {/* Utility links live in the footer to keep the top nav focused. */}
          <div className="site-footer-inner">
            <p className="site-footer-copy">&copy; {new Date().getFullYear()} Serenity Forschen</p>
            <div className="site-footer-links">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
