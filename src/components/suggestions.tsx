
import { cn } from "@/lib/utils";

interface Suggestion {
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  link?: {
    url: string;
    text: string;
  };
}

interface SuggestionsProps {
  suggestions: Suggestion[];
  className?: string;
}

export function Suggestions({ suggestions, className }: SuggestionsProps) {
  // Group suggestions by category
  const groupedSuggestions: Record<string, Suggestion[]> = {};
  
  suggestions.forEach(suggestion => {
    if (!groupedSuggestions[suggestion.category]) {
      groupedSuggestions[suggestion.category] = [];
    }
    groupedSuggestions[suggestion.category].push(suggestion);
  });

  return (
    <div className={cn("bg-card rounded-lg border shadow-sm", className)}>
      <div className="px-4 py-3 border-b">
        <h3 className="font-semibold font-mono">Improvement Suggestions</h3>
      </div>
      <div className="p-4">
        {Object.entries(groupedSuggestions).length > 0 ? (
          <div className="space-y-6">
            {Object.entries(groupedSuggestions).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-medium text-sm mb-2 text-muted-foreground">{category}</h4>
                <div className="space-y-3">
                  {items.map((suggestion, index) => (
                    <div key={index} className="bg-muted/50 rounded-md p-3">
                      <div className="flex items-start justify-between">
                        <h5 className="font-medium text-sm">{suggestion.title}</h5>
                        <div className={cn(
                          "text-xs px-2 py-1 rounded-full",
                          suggestion.priority === 'high' 
                            ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" 
                            : suggestion.priority === 'medium'
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        )}>
                          {suggestion.priority} priority
                        </div>
                      </div>
                      <p className="text-sm mt-1 text-muted-foreground">{suggestion.description}</p>
                      {suggestion.link && (
                        <a 
                          href={suggestion.link.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs mt-2 text-electric-600 dark:text-electric-400 font-medium inline-flex items-center hover:underline"
                        >
                          {suggestion.link.text}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-1"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No suggestions available</p>
          </div>
        )}
      </div>
    </div>
  );
}
