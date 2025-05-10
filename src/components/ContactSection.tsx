import { useState, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import emailjs from '@emailjs/browser';
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validateField = (name: string, value: string) => {
    try {
      formSchema.shape[name as keyof typeof formSchema.shape].parse(value);
      setErrors(prev => ({ ...prev, [name]: "" }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ ...prev, [name]: error.errors[0].message }));
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("loading");

    try {
      // Validate all fields
      const validatedData = formSchema.parse(formData);

      // Send email using EmailJS
      const result = await emailjs.sendForm(
        'service_b3hfr98', // Replace with your EmailJS service ID
        'template_v2oni6o', // Replace with your EmailJS template ID
        formRef.current!,
        'ShUnQFtZSaMRocQgd' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setSubmitStatus("success");
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus("error");
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Form validation error",
          description: "Please check the form fields and try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error sending message",
          description: "Please try again later or contact me through other means.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="light-pattern"></div>
        <div className="light-pattern"></div>
      </div>

      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              transitionSpeed={2500}
            >
              <Card className="shadow-lg bg-card/50 backdrop-blur-sm border-primary/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <motion.div 
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">rajakumar176387@gmail.com</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+91 7856876317</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-4"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Muzaffapur, Bihar, India</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="font-medium mb-4">Connect with me</h4>
                    <div className="flex gap-4">
                      <motion.a 
                        href="https://github.com/jitujina0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-secondary/10 p-3 rounded-full text-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </motion.a>
                      <motion.a 
                        href="https://www.linkedin.com/in/raja-kumar-469534331/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-secondary/10 p-3 rounded-full text-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </motion.a>
                      <motion.a 
                        href="https://x.com/@rajakumar176387" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-secondary/10 p-3 rounded-full text-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Tilt>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="name" className="font-medium">
                    Your Name
                  </label>
                  <div className="relative">
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jeetu Yadav"
                      required
                      className={`transition-all duration-300 focus:ring-2 ${
                        errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary/20'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                        {errors.name}
                      </span>
                    )}
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="email" className="font-medium">
                    Your Email
                  </label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jitu@example.com"
                      required
                      className={`transition-all duration-300 focus:ring-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary/20'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="subject" className="font-medium">
                  Subject
                </label>
                <div className="relative">
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className={`transition-all duration-300 focus:ring-2 ${
                      errors.subject ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary/20'
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                      {errors.subject}
                    </span>
                  )}
                </div>
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="message" className="font-medium">
                  Message
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    className={`transition-all duration-300 focus:ring-2 ${
                      errors.message ? 'border-red-500 focus:ring-red-200' : 'focus:ring-primary/20'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-500 text-sm mt-1 absolute -bottom-6 left-0">
                      {errors.message}
                    </span>
                  )}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  type="submit"
                  className={`w-full md:w-auto px-8 py-6 group ${
                    isSubmitting ? 'bg-primary/80' : 'bg-primary hover:bg-primary/90'
                  } transition-all duration-300 hover:scale-105 relative overflow-hidden`}
                  disabled={isSubmitting || Object.keys(errors).length > 0}
                >
                  <AnimatePresence mode="wait">
                    {submitStatus === "loading" && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-primary"
                      >
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </motion.div>
                    )}
                    {submitStatus === "success" && (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-green-500"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <span className={submitStatus !== "idle" ? "opacity-0" : "opacity-100"}>
                    Send Message <Send className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
