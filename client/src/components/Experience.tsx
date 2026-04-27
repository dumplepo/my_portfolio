import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const initialExperiences = [
  {
    id: 1,
    year: "Jan/2023 - Dec/2025",
    title: "Senior Software Engineer",
    company: "Hebbia",
    description: "I built an LLM-powered summarization pipeline with PyTorch and HuggingFace Transformers, deployed scalable AI inference services using FastAPI, Docker, and AWS, and created automated knowledge assistants integrated into enterprise tools, all of which improved system efficiency, reduced model latency by 35%, and boosted research productivity by 40%.",
  },
  {
    id: 2,
    year: "Nov/2020 - Oct/2022",
    title: "ML Engineer",
    company: "Tecton",
    description: "I trained and optimized NLP chatbot models with TensorFlow and BERT, built sentiment analysis workflows with Scikit-learn and spaCy, managed ML pipelines using Airflow and PostgreSQL, and enhanced recommendation algorithms with XGBoost, all of which boosted automation, campaign targeting, message processing, and customer response rates.",
  },
  {
    id: 3,
    year: "Jun/2019 - May/2020",
    title: "Computer Vision Developer",
    company: "Renovai",
    description: "I improved image preprocessing with OpenCV and NumPy, trained deep learning models with TensorFlow for biological data, and built computer vision APIs with FastAPI and Docker, reducing analysis time by 35%, increasing detection accuracy by 28%, and enabling automated processing of 200+ experiments per day.",
  },  
  {
    id: 4,
    year: "Jun/2017 - May/2019",
    title: "Full Stack Developer",
    company: "PACT Pharma",
    description: "I built a localization platform with React, Node.js, and PostgreSQL, streamlined data pipelines using Python and Redis to handle 500K+ translation tasks monthly, and created analytics dashboards with React and D3.js, improving project tracking efficiency by 35%.",
  },
  {
    id: 5,
    year: "Aug/2013 - May/2017",
    title: "Education",
    company: "California State University, East Bay",
    description: "Bachelor of Science in Computer Science",
  },
  // {
  //   id: 3,
  //   year: "2019 - 2021",
  //   title: "Junior Developer",
  //   company: "StartUp Inc",
  //   description: "Developed and maintained internal tools and client-facing dashboards.",
  // },
];

export default function Experience() {
  const [items, setItems] = useState(initialExperiences);
  const [newItem, setNewItem] = useState({ year: "", title: "", company: "", description: "" });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addItem = () => {
    if (newItem.year && newItem.title && newItem.company) {
      setItems([{ ...newItem, id: Date.now() }, ...items]);
      setNewItem({ year: "", title: "", company: "", description: "" });
      setIsDialogOpen(false);
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
          <span className="text-primary">02.</span> EXPERIENCE
        </h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>

          </DialogTrigger>
          <DialogContent className="bg-black/95 border-primary/20 text-white">
            <DialogHeader>
              <DialogTitle className="font-orbitron text-primary">NEW EXPERIENCE</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Year (e.g. 2024 - Present)" value={newItem.year} onChange={e => setNewItem({...newItem, year: e.target.value})} className="bg-white/5 border-white/10" />
              <Input placeholder="Job Title" value={newItem.title} onChange={e => setNewItem({...newItem, title: e.target.value})} className="bg-white/5 border-white/10" />
              <Input placeholder="Company" value={newItem.company} onChange={e => setNewItem({...newItem, company: e.target.value})} className="bg-white/5 border-white/10" />
              <Textarea placeholder="Description" value={newItem.description} onChange={e => setNewItem({...newItem, description: e.target.value})} className="bg-white/5 border-white/10" />
              <Button onClick={addItem} className="w-full bg-primary text-black font-orbitron font-bold">SAVE ENTRY</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12">
        {items.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="absolute top-0 left-[-9px] w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_#39ff14] z-10" />
            
            <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-[45%] mb-2 md:mb-0"></div>
              
              <div className="md:w-[45%] glass-card p-6 rounded-xl border-l-4 border-l-primary group relative">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-orbitron rounded-full mb-2 border border-primary/20">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold font-rajdhani text-white mb-1">{exp.title}</h3>
                <h4 className="text-md text-gray-400 font-space mb-4">{exp.company}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
