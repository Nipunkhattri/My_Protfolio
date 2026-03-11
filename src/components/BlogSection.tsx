import { Linkedin } from "lucide-react";

const posts = [
  {
    tag: "Build in Public",
    title: "Cloning isn't the problem. What you choose to clone is.",
    excerpt: "I started my journey building Instagram, YouTube, and Spotify clones. Back then it felt productive — login pages, feeds, players. But today, AI can build these in less than an hour. \"I built an Instagram clone\" doesn't stand out anymore.",
    date: "February 10, 2026",
    url: "https://www.linkedin.com/posts/nipun-khatri-80b168224_buildinpublic-softwareengineering-startupmindset-activity-7421514898028900352-SnBW",
    featured: true,
  },
  {
    tag: "System Design",
    title: "System Design is now a basic expectation in tech interviews.",
    excerpt: "Interviews have changed, and coding is no longer the only focus. Logic still matters, but System Design matters too.",
    date: "February 10, 2026",
    url: "https://www.linkedin.com/posts/nipun-khatri-80b168224_systemdesign-softwareengineering-techinterviews-activity-7424414126766080000-pN9B",
    featured: false,
  },
  {
    tag: "AI & Tech",
    title: "While you're debating whether AI is the future, it just became the present.",
    excerpt: "Major AI updates dropped last week — Claude Opus 4.6, GPT-5.3-Codex, Kling 3.0. Developers who adopted AI 6 months ago are shipping at impossible speeds.",
    date: "February 17, 2026",
    url: "https://www.linkedin.com/posts/nipun-khatri-80b168224_ai-softwaredevelopment-techtrends-activity-7429090551091843072-X3Tu",
    featured: false,
  },
  {
    tag: "DevOps & Cloud",
    title: "How AI is changing Cloud & DevOps operations in 2026.",
    excerpt: "Cloud operations are getting more complex — multi-cloud, hundreds of services, security compliance. AI-powered assistants are starting to change this.",
    date: "March 05, 2026",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7435196275362463744",
    featured: false,
  },
  {
    tag: "UI / Frontend",
    title: "Just discovered something that changed how I think about UI.",
    excerpt: "Components ≠ Design. You still have to figure out how sections fit together — and why your MVP still looks like a side project. Then I landed on Aceternity UI.",
    date: "March 03, 2026",
    url: "https://www.linkedin.com/posts/nipun-khatri-80b168224_uidesign-frontenddevelopment-mvp-activity-7433111541710757888-y0Yr",
    featured: false,
  },
];

const BlogSection = () => {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <section id="blog" className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-heading italic text-4xl md:text-5xl text-foreground">
          Thoughts on AI, <br /> products & building.
        </h2>
        <a
          href="https://www.linkedin.com/in/nipun-khatri-80b168224/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          View all posts
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Featured (large) card */}
        <a
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-card border border-border rounded-2xl p-8 flex flex-col justify-between hover:border-foreground/30 transition-colors duration-300 lg:row-span-2 min-h-[360px]"
        >
          <div>
            <span className="inline-block text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-6">
              {featured.tag}
            </span>
            <h3 className="font-heading italic text-2xl md:text-3xl text-foreground leading-snug mb-4 group-hover:text-foreground/80 transition-colors">
              {featured.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {featured.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <span className="text-xs text-muted-foreground">{featured.date}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
              <Linkedin className="w-3.5 h-3.5" />
              Read on LinkedIn
            </span>
          </div>
        </a>

        {/* Smaller cards */}
        {rest.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-2xl p-6 flex flex-col justify-between hover:border-foreground/30 transition-colors duration-300 min-h-[160px]"
          >
            <div>
              <span className="inline-block text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1 mb-4">
                {post.tag}
              </span>
              <h3 className="font-heading italic text-lg text-foreground leading-snug mb-2 group-hover:text-foreground/80 transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
                Read
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Mobile — view all link */}
      <div className="mt-8 flex md:hidden justify-center">
        <a
          href="https://www.linkedin.com/in/nipun-khatri-80b168224/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          View all posts on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default BlogSection;
