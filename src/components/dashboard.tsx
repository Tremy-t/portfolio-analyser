
import { useState } from "react";
import { ScoreCard } from "./score-card";
import { SitePreview } from "./site-preview";
import { Suggestions } from "./suggestions";
import { PerformanceChart } from "./performance-chart";
import { PortfolioAnalysis } from "@/lib/types";

interface DashboardProps {
  analysis: PortfolioAnalysis;
}

export function Dashboard({ analysis }: DashboardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-3 font-mono">Portfolio Preview</h2>
          <SitePreview url={analysis.url} />
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-3 font-mono">Performance Analysis</h2>
          <PerformanceChart data={analysis.scores} />
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-3 font-mono">Score Overview</h2>
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
            <ScoreCard 
              title="Design" 
              score={analysis.scores.design} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 12H11v6.5H5.5V12Z" /><path d="M13 21h6.5v-6.5H13V21Z" /><path d="M5.5 3H12v6.5H5.5V3Z" /><path d="M13 3h6.5v6.5H13V3Z" /></svg>}
              className="col-span-1" 
            />
            <ScoreCard 
              title="Performance" 
              score={analysis.scores.performance} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
              className="col-span-1" 
            />
            <ScoreCard 
              title="Accessibility" 
              score={analysis.scores.accessibility} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m16.8 7.6-6.387 9.5a.697.697 0 0 1-1.123 0v0c-.202-.3-.202-.7 0-1L15.7 7.6" /><path d="M12 7.5v9" /></svg>}
              className="col-span-1" 
            />
            <ScoreCard 
              title="SEO" 
              score={analysis.scores.seo} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>}
              className="col-span-1" 
            />
            <ScoreCard 
              title="Best Practices" 
              score={analysis.scores.bestPractices} 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>}
              className="col-span-1" 
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-3 font-mono">Improvement Suggestions</h2>
          <Suggestions suggestions={analysis.suggestions} />
        </div>
      </div>
    </div>
  );
}
