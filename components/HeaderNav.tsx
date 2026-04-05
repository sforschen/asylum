"use client";

import { useState } from "react";

import Link from "next/link";

// Client-side header nav so the mobile menu can expand and collapse.
export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <div className="site-nav-bar">
          <Link className="site-brand" href="/">Serenity Forschen</Link>
          <button
            type="button"
            className={`site-nav-toggle${isOpen ? " is-open" : ""}`}
            aria-expanded={isOpen}
            aria-controls="site-nav-links"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div id="site-nav-links" className={`site-nav-links${isOpen ? " is-open" : ""}`}>
          <Link href="/blog" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link href="/knowledge" onClick={() => setIsOpen(false)}>Knowledge</Link>
          <Link href="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="/leadership" onClick={() => setIsOpen(false)}>Leadership</Link>
          <Link href="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
        </div>
      </nav>
    </header>
  );
}
