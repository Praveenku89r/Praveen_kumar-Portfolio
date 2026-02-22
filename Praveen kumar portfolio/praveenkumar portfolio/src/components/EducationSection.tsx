import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <GraduationCap size={20} className="text-primary" />
        <h2 className="text-sm font-display uppercase tracking-[0.3em] text-muted-foreground">
          Education
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="border border-border rounded-xl p-8 md:p-10 bg-card hover:border-primary/30 transition-colors duration-500"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-display font-bold mb-1">
              S.K.R Engineering College
            </h3>
            <p className="text-muted-foreground">B.Tech — Information Technology</p>
          </div>
          <div className="text-right">
            <p className="text-primary font-display font-semibold text-lg">CGPA: 8/10</p>
            <p className="text-sm text-muted-foreground">2022 — 2026 (Expected)</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
