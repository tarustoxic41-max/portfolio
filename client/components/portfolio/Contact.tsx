import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { ContactRequest, ContactResponse } from "@shared/api";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactRequest>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = (await response.json()) as ContactResponse;

      if (data.success) {
        toast({
          title: "Message Sent!",
          description: data.message,
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background stars animation placeholder */}
      <div className="absolute inset-0 -z-10 opacity-20">
         <div className="stars" />
      </div>

      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">Get in Touch</Badge>
              <h2 className="text-4xl md:text-5xl font-bold">Let's Build Something <span className="cosmic-text">Intelligent</span></h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Whether you have a research proposal, a project idea, or just want to discuss the future of AI, my inbox is always open.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:manishraina2009@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                    manishraina2009@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+916005001995" className="text-lg font-semibold hover:text-primary transition-colors">
                    +91 6005001995
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-semibold">India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="https://github.com/manishraina0904" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
               </a>
               <a href="https://linkedin.com/in/manish-raina-53278028b/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-panel hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
               </a>
            </div>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] glow-border relative">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Full Name</label>
                  <Input 
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">Email Address</label>
                  <Input 
                    required
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Subject</label>
                <Input 
                  required
                  placeholder="Collaboration Proposal"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea 
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-white/5 border-white/10 rounded-xl focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className={`h-5 w-5 ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'} transition-transform`} />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
