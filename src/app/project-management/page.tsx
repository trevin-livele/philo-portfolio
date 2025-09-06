import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GanttChart, Calendar, Users, Target } from "lucide-react";

export default function ProjectManagement() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Project Management
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Leading complex M&E implementations and system development projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Placeholder PM projects */}
            {[1, 2, 3, 4].map((project) => (
              <Card key={project} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center">
                      <GanttChart className="w-7 h-7 text-slate-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        M&E System Implementation {project}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Led comprehensive M&E system implementation for multi-country development program.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Calendar className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">18 Months</div>
                      <div className="text-xs text-slate-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">25 Staff</div>
                      <div className="text-xs text-slate-500">Team Size</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Target className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">100%</div>
                      <div className="text-xs text-slate-500">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 border">
                      Healthcare
                    </Badge>
                    <Badge className="bg-slate-50 text-slate-700 border-slate-200 border">
                      System Implementation
                    </Badge>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
