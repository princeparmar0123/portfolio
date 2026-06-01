export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Prince Parmar
        </p>
        <p className="text-xs text-muted-foreground">
          Mobile development · Flutter & Android
        </p>
      </div>
    </footer>
  );
}
