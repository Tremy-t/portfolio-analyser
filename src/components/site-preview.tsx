
interface SitePreviewProps {
  url: string;
}

export function SitePreview({ url }: SitePreviewProps) {
  return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center px-4 py-2 bg-muted/50 border-b">
        <div className="flex space-x-1">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-4 flex-1 overflow-hidden">
          <div className="bg-background/90 text-xs px-2 py-1 rounded flex items-center justify-between overflow-hidden">
            <span className="truncate font-mono">{url}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2 text-muted-foreground flex-shrink-0"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative aspect-[16/9] md:aspect-auto md:h-[500px] bg-background/50">
        {url ? (
          <iframe
            src={url}
            title="Site Preview"
            className="absolute inset-0 w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-muted-foreground">
              Enter a URL to preview
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
