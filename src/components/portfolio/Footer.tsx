export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-md bg-gradient-primary" />
          <span className="text-sm text-muted-foreground">
            © 2026 Prince Parmar. All Rights Reserved.
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          Crafted with passion · Flutter & beyond
        </span>
      </div>
    </footer>
  );
}
