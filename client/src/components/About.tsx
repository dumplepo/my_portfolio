import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Projects Built", value: "50+" },
    { label: "Happy Clients", value: "20+" },
  ];
  const pythonLines = [
    [
      { text: "import", className: "text-violet-300" },
      { text: " numpy", className: "text-cyan-300" },
      { text: " as", className: "text-violet-300" },
      { text: " np", className: "text-blue-300" },
    ],
    [
      { text: "from", className: "text-violet-300" },
      { text: " sklearn.model_selection", className: "text-cyan-300" },
      { text: " import", className: "text-violet-300" },
      { text: " train_test_split", className: "text-yellow-300" },
    ],
    [
      { text: "from", className: "text-violet-300" },
      { text: " sklearn.ensemble", className: "text-cyan-300" },
      { text: " import", className: "text-violet-300" },
      { text: " RandomForestClassifier", className: "text-yellow-300" },
    ],
    [{ text: "", className: "text-white" }],
    [
      { text: "X", className: "text-blue-300" },
      { text: " = ", className: "text-white/80" },
      { text: "dataset", className: "text-blue-300" },
      { text: ".drop", className: "text-yellow-300" },
      { text: "(", className: "text-white/80" },
      { text: "'label'", className: "text-emerald-300" },
      { text: ", axis=", className: "text-white/80" },
      { text: "1", className: "text-orange-300" },
      { text: ")", className: "text-white/80" },
    ],
    [
      { text: "y", className: "text-blue-300" },
      { text: " = ", className: "text-white/80" },
      { text: "dataset", className: "text-blue-300" },
      { text: "[", className: "text-white/80" },
      { text: "'label'", className: "text-emerald-300" },
      { text: "]", className: "text-white/80" },
    ],
    [
      { text: "X_train", className: "text-blue-300" },
      { text: ", ", className: "text-white/80" },
      { text: "X_test", className: "text-blue-300" },
      { text: ", ", className: "text-white/80" },
      { text: "y_train", className: "text-blue-300" },
      { text: ", ", className: "text-white/80" },
      { text: "y_test", className: "text-blue-300" },
      { text: " = ", className: "text-white/80" },
      { text: "train_test_split", className: "text-yellow-300" },
      { text: "(", className: "text-white/80" },
    ],
    [
      { text: "    X, y, test_size=", className: "text-white/80" },
      { text: "0.2", className: "text-orange-300" },
      { text: ", random_state=", className: "text-white/80" },
      { text: "42", className: "text-orange-300" },
    ],
    [{ text: ")", className: "text-white/80" }],
    [{ text: "", className: "text-white" }],
    [
      { text: "model", className: "text-blue-300" },
      { text: " = ", className: "text-white/80" },
      { text: "RandomForestClassifier", className: "text-yellow-300" },
      { text: "(n_estimators=", className: "text-white/80" },
      { text: "300", className: "text-orange-300" },
      { text: ")", className: "text-white/80" },
    ],
    [
      { text: "model", className: "text-blue-300" },
      { text: ".fit", className: "text-yellow-300" },
      { text: "(X_train, y_train)", className: "text-white/80" },
    ],
    [
      { text: "predictions", className: "text-blue-300" },
      { text: " = ", className: "text-white/80" },
      { text: "model", className: "text-blue-300" },
      { text: ".predict", className: "text-yellow-300" },
      { text: "(X_test)", className: "text-white/80" },
    ],
    [
      { text: "print", className: "text-yellow-300" },
      { text: "(", className: "text-white/80" },
      { text: "'Accuracy:'", className: "text-emerald-300" },
      { text: ", (predictions == y_test).mean()", className: "text-white/80" },
      { text: ")", className: "text-white/80" },
    ],
    [{ text: "# Model pipeline complete", className: "text-gray-400" }],
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
              I’m an AI engineer with about 8 years of experience working on machine learning, computer vision, and automation systems. My main gig is building scalable, production-ready AI—basically, taking models from concept to something businesses can actually use. I’m hands-on across the whole stack, from training and fine-tuning models to deploying and integrating them. My focus is mostly on LLMs, NLP, and enterprise AI, but I’ve also worked with a few startups to turn cutting-edge AI into real-world solutions that actually solve problems.  
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
              <div className="absolute w-56 h-36 glass-panel border border-primary/30 rounded-xl overflow-hidden bg-black/40">
                <div className="h-8 px-3 flex items-center border-b border-white/10 font-rajdhani text-xs text-primary/90 tracking-wider">
                  python train_model.py
                </div>
                <div className="h-[calc(100%-2rem)] overflow-hidden px-3 py-2 font-mono text-[11px] text-primary/90 leading-5">
                  <motion.div
                    className="space-y-0"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                  >
                    {[...pythonLines, ...pythonLines].map((line, index) => (
                      <div key={index} className="whitespace-pre">
                        {line.map((segment, segmentIndex) => (
                          <span key={`${index}-${segmentIndex}`} className={segment.className}>
                            {segment.text}
                          </span>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
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
