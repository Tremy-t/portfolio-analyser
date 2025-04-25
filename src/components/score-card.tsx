
import { cn } from "@/lib/utils";

interface ScoreCardProps {
  title: string;
  score: number;
  icon: React.ReactNode;
  className?: string;
}

export function ScoreCard({ title, score, icon, className }: ScoreCardProps) {
  // Determine color based on score
  const getColorClass = () => {
    if (score >= 90) return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
    if (score >= 70) return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400";
    return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
  };

  const scoreColorClass = getColorClass();

  return (
    <div className={cn(
      "bg-card rounded-lg border shadow-sm p-4 flex flex-col h-full",
      className
    )}>
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-sm">{title}</h3>
        <div className="text-muted-foreground">{icon}</div>
      </div>
      <div className="mt-3 flex items-end">
        <div className={cn(
          "text-3xl md:text-4xl font-bold font-mono",
          scoreColorClass.split(" ").pop()
        )}>
          {score}
        </div>
        <div className="ml-1 text-muted-foreground text-sm mb-1">/100</div>
      </div>
      <div className="mt-2 w-full bg-secondary rounded-full h-2">
        <div 
          className={cn(
            "h-2 rounded-full",
            scoreColorClass.split(" ").pop()?.replace("text", "bg")
          )}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}
