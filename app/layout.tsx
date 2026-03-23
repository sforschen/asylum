import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} bg-white text-black`}>
        <header className="p-6 border-b">
          <nav className="max-w-6xl mx-auto flex justify-between">
            <div className="font-bold">Serenity Forschen</div>
            <div className="space-x-12">
              <a href="/knowledge">Knowledge</a>
              <a href="/experience">Experience</a>
              <a href="/leadership">Leadership</a>
              <a href="/portfolio">Portfolio</a>
              <a href="/contact">Contact</a>
            </div>
          </nav>
        </header>

        {children}

        <footer className="p-6 border-t mt-16 text-center">
          © {new Date().getFullYear()} Serenity Forschen
        </footer>
      </body>
    </html>
  );
}
