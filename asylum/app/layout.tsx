export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <header className="p-6 border-b">
          <nav className="max-w-6xl mx-auto flex justify-between">
            <div className="font-bold">Serenity</div>
            <div className="space-x-6">
              <a href="/about">About</a>
              <a href="/case-studies">Work</a>
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