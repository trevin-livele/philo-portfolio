import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, BarChart3, Brain, FileText, GanttChart } from "lucide-react";

const featuredWork = [
  {
    type: "Data Report",
    title: "Impact Assessment of Rural Education Programs",
    description: "Comprehensive evaluation of educational interventions across 15 districts using mixed-methods analysis",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop",
    tags: ["Education", "Impact Assessment", "Mixed Methods"],
    link: createPageUrl("DataReports"),
    icon: BarChart3
  },
  {
    type: "ML Project",
    title: "Predictive Early Warning System",
    description: "Machine learning model to predict program implementation risks and recommend preventive measures",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    tags: ["Machine Learning", "Risk Assessment", "Automation"],
    link: createPageUrl("MLProjects"),
    icon: Brain
  },
  {
    type: "Project Management",
    title: "M&E System Implementation for Health NGO",
    description: "Led the end-to-end implementation of a comprehensive M&E system for a multi-country health program.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop",
    tags: ["Project Management", "System Implementation", "Healthcare"],
    link: createPageUrl("ProjectManagement"),
    icon: GanttChart
  }
];

export default function FeaturedWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing recent projects and insights in monitoring, evaluation, and data analytics
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredWork.map((work, index) => (
            <Card key={index} className="border-0 shadow-lg hover-lift overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-700 border-0">
                    <work.icon className="w-3 h-3 mr-1" />
                    {work.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {work.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {work.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 border-emerald-200 border text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Link href={work.link}>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-slate-50">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
