import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { FaDiscord } from "react-icons/fa6";

export default function Contact() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/dumplepo", icon: Github },
    { name: "Discord", href: "@pillarsky1226", icon: FaDiscord },
    { name: "Telegram", href: "@pillarsky1226", icon: Send },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
             <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
               LET'S <span className="text-primary">CONNECT</span>
             </h2>
             <p className="text-gray-300 font-space mb-8 leading-relaxed">
               Ready to start your next project? Whether you have a question or just want to say hi, I'll try my best to get back to you!
             </p>

             <div className="space-y-6">
               <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                 <div className="p-3 bg-white/5 rounded-full border border-white/10">
                   <Mail className="w-6 h-6" />
                 </div>
                 <span className="font-rajdhani text-lg">kkk6529370@gmail.com</span>
               </div>
               
               <div className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors">
                 <div className="p-3 bg-white/5 rounded-full border border-white/10">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <span className="font-rajdhani text-lg">Apopka, Florida,</span>
               </div>
             </div>

            <div className="flex gap-4 mt-10">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="p-3 bg-white/5 rounded-full border border-white/10 hover:border-primary hover:text-primary hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all"
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <form className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-2">
                 <label className="text-xs font-orbitron text-gray-400">NAME</label>
                 <Input className="bg-white/5 border-white/10 focus:border-primary text-white font-space h-12" placeholder="John Doe" />
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-orbitron text-gray-400">EMAIL</label>
                 <Input className="bg-white/5 border-white/10 focus:border-primary text-white font-space h-12" placeholder="john@example.com" />
               </div>
             </div>
             <div className="space-y-2">
               <label className="text-xs font-orbitron text-gray-400">MESSAGE</label>
               <Textarea className="bg-white/5 border-white/10 focus:border-primary text-white font-space min-h-[150px]" placeholder="Tell me about your project..." />
             </div>
             <Button className="w-full bg-primary text-black font-bold font-orbitron h-12 text-lg hover:bg-white hover:scale-[1.02] transition-all neon-blink-hover vibrate-active">
               SEND MESSAGE
             </Button>
          </form>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-gray-500 font-rajdhani text-sm">
        {/* <p>© 2026 Chris Matsmoto. ALL RIGHTS RESERVED.</p> */}
        <p className="text-xs mt-2">DESIGNED & BUILT WITH REACT & TAILWIND</p>
      </footer>
    </section>
  );
}
