"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/blog", label: "Case Studies" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/experience", label: "Experience" },
  { href: "/leadership", label: "Leadership" },
  { href: "/portfolio", label: "Portfolio" },
];

// Client-side header nav so the mobile menu can expand and collapse.
export default function HeaderNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const handleScroll = () => {
      const nextScrollY = window.scrollY;

      setIsScrolled((current) => {
        if (current) {
          return nextScrollY > 8;
        }

        return nextScrollY > 40;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
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
          </button>
        </div>

        <div id="site-nav-links" className={`site-nav-links${isOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
