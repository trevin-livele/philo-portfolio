import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Linkedin, 
  Github, 
  Download, 
  Award, 
  BookOpen, 
  Users, 
  Globe,
  Target,
  BarChart3,
  Brain,
  Database
} from "lucide-react";

const skills = [
  { name: "Statistical Analysis", level: 95, category: "Analytics" },
  { name: "Program Evaluation", level: 90, category: "M&E" },
  { name: "Machine Learning", level: 85, category: "Technology" },
  { name: "Data Visualization", level: 92, category: "Analytics" },
  { name: "Impact Assessment", level: 88, category: "M&E" },
  { name: "Survey Design", level: 87, category: "Research" },
  { name: "Python/R", level: 90, category: "Technology" },
  { name: "Theory of Change", level: 85, category: "M&E" }
];

const experience = [
  {
    role: "Senior M&E Consultant",
    organization: "Independent",
    period: "2020 - Present",
    description: "Leading monitoring and evaluation projects across multiple development sectors, specializing in data-driven impact assessment and predictive analytics.",
    achievements: [
      "Evaluated 50+ development programs across 15 countries",
      "Developed ML models improving program efficiency by 40%",
      "Trained 200+ staff in advanced M&E methodologies"
    ]
  },
  {
    role: "M&E Specialist",
    organization: "International Development Organization",
    period: "2017 - 2020",
    description: "Designed and implemented comprehensive M&E systems for large-scale development programs in healthcare and education sectors.",
    achievements: [
      "Established M&E frameworks for $50M+ programs",
      "Led evaluation of educational interventions reaching 100K+ beneficiaries",
      "Pioneered use of mobile data collection reducing costs by 30%"
    ]
  },
  {
    role: "Data Analyst",
    organization: "Research Institute",
    period: "2015 - 2017",
    description: "Conducted quantitative analysis for policy research and program evaluation studies.",
    achievements: [
      "Published 12 peer-reviewed papers on development effectiveness",
      "Developed automated reporting systems saving 60+ hours monthly",
      "Collaborated with government agencies on policy evaluation"
    ]
  }
];

const education = [
  {
    degree: "Master of Science in Development Studies",
    institution: "London School of Economics",
    year: "2015",
    specialization: "Quantitative Methods & Policy Analysis"
  },
  {
    degree: "Bachelor of Science in Statistics",
    institution: "University of Cape Town",
    year: "2013",
    specialization: "Applied Statistics & Data Science"
  }
];

const certifications = [
  "Certified Evaluation Professional (CEP)",
  "Machine Learning Specialization - Stanford",
  "Advanced Statistical Methods - MIT",
  "Impact Evaluation - World Bank",
  "Theory-Based Evaluation - UNICEF"
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="w-80 h-80 bg-gradient-to-br from-slate-200 to-emerald-200 rounded-full flex items-center justify-center mx-auto">
                <div className="w-64 h-64 bg-gradient-to-br from-slate-600 to-emerald-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  ME
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Transforming Development Through 
                <span className="text-gradient block">Data & Evidence</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                I'm a passionate monitoring and evaluation specialist with over 8 years of experience 
                helping organizations measure, understand, and amplify their impact through advanced 
                analytics and machine learning.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2">
                  <Globe className="w-4 h-4 mr-2" />
                  25+ Countries
                </Badge>
                <Badge className="bg-slate-100 text-slate-700 border-slate-200 px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  150+ Programs
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  12 ML Models
                </Badge>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Competencies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {skill.category}
                  </Badge>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-slate-500 mt-1">{skill.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                      <p className="text-emerald-600 font-semibold">{exp.organization}</p>
                    </div>
                    <Badge variant="outline" className="border-slate-300 text-slate-600 mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{edu.degree}</h3>
                      <p className="text-emerald-600 font-semibold mb-1">{edu.institution}</p>
                      <p className="text-slate-500 text-sm mb-2">{edu.year}</p>
                      <p className="text-slate-600">{edu.specialization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                          <Award className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="font-semibold text-slate-900">{cert}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-emerald-900">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to enhance your organization's monitoring and evaluation capabilities? 
            Let's discuss how we can work together to drive meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
