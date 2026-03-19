import ironShiftImg from "@/assets/project-ironshift.png";
import hireXAIImg from "@/assets/project-Hirexai.png";
import workflowImg from "@/assets/project-workflow.png";

import newsAppImg from "@/assets/project-NewsApp.png";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "IronShift",
    category: "DevOps · VS Code Extension",
    description: "AI-powered VS Code extension that lets you manage AWS, Azure, GCP, Docker, and Kubernetes using plain English — no CLI memorization, no console switching.",
    url: "https://ironshift.dev/",
    image: ironShiftImg,
    gradient: "from-orange-950/60 to-red-950/40",
    accent: "bg-orange-500/20 text-orange-400",
  },
  {
    name: "HireXAI",
    category: "AI Hiring Platform",
    description: "AI-powered recruitment platform automating candidate screening, job matching, and outreach at scale. Reduces time-to-hire by 70% — hire smarter, not harder.",
    url: "https://hirexai.in/",
    image: hireXAIImg,
    gradient: "from-blue-950/60 to-indigo-950/40",
    accent: "bg-blue-500/20 text-blue-400",
  },
  {
    name: "GenAI-Stack---Workflow-Builder",
    category: "AI Agent Tool",
    description: "An intuitive, no-code AI agent platform that empowers you to build, customize, and deploy complex AI workflows effortlessly without writing a single line of code.",
    url: "https://github.com/Nipunkhattri/GenAI-Stack---Workflow-Builder",
    image: workflowImg,
    gradient: "from-violet-950/60 to-purple-950/40",
    accent: "bg-violet-500/20 text-violet-400",
  },
  {
    name: "News App",
    category: "AI Agents · In Progress",
    description: "Fully automated news platform powered by AI agents — no human editors, no manual uploads. Agents source, verify, write, and publish in real time.",
    url: null,
    image: newsAppImg,
    gradient: "from-emerald-950/60 to-teal-950/40",
    accent: "bg-emerald-500/20 text-emerald-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto">
      <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-12">
        Latest Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => {
          const Wrapper = project.url ? "a" : "div";
          const wrapperProps = project.url
            ? { href: project.url, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Wrapper
              key={project.name}
              {...wrapperProps}
              className="group block bg-card rounded-2xl overflow-hidden border border-border hover:border-foreground/20 transition-all duration-300"
            >
              {/* Hero area */}
              {project.image ? (
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                  <span className="font-heading italic text-5xl md:text-6xl text-foreground/10 select-none">
                    {project.name}
                  </span>
                </div>
              )}

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-medium text-foreground">{project.name}</h3>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${project.accent}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                  {project.url && (
                    <span className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-1">
                      Visit <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                  {!project.url && (
                    <span className="text-xs text-muted-foreground/60 shrink-0 mt-1">Coming soon</span>
                  )}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
