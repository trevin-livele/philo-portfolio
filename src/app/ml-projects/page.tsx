import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Github, ExternalLink } from "lucide-react";

export default function MLProjects() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Machine Learning Projects
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Innovative ML solutions for monitoring, evaluation, and impact assessment
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder ML projects */}
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card key={project} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-emerald-600" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    ML Project {project}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Advanced machine learning solution for predictive analytics in M&E processes.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 border text-xs">
                      Predictive Analytics
                    </Badge>
                    <Badge className="bg-slate-50 text-slate-700 border-slate-200 border text-xs">
                      Python
                    </Badge>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 bg-slate-900 hover:bg-slate-800">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
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
