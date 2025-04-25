
import { useState } from "react";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  Radar, 
  ResponsiveContainer,
  Tooltip
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

interface PerformanceChartProps {
  data: {
    design: number;
    performance: number;
    accessibility: number;
    seo: number;
    bestPractices: number;
  };
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const [chartType, setChartType] = useState<"radar" | "bar">("radar");

  // Transform data for charts
  const chartData = [
    { name: "Design", value: data.design },
    { name: "Performance", value: data.performance },
    { name: "Accessibility", value: data.accessibility },
    { name: "SEO", value: data.seo },
    { name: "Best Practices", value: data.bestPractices },
  ];

  return (
    <div className="bg-card rounded-lg border shadow-sm p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <h3 className="font-semibold font-mono mb-2 sm:mb-0">Performance Overview</h3>
        <Tabs defaultValue="radar" className="w-full sm:w-auto">
          <TabsList className="grid grid-cols-2 w-full sm:w-[200px]">
            <TabsTrigger value="radar" onClick={() => setChartType("radar")}>Radar</TabsTrigger>
            <TabsTrigger value="bar" onClick={() => setChartType("bar")}>Bar</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="h-[300px] w-full">
        {chartType === "radar" ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis 
                dataKey="name"
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
              />
              <Radar
                name="Score"
                dataKey="value"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)"
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis 
                dataKey="name" 
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 100]} 
                tick={{ fill: "var(--foreground)", fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)"
                }} 
              />
              <Legend />
              <Bar 
                dataKey="value" 
                name="Score" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}
