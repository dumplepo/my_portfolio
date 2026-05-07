import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center mix-blend-difference text-white">
      <Link href="/">
        <a className="text-2xl font-orbitron font-bold tracking-widest hover:text-primary transition-colors neon-text">
          Kevin Sato
        </a>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="font-rajdhani text-lg font-medium hover:text-primary transition-colors tracking-wide"
          >
            {link.label}
          </a>
        ))}
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-black font-orbitron rounded-none skew-x-[-10deg] neon-blink-hover vibrate-active"
        >
          RESUME
        </Button>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-30 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-orbitron text-2xl hover:text-primary transition-colors neon-text"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
