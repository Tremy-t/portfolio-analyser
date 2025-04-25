import { useState } from "react";
import { Header } from "@/components/header";
import { UrlInput } from "@/components/url-input";
import { Dashboard } from "@/components/dashboard";
import { PortfolioAnalysis } from "@/lib/types";
import { analyzePortfolio } from "@/lib/mock-data";
import { ThemeProvider } from "@/components/theme-provider";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import { Twitter } from 'lucide-react';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<PortfolioAnalysis | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async (url: string) => {
    try {
      setIsAnalyzing(true);
      
      // Show toast notification
      toast({
        title: "Analysis Started",
        description: "Analyzing your portfolio. This will take a few moments.",
      });

      // Get analysis data
      const result = await analyzePortfolio(url);
      
      setAnalysis(result);
      
      // Show success toast
      toast({
        title: "Analysis Complete",
        description: "Your portfolio analysis is ready to view.",
        variant: "default",
      });
    } catch (error) {
      // Show error toast
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your portfolio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Portfolio Flow Insights</h1>
            <p className="text-muted-foreground text-center mb-8">Analyze your developer portfolio for design, performance, and accessibility.</p>
          </div>
          
          {!analysis ? (
            <div className="animate-fade-in">
              <UrlInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
            </div>
          ) : (
            <div className="animate-slide-in">
              <div className="mb-6 flex justify-between items-center">
                <button
                  onClick={() => setAnalysis(null)}
                  className="text-sm flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1"
                  >
                    <path d="m12 19-7-7 7-7" />
                    <path d="M19 12H5" />
                  </svg>
                  Back to URL Input
                </button>
                <div className="text-sm text-muted-foreground">
                  Last analyzed: {new Date(analysis.timestamp).toLocaleString()}
                </div>
              </div>
              
              <Dashboard analysis={analysis} />
            </div>
          )}
        </main>
        
        <footer className="border-t py-6 md:py-0 mt-8">
          <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-14 px-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Portfolio Flow Insights. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-muted-foreground">
                Built with <span className="text-electric-500">❤</span> for frontend developers
              </p>
              <a 
                href="https://x.com/RyoDabi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
