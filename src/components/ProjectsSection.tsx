import { useRef } from "react";
import hireXAIImg from "@/assets/project-Hirexai.png";
// import workflowImg from "@/assets/project-workflow.png";
import vesperImg from "@/assets/project-vesper.png";
import jameendarImg from "@/assets/project-Jameendar.png";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    name: "HireXAI",
    category: "AI Hiring Platform",
    description: "Two-sided AI hiring platform — an ATS where LLMs screen résumés, AI voice calls run first-round screens, and GPT grades live video interviews, plus a paid mock-interview marketplace for candidates.",
    url: "https://hirexai.in/",
    image: hireXAIImg,
    gradient: "from-blue-950/60 to-indigo-950/40",
    accent: "bg-blue-500/20 text-blue-400",
  },
  {
    name: "Jameendar",
    category: "AI Real-Estate Marketplace",
    description: "Building at Deccanwave Labs as Founding Engineer — an AI-first real-estate marketplace with Bhoomi AI conversational property search, an AI listing flow with native-language voice input, and RERA-verified listings.",
    url: "https://www.jameendar.com/",
    image: jameendarImg,
    gradient: "from-emerald-950/60 to-teal-950/40",
    accent: "bg-emerald-500/20 text-emerald-400",
  },
  // {
  //   name: "GenAI-Stack---Workflow-Builder",
  //   category: "AI Agent Tool",
  //   description: "An intuitive, no-code AI agent platform that empowers you to build, customize, and deploy complex AI workflows effortlessly without writing a single line of code.",
  //   url: "https://github.com/Nipunkhattri/GenAI-Stack---Workflow-Builder",
  //   image: workflowImg,
  //   gradient: "from-violet-950/60 to-purple-950/40",
  //   accent: "bg-violet-500/20 text-violet-400",
  // },
  {
    name: "Vesper",
    category: "Social App · Live on Play Store",
    description: "Built at Deccanwave Labs — a social app where you find your people by feeling, not following. Match by mood instead of a feed, drop into live rooms, and have real conversations with zero pressure. Available on Google Play.",
    url: "https://vesperchat.live/",
    image: vesperImg,
    gradient: "from-pink-950/60 to-rose-950/40",
    accent: "bg-pink-500/20 text-pink-400",
  },
];

const ProjectsSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + 20), behavior: "smooth" });
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <div className="flex items-end justify-between gap-4 mb-12">
        <h2 className="font-heading italic text-4xl md:text-5xl text-foreground">
          Latest Projects
        </h2>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous project"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next project"
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, i) => {
          const Wrapper = project.url ? "a" : "div";
          const wrapperProps = project.url
            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={project.name}
              {...wrapperProps}
              className="group block shrink-0 snap-start w-[92%] md:w-[88%] bg-card rounded-3xl overflow-hidden border border-border hover:border-foreground/20 transition-colors duration-300"
            >
              {/* Screenshot in a browser frame */}
              <div className={`p-3 md:p-6 pb-0 md:pb-0 bg-gradient-to-br ${project.gradient}`}>
                <div className="rounded-t-xl overflow-hidden border border-b-0 border-white/10 bg-background shadow-2xl">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-card">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                    {project.url && (
                      <span className="ml-3 truncate text-[11px] text-muted-foreground">
                        {project.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </span>
                    )}
                  </div>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      className="w-full aspect-[1900/910] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full aspect-[1900/910] flex items-center justify-center">
                      <span className="font-heading italic text-5xl md:text-6xl text-foreground/10 select-none">
                        {project.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-5 md:p-7 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                <div className="md:w-[35%] shrink-0">
                  <p className="text-xs text-muted-foreground mb-1">
                    {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                  </p>
                  <h3 className="font-heading italic text-2xl md:text-3xl text-foreground mb-2">{project.name}</h3>
                  <span className={`inline-block text-[11px] px-2 py-0.5 rounded-full font-medium ${project.accent}`}>
                    {project.category}
                  </span>
                </div>
                <p className="flex-1 text-sm md:text-base text-muted-foreground leading-relaxed">{project.description}</p>
                {project.url ? (
                  <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
                    Visit <ArrowUpRight className="w-4 h-4" />
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground/60 shrink-0">Coming soon</span>
                )}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
