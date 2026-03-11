import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What's your experience with AI and full-stack development?",
    a: "I have 1+ yr of hands-on experience building production-grade Full-Stack AI systems — including LLM-powered agents, RAG pipelines, and AI-integrated SaaS platforms. On the full-stack side, I work across React, Node.js, Python, and cloud infrastructure. I've shipped products across hiring, DevOps, and creator economy verticals.",
  },
  {
    q: "Can you work independently without constant supervision?",
    a: "Absolutely. I operate with a founder mindset — I take full ownership of tasks, proactively identify problems before they escalate, and communicate progress without needing to be chased. My clients and employers consistently note that I require zero hand-holding.",
  },
  {
    q: "How quickly can you ramp up on a new codebase or tech stack?",
    a: "Very quickly. I've jumped into unfamiliar stacks and delivered production features within days, not weeks. I focus on understanding the architecture first, then ship — rather than spending weeks reading docs before writing a single line.",
  },
  {
    q: "Are you open to full-time roles ?",
    a: "I'm open. I'm actively looking for full-time opportunities where I can work on meaningful AI or full-stack product challenges. I thrive in fast-moving teams where ownership and impact are valued over titles.",
  },
  {
    q: "What kind of team environment brings out your best work?",
    a: "I do my best work in small, high-trust teams that move fast and care about quality. I prefer environments where engineers have a direct say in product decisions, where shipping matters, and where learning is continuous. I'm not a good fit for slow bureaucratic cultures.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-12">
        Your questions <br /> answered.
      </h2>

      <div className="space-y-0">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center gap-4 py-6 text-left group"
            >
              <span className="text-sm text-muted-foreground font-mono w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-foreground font-medium">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open === i ? "max-h-40 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-sm text-muted-foreground pl-12">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
