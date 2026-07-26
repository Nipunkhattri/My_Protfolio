import avatar from "@/assets/my.png";
import resumePDF from "@/assets/Nipun_Resume.pdf";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-0 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="text-sm text-foreground">Open to Opportunities</span>
        </div>

        <h1 className="font-heading italic text-[clamp(3rem,11vw,9rem)] leading-[1.02] tracking-tight mb-8 whitespace-nowrap">
          <span className="text-muted-foreground">Build</span>{" "}
          <span className="text-foreground">Full Stack</span>
        </h1>

        <p className="text-sm md:text-base leading-relaxed mb-8 max-w-[560px]">
          <strong className="text-foreground">I don't just write code — I think in products, margins, and user problems.</strong>{" "}
          <span className="text-muted-foreground">
            Most engineers build features. I build businesses that happen to run on code.
          </span>
        </p>

        {/* CTA */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            data-cal-link="nipun-khattri-v4kfkj/30min"
            data-cal-config='{"layout":"month_view"}'
            className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-2 py-2 pr-5 hover:bg-secondary transition-colors group cursor-pointer"
          >
            <img src={avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
            <span className="text-sm font-medium text-foreground">Book a call with me</span>
          </button>
          <a
            href={resumePDF}
            download="Nipun_Resume.pdf"
            className="inline-flex items-center h-14 gap-2 bg-card border border-border rounded-full px-5 py-2 hover:bg-secondary transition-colors text-sm font-medium text-foreground"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download Resume
          </a>
        </div>
      </div>

      {/* Logo ticker bar */}
      <div className="mt-10 pt-6 pb-6 border-t border-b border-border overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-16">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-16 items-center shrink-0">
              {["Deccanwave Labs", "Clavel AI", "Envint Services LLP", "The Mango Jelly", "Microsoft Imagine Cup"].map((name) => (
                <span
                  key={`${setIndex}-${name}`}
                  className="text-xl md:text-2xl font-medium text-muted-foreground whitespace-nowrap tracking-wide"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
