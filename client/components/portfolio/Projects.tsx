import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const allProjects = [
  {
    id: "heart-disease",
    title: "Heart Disease Survival Prediction",
    description: "IPC & LightGBM survival model achieving 0.80 AUC for 90-day patient survival prediction.",
    tech: ["Python", "Scikit-Learn", "LightGBM"],
    category: "Research",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "sentiment-recommendation",
    title: "Sentiment-Aware Recommendation",
    description: "NLP-powered engine using VADER & TF-IDF for emotionally intelligent product recommendations.",
    tech: ["Python", "NLP", "VADER", "TF-IDF"],
    category: "AI",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "accessibility-call",
    title: "Accessibility Video Call System",
    description: "WebRTC-based communication system with integrated sign language recognition extension.",
    tech: ["React.js", "WebRTC", "MediaPipe"],
    category: "Hackathon",
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

const categories = ["All", "AI", "Research", "Hackathon"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? allProjects
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">Selected Works</Badge>
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              Research-driven solutions focusing on deep learning, NLP, and accessible technology.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Badge
                key={cat}
                onClick={() => setActiveCategory(cat)}
                variant={activeCategory === cat ? "default" : "outline"}
                className="cursor-pointer transition-all hover:scale-105 active:scale-95 px-4 py-1.5"
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative glass-panel rounded-3xl overflow-hidden glow-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />

              <div className="p-8 relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <a href="https://github.com/manishraina0904" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground border border-white/5 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <Link to={`/project/${project.id}`} className="mt-auto">
                  <Button className="w-full rounded-xl group/btn overflow-hidden relative" variant="outline">
                    <span className="relative z-10 flex items-center justify-center">
                      View Research Case Study
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
