// Blog Post Entity
export interface BlogPost {
  title: string;
  content: string;
  excerpt?: string;
  category: 'monitoring-evaluation' | 'data-analysis' | 'methodology' | 'case-study' | 'insights';
  tags?: string[];
  featured_image?: string;
  published?: boolean;
  reading_time?: number;
}

// ML Project Entity
export interface MLProject {
  title: string;
  description: string;
  problem_statement?: string;
  approach: string;
  technologies?: string[];
  results?: string;
  github_url?: string;
  demo_url?: string;
  image_url?: string;
  category: 'predictive-analytics' | 'impact-assessment' | 'automated-reporting' | 'data-quality' | 'survey-analysis';
  status?: 'completed' | 'in-progress' | 'prototype';
}

// Project Management Project Entity
export interface PMProject {
  title: string;
  description: string;
  client?: string;
  sector: 'healthcare' | 'education' | 'agriculture' | 'governance' | 'environment' | 'social-development' | 'economic-development';
  role: string;
  key_responsibilities?: string[];
  key_achievements?: string[];
  tools?: string[];
  status?: 'completed' | 'in-progress' | 'planning';
  start_date?: string;
  end_date?: string;
  featured?: boolean;
}

// Data Visualization Entity
export interface DataVisualization {
  type: 'chart' | 'map' | 'dashboard' | 'infographic';
  title: string;
  image_url?: string;
  description?: string;
}

// Data Report Entity
export interface DataReport {
  title: string;
  description: string;
  methodology: string;
  key_findings?: string[];
  visualizations?: DataVisualization[];
  client?: string;
  sector: 'healthcare' | 'education' | 'agriculture' | 'governance' | 'environment' | 'social-development' | 'economic-development';
  report_file?: string;
  featured?: boolean;
}

// User Entity (referenced in Layout.js)
export interface User {
  role: string;
  // Add other user properties as needed
  static me(): Promise<User>;
}

// Navigation Item
export interface NavigationItem {
  title: string;
  url: string;
  icon: any; // Lucide React icon component
}
