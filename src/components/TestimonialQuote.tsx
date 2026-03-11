import clavelaiLogo from "@/assets/clavelai.png";

const TestimonialQuote = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <blockquote className="font-heading italic text-2xl md:text-4xl leading-snug text-foreground max-w-[900px]">
        "Nipun doesn't just write code — he takes{" "}
        <strong>full ownership.</strong> He thinks like a co-founder, anticipates problems before they happen, and ships features like it's his own product on the line."
      </blockquote>
      <div className="flex items-center gap-3 mt-8">
        <img src={clavelaiLogo} alt="Clavel AI" className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-medium text-foreground">Clavel AI</p>
          <p className="text-sm text-muted-foreground">Product Development Team</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialQuote;
