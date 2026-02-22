import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "C Programming"],
  },
  {
    title: "Backend",
    skills: ["Core Java", "OOP", "JDBC", "RESTful APIs", "CRUD Operations"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Database",
    skills: ["Oracle SQL", "MySQL"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures", "Algorithms", "Collections Framework", "Exception Handling", "SDLC"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-16"
      >
        <div className="w-2 h-2 rounded-full bg-primary" />
        <h2 className="text-sm font-display uppercase tracking-[0.3em] text-muted-foreground">
          My Stack
        </h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-10"
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={item}>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary mb-4 font-display">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-body border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
