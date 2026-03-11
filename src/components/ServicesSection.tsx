const techStack = ["React JS", "Next JS", "Node JS", "FastAPI", "LangChain", "MongoDB", "Azure", "Docker"];
const services = [
  "AI Agent Development",
  "Full-Stack Web Apps",
  "RAG Pipeline Integration",
  "SaaS Product Development",
  "API Development",
  "Cloud Deployment (AWS/Azure)",
  "AI-Powered Automation",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-12">
        Skills that <br /> power innovation.
      </h2>

      {/* Tech Stack */}
      <div className="mb-12">
        <p className="text-sm text-muted-foreground mb-4">My tech stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 text-sm rounded-full border border-border text-foreground bg-card"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Services list */}
      <div className="space-y-0">
        {services.map((service) => (
          <div
            key={service}
            className="py-5 border-b border-border flex items-center justify-between group cursor-pointer hover:pl-2 transition-all duration-200"
          >
            <span className="text-lg md:text-xl text-foreground">{service}</span>
            <svg
              className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
