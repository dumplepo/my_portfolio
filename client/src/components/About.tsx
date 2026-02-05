import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Terminal, Cpu } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Built", value: "50+" },
    { label: "Happy Clients", value: "20+" },
  ];

  return (
    <section id="about" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-8">
            <span className="text-primary">01.</span> ABOUT ME
          </h2>
          <div className="glass-panel p-8 rounded-2xl space-y-6 text-lg font-space text-gray-300 leading-relaxed border-l-4 border-primary">
            <p>
              Senior software developer with over 9 years of experience, proficient in full-stack and front-end development. I worked for companies like Geomar SA, Vodafone UK, and Beqom, as well as startups like VoCoVo. I'm a problem solver with a can do attitude, always ready to develop new solutions and offer another perspective. I have spent the last time learning and using the latest software tools and patterns to build great apps.
            </p>
          </div>
          
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 glass-card rounded-lg">
                <div className="text-3xl font-orbitron font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-rajdhani uppercase tracking-wider text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[400px] flex items-center justify-center">
          {/* Abstract Tech Visual */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
            />
             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-white/10 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
               <Terminal className="absolute w-16 h-16 text-primary" />
            </div>
            
            {/* Orbiting Cards */}
            <motion.div 
              className="absolute -top-10 right-0 glass-panel p-3 rounded-lg flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Cpu className="text-accent w-5 h-5" />
              <span className="font-rajdhani font-bold">System Arch</span>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-5 left-0 glass-panel p-3 rounded-lg flex items-center gap-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Code className="text-secondary w-5 h-5" />
              <span className="font-rajdhani font-bold">Clean Code</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
