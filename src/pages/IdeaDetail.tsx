
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Lightbulb, User, Users, Target, Zap, FileText } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const IdeaDetail = () => {
  const { id } = useParams();

  const mockIdea = {
    id: 1,
    title: "AI-Powered Code Review Tool",
    description: "An intelligent code review system that uses machine learning algorithms to automatically detect bugs, security vulnerabilities, and suggest code improvements. The tool would integrate with popular version control systems and provide real-time feedback to developers.",
    problem: "Manual code reviews are time-consuming and often miss critical issues. Many teams struggle with maintaining code quality standards while meeting tight deadlines.",
    solution: "Leverage AI and machine learning to automate the initial code review process, flagging potential issues and providing intelligent suggestions for improvement.",
    audience: "Software development teams, DevOps engineers, and organizations looking to improve code quality and development velocity.",
    tags: ["AI", "Development", "SaaS", "Machine Learning", "DevOps"],
    createdAt: "2024-01-15",
    status: "In Development"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Lightbulb className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">IdeaForge</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Botain
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <Link to="/dashboard">
              <Button variant="ghost" className="w-full justify-start mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{mockIdea.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {mockIdea.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <Badge variant="outline">{mockIdea.status}</Badge>
                <span>Created: {mockIdea.createdAt}</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={mockIdea.description}
                      readOnly
                      className="min-h-[120px] resize-none border-none p-0 shadow-none focus-visible:ring-0"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={mockIdea.problem}
                      readOnly
                      className="min-h-[80px] resize-none border-none p-0 shadow-none focus-visible:ring-0"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="h-5 w-5 mr-2" />
                      Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={mockIdea.solution}
                      readOnly
                      className="min-h-[80px] resize-none border-none p-0 shadow-none focus-visible:ring-0"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      Target Audience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      value={mockIdea.audience}
                      readOnly
                      className="min-h-[80px] resize-none border-none p-0 shadow-none focus-visible:ring-0"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Actions Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="default">
                      Generate Roadmap
                    </Button>
                    <Button className="w-full" variant="outline">
                      Export Deck
                    </Button>
                    <Button className="w-full" variant="outline">
                      Share Idea
                    </Button>
                    <Button className="w-full" variant="outline">
                      Edit Details
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Status</span>
                      <Badge variant="outline">{mockIdea.status}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tags</span>
                      <span className="text-sm font-medium">{mockIdea.tags.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Created</span>
                      <span className="text-sm font-medium">{mockIdea.createdAt}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetail;
