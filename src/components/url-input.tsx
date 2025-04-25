
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface UrlInputProps {
  onAnalyze: (url: string) => void;
  isAnalyzing: boolean;
}

export function UrlInput({ onAnalyze, isAnalyzing }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      onAnalyze(url);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-card rounded-lg border shadow-sm p-6">
      <h2 className="text-xl font-bold mb-4 font-mono">Enter Portfolio URL</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="portfolio-url" className="text-sm font-medium mb-1 block">
            Portfolio Website URL
          </label>
          <Input
            id="portfolio-url"
            placeholder="https://yourportfolio.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="font-mono text-sm"
          />
        </div>
        <div>
          <label htmlFor="github-url" className="text-sm font-medium mb-1 block">
            GitHub Repository URL (optional)
          </label>
          <Input
            id="github-url"
            placeholder="https://github.com/yourusername/portfolio"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className="font-mono text-sm"
          />
        </div>
        <Button 
          type="submit" 
          disabled={!url || isAnalyzing}
          className="bg-electric-500 hover:bg-electric-600 text-white"
        >
          {isAnalyzing ? "Analyzing..." : "Analyze Portfolio"}
        </Button>
      </form>
    </div>
  );
}
