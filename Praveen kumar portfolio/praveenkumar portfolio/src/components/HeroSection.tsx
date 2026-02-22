import { motion } from "framer-motion";

const stats = [
  { value: "8/10", label: "CGPA" },
  { value: "5+", label: "Projects" },
  { value: "2026", label: "Graduating" },
];

const HeroSection = () => (
  <section className="min-h-screen flex items-center section-padding pt-32">
    <div className="max-w-5xl mx-auto w-full">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
      >
        Software Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] mb-8"
      >
        Hi! I'm
        <br />
        <span className="text-gradient">Praveen Kumar C</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
      >
        Software Engineer with a strong foundation in Java, Data Structures, Algorithms, and building scalable backend & frontend solutions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex gap-12 md:gap-16"
      >
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl md:text-4xl font-display font-bold text-primary">{value}</p>
            <p className="text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
