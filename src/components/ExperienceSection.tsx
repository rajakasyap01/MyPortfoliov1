import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Tech Company",
    duration: "2023 - Present",
    description: "Developing responsive web applications using React and TypeScript",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  // Add more experiences
];

const ExperienceSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section id="experience" className="section-padding relative overflow-hidden py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, var(--primary-50) 0%, transparent 70%)",
            opacity: 0.1
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
            Work <span className="gradient-text animate-gradient">Experience</span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            My professional journey and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Animated timeline line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{
                  background: "linear-gradient(to bottom, var(--primary) 50%, transparent)"
                }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              />
              
              {/* Animated timeline dot with glow effect */}
              <motion.div
                className="absolute left-0 top-0 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.2 }}
              >
                <div className="w-3 h-3 rounded-full bg-primary -translate-x-[5px] relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                </div>
              </motion.div>

              <motion.div
                className="group space-y-4 bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-primary/10
                          hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="p-3 rounded-xl bg-primary/10 text-primary shadow-inner group-hover:bg-primary/20 transition-colors"
                  >
                    <Briefcase className="w-6 h-6" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-2xl font-bold text-foreground/90 group-hover:text-primary transition-colors"
                    >
                      {exp.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="text-muted-foreground text-lg"
                    >
                      {exp.company}
                    </motion.p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="flex items-center gap-2 text-sm bg-primary/5 text-primary/80 px-4 py-2 rounded-full"
                  >
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </motion.div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {exp.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.8 }}
                  className="flex flex-wrap gap-2"
                >
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 
                               transition-all duration-300 flex items-center gap-1 group/skill cursor-pointer"
                    >
                      {skill}
                      <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/skill:opacity-100 
                                            group-hover/skill:translate-x-0 transition-all" />
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
