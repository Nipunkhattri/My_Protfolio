import { useEffect, useState } from "react";

const words = ["build", "engineer", "ship"];

const Footer = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="pt-24 pb-8 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      {/* Giant name */}
      <div className="mb-16">
        <h2 className="font-heading italic text-[clamp(4rem,15vw,12rem)] leading-none text-foreground tracking-tight">
          NIPUN
        </h2>
        <p className="font-heading italic text-2xl md:text-3xl text-muted-foreground mt-2">
          / {words[wordIndex]}
        </p>
      </div>

      {/* Footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Email</p>
          <a href="mailto:nipunkhattri321@gmail.com" className="text-sm text-foreground hover:underline">
            nipunkhattri321@gmail.com
          </a>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Socials</p>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/nipun-khatri-80b168224/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:underline">LinkedIn</a>
            <a href="https://github.com/Nipunkhattri" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Navigation</p>
          <div className="flex flex-wrap gap-4">
            {["Work", "Services", "About", "Blog"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">© 2026 Nipun Khatri. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
