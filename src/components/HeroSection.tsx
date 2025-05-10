import { Button } from "@/components/ui/button";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 pb-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="light-pattern"></div>
        <div className="light-pattern"></div>
        <div className="light-pattern"></div>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg font-medium text-primary relative inline-block"
              >
                Hello, I'm
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/30"></span>
              </motion.h2>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading"
              >
                RAJA <span className="gradient-text animate-gradient">KUMAR</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl font-medium text-muted-foreground font-heading"
              >
                Frontend Developer & UI/UX Designer
              </motion.p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg max-w-lg leading-relaxed"
            >
              I design and build modern web experiences that prioritize user experience, 
              accessibility, and clean code. Passionate about bringing creative ideas to life.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                className="px-6 py-6 text-base group hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-6 text-base hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6 pt-4"
            >
              {/* Social links with enhanced animations */}
              <motion.a 
                href="https://github.com/jitujina0" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-primary/10 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                />
                <Github className="h-6 w-6 relative z-10" />
                <span className="sr-only">GitHub</span>
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/jitendra-yadav-014718195/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-primary/10 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </motion.a>

              <motion.a 
                href="https://x.com/JeetuYa12907134" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-foreground hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute -inset-2 bg-primary/10 rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  whileHover={{ scale: 1.5 }}
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
                <span className="sr-only">Twitter</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            {/* Enhanced animated background shapes */}
            <svg className="absolute -top-10 -left-10 w-32 h-32 opacity-40 animate-float-slow text-primary/30" fill="currentColor" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <svg className="absolute -bottom-10 -right-10 w-24 h-24 opacity-30 animate-float-fast text-secondary/30" fill="currentColor" viewBox="0 0 100 100">
              <rect width="100" height="100" rx="30" />
            </svg>
            <svg className="absolute left-1/2 top-0 w-16 h-16 opacity-20 animate-move-diagonal text-accent/30" fill="currentColor" viewBox="0 0 100 100">
              <polygon points="50,10 90,90 10,90" />
            </svg>
            <svg className="absolute right-1/3 bottom-0 w-12 h-12 opacity-25 animate-move-updown text-primary/30" fill="currentColor" viewBox="0 0 100 100">
              <ellipse cx="50" cy="50" rx="40" ry="20" />
            </svg>

            {/* Enhanced 3D Tilt effect on profile image */}
            <Tilt 
              glareEnable={true} 
              glareMaxOpacity={0.3} 
              scale={1.05} 
              tiltMaxAngleX={15} 
              tiltMaxAngleY={15} 
              className="rounded-full w-80 h-80 mx-auto overflow-visible perspective glass-effect"
            >
              <div className="rounded-full w-80 h-80 overflow-hidden border-4 border-primary/20 shadow-xl hover:border-primary/40 transition-colors duration-300">
                <img 
                  src="https://res.cloudinary.com/dww4ep7ou/image/upload/v1746772277/R01_k8ijkd.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
