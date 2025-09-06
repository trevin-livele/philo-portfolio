import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "25+",
    label: "Countries Worked",
    description: "Global M&E experience"
  },
  {
    icon: Users,
    number: "150+",
    label: "Programs Evaluated",
    description: "Diverse sector expertise"
  },
  {
    icon: TrendingUp,
    number: "40%",
    label: "Average Improvement",
    description: "In program effectiveness"
  },
  {
    icon: Award,
    number: "12",
    label: "ML Models Deployed",
    description: "Production-ready solutions"
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proven track record of delivering measurable results across diverse development contexts
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="font-semibold text-slate-700 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
