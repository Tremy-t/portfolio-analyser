
export interface PortfolioAnalysis {
  url: string;
  timestamp: string;
  scores: {
    design: number;
    performance: number;
    accessibility: number;
    seo: number;
    bestPractices: number;
  };
  suggestions: Suggestion[];
  history?: AnalysisHistory[];
}

export interface Suggestion {
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
  link?: {
    url: string;
    text: string;
  };
}

export interface AnalysisHistory {
  timestamp: string;
  scores: {
    design: number;
    performance: number;
    accessibility: number;
    seo: number;
    bestPractices: number;
  };
}
