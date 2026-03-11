import { useState, useEffect } from "react";
import avatar from "@/assets/my.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 py-2 rounded-full border border-border backdrop-blur-xl transition-all duration-300 w-[90%] max-w-[720px] ${
        scrolled ? "bg-card/80" : "bg-card/60"
      }`}
    >
      <div className="flex items-center gap-2.5">
        <img src={avatar} alt="Nipun Khatri" className="w-8 h-8 rounded-full object-cover" />
        <span className="font-body text-sm font-medium text-foreground">Nipun Khatri</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {["Work", "Services", "About", "Blog"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="bg-foreground text-primary-foreground text-sm font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
