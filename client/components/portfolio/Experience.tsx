import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, Search, Laptop } from "lucide-react";

const experienceData = [
  {
    title: "Machine Learning Research Intern",
    company: "NIT Delhi",
    period: "2025",
    description: "Conducting advanced research in machine learning architectures and optimization.",
    icon: <Search className="h-6 w-6" />,
    type: "Internship"
  },
  {
    title: "Machine Learning with Python Internship",
    company: "EISystems Technologies",
    period: "Previous",
    description: "Hands-on implementation of ML algorithms and data preprocessing pipelines.",
    icon: <Laptop className="h-6 w-6" />,
    type: "Internship"
  },
  {
    title: "HackOps Savisjar Participant",
    company: "Hackathon",
    period: "2024",
    description: "Built an accessibility-focused video call system in a competitive environment.",
    icon: <Award className="h-6 w-6" />,
    type: "Award"
  },
  {
    title: "Advanced Diploma in Software Technology",
    company: "Supertech India",
    period: "Certification",
    description: "Comprehensive study of software development principles and architectures.",
    icon: <Briefcase className="h-6 w-6" />,
    type: "Certification"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-primary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">Recognition & Growth</Badge>
          <h2 className="text-4xl font-bold">Experience & Certifications</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl glow-border hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] transition-all group overflow-hidden relative">
              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="flex gap-6 items-start relative z-10">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <h4 className="text-primary font-semibold">{item.company}</h4>
                  <p className="text-sm text-muted-foreground font-mono">{item.period}</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Badge variant="outline" className="mt-4 border-white/10 text-xs">{item.type}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
