import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground/90 mb-16"
      >
        I believe in building{" "}
        <span className="text-primary">clean, scalable</span> solutions that solve
        real-world problems through code.
      </motion.p>

      <div className="border-t border-border pt-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground uppercase tracking-widest mb-6"
        >
          This is me.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold"
          >
            Hi, I'm Praveen.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a Software Engineer with hands-on experience in backend development using Core Java, JDBC, MySQL, and RESTful APIs. I'm proficient in designing scalable applications and optimizing SQL queries.
            </p>
            <p>
              I'm passionate about writing clean, maintainable, and high-performance code. Currently pursuing B.Tech IT at S.K.R Engineering College, Chennai with a CGPA of 8/10.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
