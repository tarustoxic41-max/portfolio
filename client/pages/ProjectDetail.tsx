import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Cpu, BarChart3, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Project } from "@shared/api";

const projects: Record<string, Project> = {
  "heart-disease": {
    id: "heart-disease",
    title: "Heart Disease Survival Prediction Framework",
    role: "Learning Engineer",
    description: "A survival analysis framework using machine learning to predict heart disease patient outcomes.",
    techStack: ["Python", "Scikit-Learn", "LightGBM", "IPCW"],
    category: "Research",
    details: "This research project focused on building a robust framework for survival analysis in cardiac care. By implementing Integrated Probability of Censoring Weighting (IPCW) and LightGBM models, we achieved high predictive accuracy for long-term survival rates.",
    github: "https://github.com/manishraina0904",
    metrics: [
      { label: "AUC Score", value: "0.80" },
      { label: "Prediction Window", value: "90 Days" },
      { label: "Model Type", value: "Survival Ensemble" }
    ],
    architecture: "The system uses a two-stage approach: first handling censored data via IPCW, followed by a gradient-boosted survival model for final risk scoring.",
    futureImprovements: ["Integration of real-time patient monitoring", "Multi-modal data support (Imaging + Tabular)"]
  },
  "sentiment-recommendation": {
    id: "sentiment-recommendation",
    title: "Sentiment-Aware Recommendation System",
    role: "AI Developer",
    description: "A recommendation engine that understands user emotions through natural language processing.",
    techStack: ["Python", "NLP", "VADER", "TF-IDF"],
    category: "AI",
    details: "Developing a system that doesn't just look at ratings, but understands the 'why' behind user feedback. Using sentiment analysis to weight recommendations leads to much higher user satisfaction and engagement.",
    github: "https://github.com/manishraina0904",
    metrics: [
      { label: "Sentiment Accuracy", value: "85%" },
      { label: "User Retention", value: "+20%" }
    ],
    architecture: "Uses TF-IDF for feature extraction and VADER for sentiment scoring, combined with a collaborative filtering backbone.",
    futureImprovements: ["Transformer-based sentiment extraction", "Cross-domain recommendation support"]
  },
  "accessibility-call": {
    id: "accessibility-call",
    title: "Accessibility Video Call System",
    role: "Software Developer",
    description: "A inclusive communication platform with real-time sign language recognition.",
    techStack: ["React.js", "WebRTC", "MediaPipe", "Chrome API"],
    category: "Hackathon",
    details: "Created during HackOps Savisjar, this system enables seamless communication for the hearing impaired by integrating real-time gesture recognition into video calls via a Chrome extension.",
    github: "https://github.com/manishraina0904",
    metrics: [
      { label: "Latency", value: "<100ms" },
      { label: "Gesture Accuracy", value: "92%" }
    ],
    architecture: "WebRTC peer-to-peer connection with a client-side MediaPipe overlay for gesture-to-text translation.",
    futureImprovements: ["Full ASL vocabulary support", "Mobile application version"]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Navigation */}
      <nav className="p-6">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
      </nav>

      <main className="container max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cosmic-text">{project.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{project.role}</p>
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <Button asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </a>
              </Button>
            )}
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Database className="mr-3 text-primary" />
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.details}
              </p>
            </section>

            <section className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Cpu className="mr-3 text-primary" />
                Architecture
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {project.architecture}
              </p>
            </section>

            {project.futureImprovements && (
              <section className="glass-panel p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">Future Improvements</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.futureImprovements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <section className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <BarChart3 className="mr-2 text-primary h-5 w-5" />
                Key Metrics
              </h3>
              <div className="space-y-4">
                {project.metrics?.map((metric, i) => (
                  <div key={i} className="border-b border-white/5 pb-2">
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-xl font-mono text-primary">{metric.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-panel p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
