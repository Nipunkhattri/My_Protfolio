import avatar from "@/assets/my.png";
import ironShiftImg from "@/assets/test.png";
import hireXAIImg from "@/assets/project-Hirexai.png";
import genAIStackImg from "@/assets/project-workflow.png";
import resumePDF from "@/assets/Nipun_Resume.pdf";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-0 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start relative">
        {/* Left */}
        <div className="flex-1 max-w-[600px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm text-foreground">Open to Opportunities</span>
          </div>

          <h1 className="font-heading italic text-5xl md:text-7xl leading-[1.05] mb-6">
            <span className="text-muted-foreground">Full Stack</span>
            <br />
            <span className="text-foreground">AI Engineer.</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-[480px]">
            <strong className="text-foreground">I don't just write code — I think in products, margins, and user problems.</strong>{" "}
            <span className="text-muted-foreground">
              Most engineers build features. I build businesses that happen to run on code.
            </span>
          </p>

          {/* CTA */}
          <div className="flex items-center gap-3 flex-wrap">
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

        {/* Right - stacked device mockups */}
        <div className="absolute right-0 top-14 hidden lg:block w-[50%] h-[480px]">
          <div className="relative w-full h-full">
            {/* Back layer - HireXAI */}
            <div className="absolute -left-4 top-24 w-[280px] z-10 rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] -rotate-6 hover:-rotate-4 transition-transform duration-500">
              <div className="bg-secondary/80 px-3 py-1.5 flex items-center gap-1.5">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2">hirexai.in</span>
              </div>
              <img src={hireXAIImg} alt="HireXAI" className="w-full aspect-[4/3] object-cover" />
            </div>

            {/* Middle layer - GenAI-Stack */}
            <div className="absolute left-16 top-16 w-[300px] z-20 rounded-2xl overflow-hidden border border-border shadow-[0_25px_70px_-15px_rgba(0,0,0,0.7)] -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-secondary/80 px-3 py-1.5 flex items-center gap-1.5">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2">github.com</span>
              </div>
              <img src={genAIStackImg} alt="GenAI-Stack" className="w-full aspect-[4/3] object-cover" />
            </div>

            {/* Front layer - IronShift (largest, most prominent) */}
            <div className="absolute left-28 top-6 w-[360px] z-30 rounded-2xl overflow-hidden border border-border shadow-[0_30px_80px_-15px_rgba(0,0,0,0.8)] rotate-3 hover:rotate-1 transition-transform duration-500">
              <div className="bg-secondary/80 px-3 py-2 flex items-center gap-1.5">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="w-2 h-2 rounded-full bg-foreground/20" />
                </div>
                <span className="text-[10px] text-muted-foreground ml-2">ironshift.dev</span>
              </div>
              <img src={ironShiftImg} alt="IronShift" className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Logo ticker bar */}
      <div className="mt-16 pt-8 pb-8 border-t border-b border-border overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-16">
          {[...Array(4)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-16 items-center shrink-0">
              {["Clavel AI", "Envint Services LLP", "The Mango Jelly", "Microsoft Imagine Cup"].map((name) => (
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
