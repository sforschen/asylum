import Link from "next/link";

import "./globals.css";
import HeaderNav from "../components/HeaderNav";

// Shared site chrome for every route.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <HeaderNav />

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
