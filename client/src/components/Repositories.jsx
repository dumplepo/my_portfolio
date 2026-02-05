import { motion } from "framer-motion";
import { GitBranch, Star, Clock, Lock, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const repositories = [
  {
    name: "quantum-engine",
    description:
      "A high-performance parallel processing engine for complex physics simulations.",
    language: "Rust",
    stars: 128,
    updated: "2 days ago",
    status: "public",
  },
  {
    name: "nexus-ui-kit",
    description:
      "Modern glassmorphism component library with neon accents and accessible primitives.",
    language: "TypeScript",
    stars: 450,
    updated: "5 hours ago",
    status: "public",
  },
  {
    name: "neural-api",
    description:
      "FastAPI wrapper for distributed inference across multiple GPU clusters.",
    language: "Python",
    stars: 89,
    updated: "1 week ago",
    status: "private",
  },
  {
    name: "stellar-db",
    description:
      "Distributed graph database optimized for celestial body mapping and trajectory prediction.",
    language: "Go",
    stars: 215,
    updated: "3 days ago",
    status: "public",
  },
];

export default function Repositories() {
  return (
    <section id="repositories" className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-16">
        <span className="text-primary">05.</span> REPOSITORIES
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {repositories.map((repo, index) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-panel p-6 h-full flex flex-col justify-between hover:border-primary/50 transition-all group">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <GitBranch size={20} />
                  </div>

                  {repo.status === "private" ? (
                    <Lock size={14} className="text-gray-500" />
                  ) : (
                    <Globe size={14} className="text-primary/50" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-space mt-2 line-clamp-2">
                    {repo.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between text-xs font-rajdhani text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-500" />
                    <span>{repo.stars}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{repo.updated}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
