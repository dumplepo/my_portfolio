import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const initialExperiences = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Senior Full Stack Engineer",
    company: "Nebula Tech Solutions",
    description:
      "Leading a team of developers to build scalable SaaS platforms using React, Node.js, and AWS.",
  },
  {
    id: 2,
    year: "2021 - 2023",
    title: "Frontend Developer",
    company: "CyberSpace Agency",
    description:
      "Crafted award-winning interactive websites and 3D web experiences using Three.js and WebGL.",
  },
  {
    id: 3,
    year: "2019 - 2021",
    title: "Junior Developer",
    company: "StartUp Inc",
    description:
      "Developed and maintained internal tools and client-facing dashboards.",
  },
];

export default function Experience() {
  const [items, setItems] = useState(initialExperiences);
  const [newItem, setNewItem] = useState({
    year: "",
    title: "",
    company: "",
    description: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const addItem = () => {
    if (newItem.year && newItem.title && newItem.company) {
      setItems([{ ...newItem, id: Date.now() }, ...items]);
      setNewItem({
        year: "",
        title: "",
        company: "",
        description: "",
      });
      setIsDialogOpen(false);
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white">
          <span className="text-primary">02.</span> EXPERIENCE
        </h2>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-primary text-black font-orbitron font-bold flex items-center gap-2">
              <Plus className="w-4 h-4" />
              ADD
            </Button>
          </DialogTrigger>

          <DialogContent className="bg-black/95 border-primary/20 text-white">
            <DialogHeader>
              <DialogTitle className="font-orbitron text-primary">
                NEW EXPERIENCE
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <Input
                placeholder="Year (e.g. 2024 - Present)"
                value={newItem.year}
                onChange={(e) =>
                  setNewItem({ ...newItem, year: e.target.value })
                }
                className="bg-white/5 border-white/10"
              />

              <Input
                placeholder="Job Title"
                value={newItem.title}
                onChange={(e) =>
                  setNewItem({ ...newItem, title: e.target.value })
                }
                className="bg-white/5 border-white/10"
              />

              <Input
                placeholder="Company"
                value={newItem.company}
                onChange={(e) =>
                  setNewItem({ ...newItem, company: e.target.value })
                }
                className="bg-white/5 border-white/10"
              />

              <Textarea
                placeholder="Description"
                value={newItem.description}
                onChange={(e) =>
                  setNewItem({ ...newItem, description: e.target.value })
                }
                className="bg-white/5 border-white/10"
              />

              <Button
                onClick={addItem}
                className="w-full bg-primary text-black font-orbitron font-bold"
              >
                SAVE ENTRY
              </Button>
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

            <div
              className={`md:flex items-start justify-between ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-[45%] mb-2 md:mb-0"></div>

              <div className="md:w-[45%] glass-card p-6 rounded-xl border-l-4 border-l-primary group relative">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-orbitron rounded-full mb-2 border border-primary/20">
                  {exp.year}
                </span>

                <h3 className="text-xl font-bold font-rajdhani text-white mb-1">
                  {exp.title}
                </h3>

                <h4 className="text-md text-gray-400 font-space mb-4">
                  {exp.company}
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <button
                  onClick={() => removeItem(exp.id)}
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
