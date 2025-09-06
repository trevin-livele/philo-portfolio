import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Download, ExternalLink } from "lucide-react";

export default function DataReports() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Data Reports & Analysis
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive data analysis and reporting across various development sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Placeholder reports */}
            {[1, 2, 3, 4].map((report) => (
              <Card key={report} className="border-0 shadow-lg hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        Sample Data Report {report}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Comprehensive analysis of program effectiveness using advanced statistical methods and data visualization.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 border">
                      Healthcare
                    </Badge>
                    <Badge className="bg-slate-50 text-slate-700 border-slate-200 border">
                      Impact Assessment
                    </Badge>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-slate-900 hover:bg-slate-800">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
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
