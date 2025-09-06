import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Plus, Search } from "lucide-react";

export default function AddFromGitHub() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Add from GitHub
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Import and showcase projects directly from your GitHub repositories
            </p>
          </div>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="w-8 h-8 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Connect Your GitHub Account
                </h2>
                <p className="text-slate-600 mb-6">
                  Automatically import your repositories and showcase your development work
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                    <Github className="w-5 h-5 mr-2" />
                    Connect GitHub
                  </Button>
                  <Button size="lg" variant="outline">
                    <Search className="w-5 h-5 mr-2" />
                    Browse Repositories
                  </Button>
                </div>
              </div>
              
              <div className="border-t pt-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Features:</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Automatically sync repository information and documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Extract project metadata and technology stack</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Generate project cards with live demo links</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Categorize projects by type and technology</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
