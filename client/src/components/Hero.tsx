import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      
      {/* 3D Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon icon={FaReact} x="10%" y="20%" color="#61DAFB" delay={0} />
        <FloatingIcon icon={FaNodeJs} x="80%" y="15%" color="#68A063" delay={2} />
        <FloatingIcon icon={FaDatabase} x="15%" y="70%" color="#primary" delay={1} />
        <FloatingIcon icon={FaCode} x="85%" y="80%" color="#FFFFFF" delay={3} />
      </div>

      <div className="z-10 text-center space-y-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <h1 className="font-rajdhani text-primary text-xl tracking-[0.2em] mb-4">
            WELLCOME
          </h1> */}
          <h1 className="text-5xl md:text-8xl font-orbitron font-black text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white bg-300% animate-gradient">
              WELLCOME
            </span>
          </h1>
          <div className="text-2xl md:text-4xl font-space text-muted-foreground h-[60px]">
            <Typewriter
              options={{
                strings: [
                  "Senior Full Stack Developer",
                  "UI/UX Architect",
                  "Full Stack AI Developer",
                  "Full Stack Blockchain Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 justify-center pt-10"
        >
          <a href="#projects" onClick={(e) => handleScroll(e, "#projects")}>
            <Button 
              size="lg" 
              className="bg-primary text-black hover:bg-primary/80 font-orbitron text-lg px-8 py-6 rounded-none skew-x-[-10deg] border-2 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] neon-blink-hover vibrate-active"
            >
              VIEW PROJECTS
            </Button>
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-orbitron text-lg px-8 py-6 rounded-none skew-x-[-10deg] backdrop-blur-md neon-blink-hover vibrate-active"
            >
              CONTACT ME
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}

function FloatingIcon({ icon: Icon, x, y, color, delay }: any) {
  return (
    <motion.div
      className="absolute text-4xl md:text-6xl opacity-20 hover:opacity-50 transition-opacity duration-300"
      style={{ left: x, top: y, color }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 5,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon />
    </motion.div>
  );
}
