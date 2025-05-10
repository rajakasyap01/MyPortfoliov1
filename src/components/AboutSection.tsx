

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Mail, MapPin, UserCircle2, Briefcase, GraduationCap, Sparkles, Github } from "lucide-react";

// Skills data with percentages and styling information
const skills = [
  { name: "HTML & CSS", percentage: 95, color: "bg-gradient-to-r from-[#E44D26] to-[#F16529]", icon: "🎨" },
  { name: "JavaScript", percentage: 90, color: "bg-gradient-to-r from-[#F7DF1E] to-[#E6CC17]", icon: "⚡" },
  { name: "React", percentage: 85, color: "bg-gradient-to-r from-[#61DAFB] to-[#47B8E0]", icon: "⚛️" },
  { name: "UI/UX Design", percentage: 80, color: "bg-gradient-to-r from-[#FF69B4] to-[#FF1493]", icon: "✨" },
  { name: "Node.js", percentage: 75, color: "bg-gradient-to-r from-[#339933] to-[#2E7D32]", icon: "🚀" },
  { name: "TypeScript", percentage: 70, color: "bg-gradient-to-r from-[#3178C6] to-[#235A97]", icon: "📘" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            About <span className="gradient-text">Me</span>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </h2>
          <p className="text-muted-foreground">
            My background, skills, and what drives me as a developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-right" style={{ animationDelay: "0.2s" }}>
            <Card variant="glass" className="overflow-hidden relative">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-primary" />
                  I'm a passionate Frontend Developer with 2 years of experience
                </h3>
                
                <p className="text-muted-foreground">
                  I specialize in building responsive, user-friendly web applications that balance excellent user experience with clean, maintainable code. My journey in web development started in 2023, and I've been constantly learning and improving my skills ever since.
                </p>
                
                <p className="text-muted-foreground">
                  With a background in design and a passion for coding, I bring a unique perspective to projects that ensures both aesthetic appeal and technical excellence. I enjoy working on challenging projects that push me to grow and learn new technologies.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card variant="glass" className="animate-fade-in group" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <UserCircle2 className="w-5 h-5 text-primary mt-1 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium">Name</p>
                      <p className="text-muted-foreground">RAJA KUMAR </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="animate-fade-in group" style={{ animationDelay: "0.4s" }}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:rajakumar176387@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rajakumar176387@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="animate-fade-in group" style={{ animationDelay: "0.45s" }}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Github className="w-5 h-5 text-primary mt-1 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/rajakasyap01" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        github.com/rajakasyap01
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="animate-fade-in group" style={{ animationDelay: "0.5s" }}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Muzaffapur, Bihar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="animate-fade-in group" style={{ animationDelay: "0.6s" }}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Code2 className="w-5 h-5 text-primary mt-1 group-hover:animate-bounce" />
                    <div>
                      <p className="font-medium">Availability</p>
                      <p className="text-muted-foreground">Open to opportunities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card variant="glass" className="shadow-lg animate-fade-in relative overflow-hidden group hover:shadow-xl transition-all duration-300" style={{ animationDelay: "0.7s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <CardContent className="p-6 space-y-6 relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 group">
                <GraduationCap className="w-6 h-6 text-primary animate-bounce" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Skills & Expertise
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 animate-fade-in hover:transform hover:translate-x-2 transition-all duration-300" 
                    style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-secondary/10 overflow-hidden backdrop-blur-sm p-0.5">
                      <div 
                        className={`h-full rounded-full ${skill.color} transform transition-all duration-1000 ease-out shadow-lg`}
                        style={{ 
                          width: `${skill.percentage}%`,
                          animation: 'pulse 2s infinite',
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <div className="h-full w-full bg-white/20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <style>{`
                @keyframes shimmer {
                  0% {
                    transform: translateX(-100%);
                  }
                  100% {
                    transform: translateX(100%);
                  }
                }
                .animate-shimmer {
                  animation: shimmer 2s infinite;
                }
              `}</style>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
