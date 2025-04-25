
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-electric-500"
          >
            <rect width="8" height="8" x="2" y="2" rx="1" />
            <path d="M6 10v12" />
            <path d="M10 2h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H10Z" />
            <path d="M10 18h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H10Z" />
            <path d="M2 22h20" />
          </svg>
          <span className="font-bold text-lg md:text-xl font-mono">PortfolioFlow</span>
          <span className="hidden sm:inline-block text-xs text-muted-foreground">Insights</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
