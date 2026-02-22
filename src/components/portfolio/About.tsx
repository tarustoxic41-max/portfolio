import { Badge } from "@/components/ui/badge";
import { GraduationCap, School } from "lucide-react";

const timelineData = [
  {
    year: "Aug 2022 – Aug 2026",
    title: "B.Tech – Artificial Intelligence & Machine Learning",
    institution: "Panipat Institute of Engineering & Technology",
    description: "Deepening my expertise in AI, ML, and data science while building practical applications.",
    icon: <GraduationCap className="h-5 w-5" />
  },
  {
    year: "2018 – 2022",
    title: "High School & Intermediate",
    institution: "Kotwal National Institute of Teaching School",
    description: "Foundational years focusing on science and technology.",
    icon: <School className="h-5 w-5" />
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">Educational Journey</Badge>
          <h2 className="text-4xl font-bold">Academic Background</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-center md:justify-between flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Connector Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 hidden md:flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                  {item.icon}
                </div>

                {/* Card */}
                <div className={`w-full md:w-[45%] glass-panel p-8 rounded-2xl glow-border group hover:-translate-y-1 transition-transform duration-300`}>
                  <div className="flex items-center gap-3 mb-4 md:hidden">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <span className="text-primary font-mono">{item.year}</span>
                  </div>
                  <span className="text-primary font-mono hidden md:block mb-2">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                  <h4 className="text-secondary font-semibold mb-4">{item.institution}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
