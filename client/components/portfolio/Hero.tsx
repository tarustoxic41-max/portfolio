import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse-glow" />
      
      <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="cosmic-text">Manish Raina</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-primary tracking-wide uppercase">
              AI/ML Engineer | Learning Systems Developer
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I’m a technology-driven problem solver passionate about creating learning systems that adapt and improve. 
            With hands-on experience in Python, deep learning, and modern web technologies, 
            I design AI-powered solutions that bridge logic with creativity.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20 group" asChild>
              <a href="#projects">
                View Projects
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 glass-panel" asChild>
              <a href="/resume.pdf">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <div className="flex gap-4 items-center ml-2">
              <a href="https://github.com/manishraina0904" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/manish-raina-53278028b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:manishraina2009@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Orbital Rings */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-orbit" />
            <div className="absolute inset-4 border border-secondary/20 rounded-full animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
            <div className="absolute inset-8 border border-primary/10 rounded-full animate-orbit" style={{ animationDuration: '30s' }} />
            
            {/* Profile Image Container */}
            <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-background shadow-[0_0_30px_rgba(34,211,238,0.3)] bg-muted flex items-center justify-center">
               {/* Using a placeholder since I don't have the user's photo yet, but I'll add the aura as requested */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10" />
               <img 
                 src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manish" 
                 alt="Manish Raina" 
                 className="w-full h-full object-cover"
               />
            </div>
            
            {/* Soft Glow Aura */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
