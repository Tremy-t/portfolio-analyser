
import { PortfolioAnalysis } from "./types";

// Wait for a specified amount of time
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate an analysis of a portfolio website
export const analyzePortfolio = async (url: string): Promise<PortfolioAnalysis> => {
  // Simulate API delay
  await delay(2000);
  
  // Generate random scores between 60-95
  const getRandomScore = () => Math.floor(Math.random() * 35) + 60;
  
  return {
    url,
    timestamp: new Date().toISOString(),
    scores: {
      design: getRandomScore(),
      performance: getRandomScore(),
      accessibility: getRandomScore(),
      seo: getRandomScore(),
      bestPractices: getRandomScore(),
    },
    suggestions: [
      {
        title: "Add descriptive alt text to images",
        description: "Several images on your portfolio are missing alt text, which affects accessibility for users with screen readers.",
        category: "Accessibility",
        priority: "high",
        link: {
          url: "https://webaim.org/techniques/alttext/",
          text: "Learn about alt text best practices"
        }
      },
      {
        title: "Optimize hero image size",
        description: "Your hero image is 4MB which is causing slow initial page load. Consider compressing it or using a more optimized format like WebP.",
        category: "Performance",
        priority: "medium",
        link: {
          url: "https://web.dev/optimize-cls/",
          text: "Image optimization guide"
        }
      },
      {
        title: "Improve color contrast in navigation",
        description: "The text in your navigation menu doesn't meet WCAG AA contrast requirements against the background color.",
        category: "Accessibility",
        priority: "medium",
        link: {
          url: "https://webaim.org/resources/contrastchecker/",
          text: "Check your contrast ratios"
        }
      },
      {
        title: "Update meta description",
        description: "Your meta description is missing or too short. Add a descriptive meta description to improve SEO.",
        category: "SEO",
        priority: "high",
        link: {
          url: "https://moz.com/learn/seo/meta-description",
          text: "Meta description best practices"
        }
      },
      {
        title: "Add project filtering functionality",
        description: "Consider adding filters to your projects section to help visitors find relevant work more easily.",
        category: "Design",
        priority: "low",
        link: {
          url: "https://www.smashingmagazine.com/2021/04/filtering-tag-components-react/",
          text: "Implementing filters in portfolio designs"
        }
      },
      {
        title: "Implement lazy loading for project images",
        description: "Use lazy loading for images that are lower on the page to improve initial page load performance.",
        category: "Performance",
        priority: "medium",
        link: {
          url: "https://web.dev/browser-level-image-lazy-loading/",
          text: "Guide to lazy loading images"
        }
      },
    ],
    history: [
      {
        timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
        scores: {
          design: getRandomScore() - 5,
          performance: getRandomScore() - 8,
          accessibility: getRandomScore() - 10,
          seo: getRandomScore() - 7,
          bestPractices: getRandomScore() - 9,
        }
      },
      {
        timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
        scores: {
          design: getRandomScore() - 15,
          performance: getRandomScore() - 18,
          accessibility: getRandomScore() - 12,
          seo: getRandomScore() - 10,
          bestPractices: getRandomScore() - 14,
        }
      }
    ]
  };
};
