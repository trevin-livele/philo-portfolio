import React from "react";
import Link from "next/link";
import { createPageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, Target, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-emerald-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-emerald-50 text-emerald-700 border-emerald-200 px-4 py-2">
            <Target className="w-4 h-4 mr-2" />
            Monitoring & Evaluation Specialist
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Transforming Data Into
            <span className="text-gradient block mt-2">Actionable Insights</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            I help organizations leverage advanced analytics and machine learning to enhance their 
            monitoring and evaluation processes, driving evidence-based decision making and measurable impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={createPageUrl("DataReports")}>
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 hover-lift">
                <BarChart3 className="w-5 h-5 mr-2" />
                Explore My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href={createPageUrl("Blog")}>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold px-8 py-4 hover-lift">
                Read Latest Insights
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="relative mt-16">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover-lift">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Data Analysis</h3>
                <p className="text-slate-600 text-sm">Advanced statistical analysis and data visualization</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-slate-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Impact Assessment</h3>
                <p className="text-slate-600 text-sm">Rigorous evaluation of program effectiveness</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Predictive Analytics</h3>
                <p className="text-slate-600 text-sm">ML-powered insights for future planning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
