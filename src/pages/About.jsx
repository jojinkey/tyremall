import SEO from "../components/SEO";
import {
  ShieldCheck,
  MapPin,
  Users,
  Star,
  Award,
  Phone,
  ArrowRight,
  Gauge,
  Wrench,
  Building2,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Tyremall Dehradun"
        description="Learn about Tyremall Dehradun, authorized dealer of premium tyre brands."
        keywords="About Tyremall, Tyre Dealer Dehradun"
        image="https://yourdomain.com/about-og.jpg"
        url="https://yourdomain.com/about"
      />

      <main className="bg-[#f8fafc] text-slate-900 overflow-hidden">
        {/* HERO */}
        <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-black via-[#111827] to-[#1e293b]">
          {/* Background Glow */}
          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          {/* SVG Tyre Rings */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg
              className="absolute top-20 left-10 w-[400px] h-[400px] animate-spin"
              style={{ animationDuration: "30s" }}
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                stroke="white"
                strokeWidth="8"
                fill="none"
                strokeDasharray="10 10"
              />
            </svg>

            <svg
              className="absolute bottom-10 right-10 w-[300px] h-[300px] animate-spin"
              style={{ animationDuration: "20s" }}
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="white"
                strokeWidth="6"
                fill="none"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-6">
                About Tyremall Dehradun
              </p>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tight mb-8">
                Trusted Tyre
                <br />
                Destination
                <br />
                in Dehradun.
              </h1>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                Tyremall is one of Dehradun’s leading authorized tyre dealers,
                offering genuine Bridgestone, Continental, Yokohama, Goodyear,
                Apollo, JK Tyre & CEAT products with expert fitting and premium
                automotive care services.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <a
                  href="tel:7088977333"
                  className="inline-flex items-center gap-2 bg-[#EE3F2C] hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-red-500 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
                >
                  Visit Store
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                ["10+", "Years Experience"],
                ["50K+", "Tyres Sold"],
                ["4.8★", "Google Rating"],
                ["10+", "Premium Brands"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="group bg-white border border-slate-200 rounded-[30px] p-10 hover:-translate-y-2 hover:border-red-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
                >
                  <h3 className="text-5xl font-black text-[#EE3F2C] mb-4">
                    {number}
                  </h3>

                  <p className="text-slate-600 font-semibold uppercase tracking-wide text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div>
              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Our Story
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tight mb-8">
                Built on Trust,
                <br />
                Quality &
                <br />
                Performance.
              </h2>

              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Located on GMS Road, Tyremall has become a trusted destination
                  for premium tyres and automotive services in Dehradun.
                </p>

                <p>
                  From everyday commuters to SUVs, luxury cars, commercial
                  vehicles and bikes — we help customers choose the perfect tyres
                  for safety, performance and durability.
                </p>

                <p>
                  Our focus has always been simple: genuine products, honest
                  guidance, professional fitting and long-term customer trust.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />

              <div className="relative bg-gradient-to-br from-[#111827] to-black rounded-[40px] p-10 overflow-hidden">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: ShieldCheck,
                      title: "100% Genuine",
                    },
                    {
                      icon: Award,
                      title: "Authorized Dealer",
                    },
                    {
                      icon: Gauge,
                      title: "3D Alignment",
                    },
                    {
                      icon: Wrench,
                      title: "Expert Fitting",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-5">
                          <Icon className="w-7 h-7 text-red-500" />
                        </div>

                        <h3 className="text-white font-bold text-lg">
                          {item.title}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mb-20">
              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Why Choose Tyremall
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                More Than Just
                <br />
                a Tyre Shop.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Modern Equipment",
                  desc: "Advanced wheel balancing, nitrogen filling and 3D alignment systems.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Experienced tyre specialists helping customers choose the right fit.",
                },
                {
                  icon: Star,
                  title: "Customer Satisfaction",
                  desc: "Thousands of happy customers across Dehradun and Uttarakhand.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group border border-slate-200 rounded-[32px] p-10 hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
                      <Icon className="w-8 h-8 text-red-500 group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-black uppercase mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section
          id="contact"
          className="py-28 bg-gradient-to-b from-slate-900 to-black text-white"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-8">
              <MapPin className="w-10 h-10 text-red-500" />
            </div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Visit Tyremall
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
              Premium Tyres.
              <br />
              Genuine Service.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Visit Tyremall on GMS Road, Dehradun for genuine Bridgestone,
              Continental, Yokohama, Goodyear, Apollo, JK Tyre & CEAT tyres with
              expert support and installation.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <a
                href="tel:7088977333"
                className="inline-flex items-center gap-2 bg-[#EE3F2C] hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
              >
                <Phone size={18} />
                Call 70889 77333
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-red-500 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}