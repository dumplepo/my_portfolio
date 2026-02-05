import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiNextdotjs } from "react-icons/si";

const skills = [
  { name: "React", icon: FaReact, level: 90 },
  { name: "TypeScript", icon: SiTypescript, level: 85 },
  { name: "Node.js", icon: FaNodeJs, level: 80 },
  { name: "Next.js", icon: SiNextdotjs, level: 85 },
  { name: "Tailwind", icon: SiTailwindcss, level: 95 },
  { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
  { name: "Docker", icon: FaDocker, level: 70 },
  { name: "AWS", icon: FaAws, level: 65 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-16 text-center">
        <span className="text-primary">04.</span> SKILLS & TECH
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6 rounded-xl flex flex-col items-center justify-center gap-4 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              <Icon className="text-5xl text-gray-400 group-hover:text-primary transition-colors duration-300 z-10" />

              <div className="text-center z-10">
                <h3 className="font-orbitron font-bold text-white">{skill.name}</h3>
                <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden w-24 mx-auto">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary shadow-[0_0_10px_#39ff14]"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
