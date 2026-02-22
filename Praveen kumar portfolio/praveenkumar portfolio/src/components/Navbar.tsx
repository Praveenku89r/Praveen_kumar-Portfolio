import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const navItems = ["About", "Skills", "Projects", "Education", "Contact"];
const socials = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:praveenkumar@example.com", label: "Email" },
];

const Navbar = () => (
  <motion.nav
    initial={{ y: -80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between section-padding !py-5 backdrop-blur-md bg-background/80 border-b border-border/50"
  >
    <a href="#" className="text-xl font-display font-bold text-foreground">
      Praveen<span className="text-primary">.</span>
    </a>
    <div className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="flex items-center gap-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  </motion.nav>
);

export default Navbar;
