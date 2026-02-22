import { Badge } from "@/components/ui/badge";
import { Code2, Terminal, BrainCircuit } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["C", "C++", "Python", "JavaScript", "R", "HTML", "CSS", "SQL"],
    color: "text-blue-400"
  },
  {
    title: "Frameworks & Tools",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["React.js", "Scikit-Learn", "Power BI", "WebRTC", "Tkinter", "Git", "Tally ERP 9", "CorelDRAW"],
    color: "text-purple-400"
  },
  {
    title: "Soft Skills",
    icon: <BrainCircuit className="h-6 w-6" />,
    skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Research Mindset"],
    color: "text-cyan-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-primary/5 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl space-y-4">
            <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">Core Competencies</Badge>
            <h2 className="text-4xl font-bold">Technical Arsenal</h2>
            <p className="text-muted-foreground text-lg">
              A diverse set of tools and languages leveraged to build intelligent, scalable learning systems and AI solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl glow-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                {category.icon}
              </div>
              
              <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-6 ${category.color}`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-primary/20 text-foreground border-white/10 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Progress indicator representation */}
              <div className="mt-8 space-y-2">
                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-primary to-secondary w-[85%] rounded-full`} />
                 </div>
                 <span className="text-xs text-muted-foreground font-mono">Proficiency level: Advanced</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Constellation visual element */}
        <div className="mt-20 hidden lg:block opacity-30">
          <div className="relative h-64 flex items-center justify-center">
             <div className="absolute w-4 h-4 bg-primary rounded-full blur-sm" />
             <div className="absolute w-128 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent rotate-12" />
             <div className="absolute w-128 h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent -rotate-12" />
             <div className="absolute w-128 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
}
