import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-display font-bold mb-6"
      >
        Get In <span className="text-primary">Touch</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto"
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-8"
      >
        <a
          href="mailto:praveenkumar@example.com"
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Mail size={18} />
          <span>praveenkumar@example.com</span>
        </a>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Phone size={18} />
          <span>+91 6385237076</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <MapPin size={18} />
          <span>Chennai, India</span>
        </div>
      </motion.div>
    </div>

    <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
      <span className="font-display">PRAVEEN KUMAR C</span>
      <span>© 2026</span>
    </div>
  </section>
);

export default ContactSection;
