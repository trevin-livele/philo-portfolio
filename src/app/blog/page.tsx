import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Insights & Analysis
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Exploring the latest trends in monitoring, evaluation, and data analytics for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder blog posts */}
            {[1, 2, 3, 4, 5, 6].map((post) => (
              <Card key={post} className="border-0 shadow-lg hover-lift overflow-hidden group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-emerald-200"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 border-0">
                      <FileText className="w-3 h-3 mr-1" />
                      Insights
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Sample Blog Post Title {post}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    This is a placeholder for blog post content. Coming soon with insights on M&E best practices.
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      5 min read
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
