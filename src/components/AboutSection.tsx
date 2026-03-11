import aboutPhoto from "@/assets/nipun-photo.png";
import { Twitter } from "lucide-react";

const workHistory = [
  { company: "Clavel AI", role: "Backend AI Engineer", years: "June 2025-Present" },
  { company: "Envint Services LLP", role: "Full Stack Developer", years: "Dec 2024-Mar 2025" },
  { company: "The Mango Jelly", role: "AI Software Developer", years: "Oct 2024-Dec 2024" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-12">
        Building AI products <br /> that solve real problems.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Photo */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-border" style={{ backgroundColor: "#e8dfd0" }}>
            <img src={aboutPhoto} alt="Nipun Khatri" className="w-full h-full object-contain object-bottom px-8 pt-12 aspect-[3/4]" />
          </div>
        </div>

        {/* Right */}
        <div>
          <div className="mb-8">
            <h3 className="text-lg font-medium text-foreground">Nipun Khatri</h3>
            <p className="text-sm text-muted-foreground">Full Stack AI Engineer</p>
          </div>

          {/* Work History */}
          <div className="mb-10">
            <p className="text-sm text-muted-foreground mb-4">My work history</p>
            <div className="space-y-0">
              {workHistory.map((item) => (
                <div key={item.company} className="flex items-center justify-between py-4 border-b border-border">
                  <div>
                    <p className="text-foreground font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.years}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong className="text-foreground">I think like a founder and build like an engineer.</strong>{" "}
              <span className="text-muted-foreground">
                I specialize in creating AI-integrated SaaS products from scratch, fast, with zero hand-holding needed. My work focuses on shipping production-ready solutions that drive real business impact.
              </span>
            </p>
            <p>
              <strong className="text-foreground">My expertise spans full-stack development and AI engineering</strong>{" "}
              <span className="text-muted-foreground">
                – from building AI agents and RAG pipelines to deploying scalable applications on AWS. I've cut troubleshooting time by 60%, reduced manual workloads by 80%, and built systems serving 1000+ users.
              </span>
            </p>
            <p>
              <strong className="text-foreground">I'm passionate about leveraging cutting-edge AI technologies</strong>{" "}
              <span className="text-muted-foreground">
                to create intelligent solutions. Whether it's building VS Code extensions, creator collaboration platforms, or financial reporting systems, I focus on delivering measurable results and exceptional user experiences.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
