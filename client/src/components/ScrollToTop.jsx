import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down more than 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed bottom-10 left-10 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 bg-primary text-black hover:bg-primary/80 rounded-none skew-x-[-10deg] border-2 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] neon-blink-hover"
          >
            <ArrowUp className="w-6 h-6 skew-x-[10deg]" />
          </Button>
        </motion.div>
      )}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }} // Slide in from the right
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-10 right-10 z-50" // Changed left-10 to right-10
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="w-12 h-12 bg-primary text-black hover:bg-primary/80 rounded-none skew-x-[-10deg] border-2 border-transparent hover:border-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] neon-blink-hover"
          >
            <ArrowUp className="w-6 h-6 skew-x-[10deg]" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
