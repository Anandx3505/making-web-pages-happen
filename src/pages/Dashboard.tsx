
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, MoreVertical, Calendar, Tag, Lightbulb, User } from "lucide-react";
import { Link } from "react-router-dom";
import CreateIdeaModal from "@/components/CreateIdeaModal";

const Dashboard = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const mockIdeas = [
    {
      id: 1,
      title: "AI-Powered Code Review Tool",
      description: "Automate code reviews using machine learning to detect bugs and suggest improvements",
      tags: ["AI", "Development", "SaaS"],
      date: "2 days ago",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Sustainable Fashion Marketplace",
      description: "Connect eco-conscious consumers with sustainable fashion brands and secondhand sellers",
      tags: ["E-commerce", "Sustainability", "Fashion"],
      date: "1 week ago",
      status: "Planning"
    },
    {
      id: 3,
      title: "Virtual Reality Fitness App",
      description: "Gamified fitness experience combining VR technology with personal training",
      tags: ["VR", "Fitness", "Gaming"],
      date: "3 days ago",
      status: "Research"
    },
    {
      id: 4,
      title: "Smart Garden Monitoring System",
      description: "IoT sensors and mobile app to optimize plant care and garden management",
      tags: ["IoT", "Agriculture", "Mobile"],
      date: "5 days ago",
      status: "Prototype"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
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
        {/* Sidebar */}
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <nav className="space-y-2">
              <Button 
                onClick={() => setIsCreateModalOpen(true)}
                className="w-full justify-start bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Idea
              </Button>
              
              <Button variant="ghost" className="w-full justify-start">
                <Lightbulb className="h-4 w-4 mr-2" />
                My Projects
              </Button>
              
              <Button variant="ghost" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Explore Ideas
              </Button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage and track your creative projects</p>
            </div>

            {/* Search and Filters */}
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search ideas..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Ideas Grid */}
            <div className="space-y-4">
              {mockIdeas.map((idea) => (
                <Card key={idea.id} className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <Link to={`/idea/${idea.id}`}>
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                            {idea.title}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mt-2 line-clamp-2">{idea.description}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {idea.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {idea.date}
                        </span>
                        <Badge variant="outline">{idea.status}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>

      <CreateIdeaModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;
