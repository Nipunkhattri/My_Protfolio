import avatar from "@/assets/my.png";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center max-w-[600px] mx-auto">
        <img src={avatar} alt="Nipun Khatri" className="w-14 h-14 rounded-full object-cover mx-auto mb-6" />
        <h3 className="font-heading italic text-2xl md:text-3xl text-foreground mb-3">
          Interested in working together? <br /> Let's connect.
        </h3>
        <p className="text-sm text-muted-foreground mb-8">
          I'm always open to discussing new opportunities and innovative AI projects. Let's talk about how we can build something great together.
        </p>
        <button
          data-cal-link="nipun-khattri-v4kfkj/30min"
          data-cal-config='{"layout":"month_view"}'
          className="inline-block bg-foreground text-primary-foreground font-medium px-8 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default CTASection;
