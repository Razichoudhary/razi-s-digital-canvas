export function Footer() {
  return (
    <footer className="px-4 pb-10">
      <div className="glass mx-auto max-w-6xl rounded-3xl px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="text-lg font-bold tracking-tight">MOHD RAZI CHAUDHARY</p>
            <p className="text-muted-foreground mt-1 text-sm">
              AI/ML Student • Aspiring Full-Stack Engineer
            </p>
          </div>
          <nav aria-label="Footer" className="flex gap-5 text-sm">
            <a
              href="https://www.linkedin.com/in/razi-chaudhary"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:razigour06@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </nav>
        </div>
        <p className="text-muted-foreground mt-8 border-t pt-6 text-xs">
          © 2026 Mohd Razi Chaudhary. Built with curiosity &amp; code.
        </p>
      </div>
    </footer>
  );
}
