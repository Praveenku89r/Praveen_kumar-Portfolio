import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Cyberbullying Detection on Twitter",
    description:
      "Developed a machine learning model to identify and classify cyberbullying comments. Performed text preprocessing, feature extraction, and trained Logistic Regression and Naïve Bayes models. Deployed using Streamlit for real-time predictions.",
    tech: ["Python", "ML", "Streamlit"],
    tag: "Major Project",
  },
  {
    num: "02",
    title: "3D AR Treasure Hunt Game",
    description:
      "Engineered a multi-level AR Treasure Hunt game using Unity and AR Foundation with real-time 3D object tracking, scalable clue-based navigation, and dynamic audio feedback. Hackathon Level 3 Finalist.",
    tech: ["Unity", "AR Foundation"],
    tag: "Hackathon Finalist",
  },
  {
    num: "03",
    title: "3D Historical Monuments Viewer",
    description:
      "Developed an AR-based educational app featuring interactive models of the Taj Mahal and India Gate with real-time object manipulation and synchronized audio narration. Level 2 Finalist among 500+ teams.",
    tech: ["Unity", "AR Foundation"],
    tag: "Hackathon Finalist",
  },
  {
    num: "04",
    title: "3D Animals Explorer",
    description:
      "Designed an immersive AR educational game integrating 20+ optimized 3D animal models with interactive audio/video features. Improved learning outcomes by 40%. Level 1 Finalist among 1000+ teams.",
    tech: ["Unity", "AR Foundation"],
    tag: "Hackathon Finalist",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-display font-bold mb-16"
      >
        Selected Projects
      </motion.h2>

      <div className="grid gap-1">
        {projects.map((project, index) => (
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group border-t border-border py-8 md:py-10 hover:bg-secondary/30 transition-colors duration-300 px-4 -mx-4 rounded-lg"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              <span className="text-primary font-display text-sm">
                _{project.num}
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl md:text-2xl font-display font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                    {project.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs text-muted-foreground font-display">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
