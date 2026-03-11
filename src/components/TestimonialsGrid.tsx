import avatarMartina from "@/assets/avatar-martina.jpg";
import avatarThomas from "@/assets/avatar-thomas.jpg";
import avatarBen from "@/assets/avatar-ben.jpg";
import avatarMichael from "@/assets/avatar-michael.jpg";
import avatarNatalie from "@/assets/avatar-natalie.jpg";
import avatarEmma from "@/assets/avatar-emma.jpg";
import avatar from "@/assets/avatar.jpg";

const testimonials = [
  {
    quote: 'The new UI design <strong>cut our customer support tickets in half.</strong> It\'s been a game-changer for us.',
    name: "Martina Martinez",
    role: "Customer Manager at SupportEase",
    avatar: avatarMartina,
  },
  {
    quote: 'Working with Joseph felt like having a seasoned design partner <strong>who truly understood our vision for KYMA</strong> and brought it to life in ways we hadn\'t even imagined.',
    name: "Thomas Weber",
    role: "Co-founder of KYMA",
    avatar: avatarThomas,
  },
  {
    quote: 'Our website <strong>conversion rate improved significantly</strong> thanks to Joseph\'s expertise.',
    name: "Ben Harper",
    role: "CTO of Nexus",
    avatar: avatarBen,
  },
  {
    quote: "Joseph's design approach brought clarity to our complex data visualizations. Our users are thrilled!",
    name: "Michael Wong",
    role: "Data Scientist at DataSphere",
    avatar: avatarMichael,
  },
  {
    quote: 'The rebranding exceeded our expectations. <strong>It\'s given us a competitive edge in our industry.</strong>',
    name: "Natalie Rivera",
    role: "Brand Manager at UnityBrands",
    avatar: avatarNatalie,
  },
  {
    quote: 'The redesign transformed our brand image. <strong>We\'ve seen a 30% increase in engagement</strong> since launch.',
    name: "Emma Kraft",
    role: "CMO of TechVista",
    avatar: avatarEmma,
  },
];

const TestimonialsGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto border-t border-border">
      {/* Social proof */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex -space-x-3">
          {[avatar, avatarMartina, avatarThomas, avatarBen].map((src, i) => (
            <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-background object-cover" />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">99+ Happy clients</p>
      </div>

      <h2 className="font-heading italic text-4xl md:text-5xl text-foreground mb-12">
        Hear from what my <br /> clients have to say.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-2xl p-6">
            <p
              className="text-sm leading-relaxed text-muted-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: t.quote }}
            />
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsGrid;
