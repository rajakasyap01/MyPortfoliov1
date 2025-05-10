import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Rocket, Code2, Star } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A modern social media application with real-time messaging, post sharing, and user authentication.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7",
    tags: ["React", "Firebase", "Styled Components", "Redux"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  },
  {
    id: 3,
    title: "Personal Finance Tracker",
    description: "A tool to help users track expenses, set budgets, and visualize spending patterns for better financial management.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Auth0"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-primary/5 to-background/5 opacity-30" />
      
      <motion.div 
        className="container-custom relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Rocket className="w-8 h-8 text-primary" />
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            A selection of my recent work and personal projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2500}
                className="h-full"
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10 h-full group">
                  <div className="relative h-56 overflow-hidden">
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6 relative">
                    <div className="absolute -top-8 right-4">
                      <Star className="w-6 h-6 text-primary/80" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                        >
                          <Code2 className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <motion.a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </motion.a>
                      <motion.a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            variant="outline" 
            className="text-base group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
