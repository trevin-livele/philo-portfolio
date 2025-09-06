import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility function to create page URLs for Next.js App Router
export function createPageUrl(pageName: string): string {
  const pageMap: Record<string, string> = {
    'Home': '/',
    'About': '/about',
    'Blog': '/blog',
    'DataReports': '/data-reports',
    'MLProjects': '/ml-projects',
    'ProjectManagement': '/project-management',
    'AddFromGitHub': '/add-from-github'
  }

  return pageMap[pageName] || '/'
}

// Utility function to format dates
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Utility function to calculate reading time
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Utility function to truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
