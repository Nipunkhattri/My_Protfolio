import avatar from "@/assets/my.png";

const TestimonialQuote = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <blockquote className="font-heading italic text-2xl md:text-4xl leading-snug text-foreground max-w-[900px]">
        "I don't wait for a perfect spec. I take{" "}
        <strong>full ownership</strong> — from the first schema to the production deploy — and ship every feature like my own name is on the product."
      </blockquote>
      <div className="flex items-center gap-3 mt-8">
        <img src={avatar} alt="Nipun Khatri" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-medium text-foreground">Nipun Khatri</p>
          <p className="text-sm text-muted-foreground">How I work</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
