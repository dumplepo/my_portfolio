import { motion } from "framer-motion";
import { ExternalLink, Github, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const initialProjects = [
  {
    id: 1,
    title: "Resume Screening AI",
    category: "Machine Learning",
    image: "/public/images/resume.png",
    tech: ["Groq API", "LLaMA3", "Streamlit", "Python", "FastAPI", "PyMuPDF", "OCR", "JSON Schema"],
    description: "This AI resume screening tool enables companies to conduct recruitment faster and smarter by utilizing OCR technology to scan resumes and LLaMA 3 to interpret their content, thereby rapidly evaluating and categorizing applicants (as finalists, on hold, or rejected).",
    livedemo: "https://resume-screening-ai-ct5hlbyrzyu78bf7gvrguc.streamlit.app",
    githublink: "https://github.com/dumplepo/Resume_screening_ai.git",
  },
  {
    id: 2,
    title: "Cosmic Commerce",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2808&auto=format&fit=crop",
    tech: ["Next.js", "Stripe", "PostgreSQL"],
    description: "A fully headless e-commerce solution with 3D product previews and AI-powered recommendations.",
    livedemo: "",
    githublink: "",
  },
  {
    id: 3,
    title: "Cyber Chat",
    category: "Communication",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
    tech: ["Socket.io", "Express", "Redis"],
    description: "End-to-end encrypted messaging platform with self-destructing messages and cyberpunk UI themes.",
    livedemo: "",
    githublink: "",
  },
  {
    id: 4,
    title: "AI Nexus",
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    tech: ["Python", "TensorFlow", "FastAPI"],
    description: "An interface for generative AI models allowing users to create assets for games and movies.",
    livedemo: "",
    githublink: "",
  },
];

export default function Projects() {
  const [items, setItems] = useState(initialProjects);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newItem, setNewItem] = useState({ title: "", category: "", image: "", description: "", tech: "" });

  // const addItem = () => {
  //   if (newItem.title && newItem.category) {
  //     setItems([{ 
  //       ...newItem, 
  //       id: Date.now(), 
  //       image: newItem.image || "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
  //       tech: newItem.tech.split(",").map(t => t.trim())
  //     }, ...items]);
  //     setNewItem({ title: "", category: "", image: "", description: "", tech: "" });
  //     setIsDialogOpen(false);
  //   }
  // };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
          <span className="text-primary">03. </span>PROJECTS
        </h2>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-black/95 border-primary/20 text-white">
            <DialogHeader>
              <DialogTitle className="font-orbitron text-primary">NEW PROJECT</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Project Title" value={newItem.title} onChange={e => setNewItem({...newItem, title: e.target.value})} className="bg-white/5 border-white/10" />
              <Input placeholder="Category" value={newItem.category} onChange={e => setNewItem({...newItem, category: e.target.value})} className="bg-white/5 border-white/10" />
              <Input placeholder="Image URL (optional)" value={newItem.image} onChange={e => setNewItem({...newItem, image: e.target.value})} className="bg-white/5 border-white/10" />
              <Input placeholder="Technologies (comma separated)" value={newItem.tech} onChange={e => setNewItem({...newItem, tech: e.target.value})} className="bg-white/5 border-white/10" />
              <Textarea placeholder="Description" value={newItem.description} onChange={e => setNewItem({...newItem, description: e.target.value})} className="bg-white/5 border-white/10" />
              {/* <Button onClick={addItem} className="w-full bg-primary text-black font-orbitron font-bold">PUBLISH PROJECT</Button> */}
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} onRemove={() => removeItem(project.id)} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onRemove }: any) {
  return (
    <Dialog>
      <div className="relative group">
        
        <DialogTrigger asChild>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black/50 hover:border-primary/50 transition-all duration-500"
          >
            <div className="aspect-video relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className="text-primary font-rajdhani text-sm tracking-wider uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                {project.tech.map((t: string) => (
                  <span key={t} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </DialogTrigger>
      </div>
      
      <DialogContent className="max-w-4xl bg-black/95 border-primary/20 p-0 overflow-hidden text-white">
        <div className="grid md:grid-cols-2 h-full">
           <div className="bg-gray-900 h-64 md:h-full relative overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
           </div>
           <div className="p-8 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-orbitron font-bold text-white mb-2">{project.title}</h3>
                <p className="text-primary font-rajdhani tracking-wider">{project.category}</p>
              </div>
              
              <p className="text-gray-300 font-space leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-4">
                <h4 className="font-orbitron text-sm text-gray-400">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => (
                    <span key={t} className="px-3 py-1 border border-primary/30 rounded-full text-sm font-rajdhani text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="flex-1 bg-primary text-black hover:bg-white font-bold font-orbitron neon-blink-hover vibrate-active">
                  {/* <ExternalLink className="w-4 h-4 mr-2" /> Live Demo */}
                  <a href={project.livedemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" className="flex-1 border-white/20 hover:bg-white/10 font-orbitron neon-blink-hover vibrate-active">
                  {/* <Github className="w-4 h-4 mr-2" /> Source */}
                  <a href={project.githublink} target="_blank" rel="noopener noreferrer">Source</a>
                </Button>
              </div>
           </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
