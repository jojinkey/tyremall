import SEO from "../components/SEO";
import {
  ShieldCheck,
  Star,
  ArrowRight,
  CircleDot,
  Award,
  CheckCircle2,
} from "lucide-react";

export default function Brands() {
  return (
    <>
      <SEO
        title="Premium Tyre Brands in Dehradun | Tyremall"
        description="Explore Bridgestone, Continental, Yokohama, Goodyear, Apollo & CEAT tyres available at Tyremall Dehradun."
        keywords="Bridgestone tyres Dehradun, Continental tyres, Yokohama tyres, CEAT tyres, Apollo tyres"
        image="https://yourdomain.com/brands-og.jpg"
        url="https://yourdomain.com/brands"
      />
      <main className="bg-[#f8fafc] text-slate-900 overflow-hidden">

        {/* HERO */}
        <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-black via-[#111827] to-[#1e293b]">

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          {/* SVG Ring */}
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
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Premium Tyre Brands
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tight mb-8">
              Genuine Global
              <br />
              Tyre Brands.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Tyremall Dehradun offers premium tyres from trusted global brands
              including Bridgestone, Continental, Yokohama, Goodyear,
              Apollo, CEAT and more.
            </p>

          </div>
        </section>

        {/* BRANDS GRID */}
        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  name: "Bridgestone",
                  desc: "Premium Japanese tyre technology built for performance and safety.",
                },
                {
                  name: "Continental",
                  desc: "German-engineered tyres delivering exceptional grip and comfort.",
                },
                {
                  name: "Yokohama",
                  desc: "High-performance tyres designed for sporty handling and durability.",
                },
                {
                  name: "Goodyear",
                  desc: "Trusted global tyre brand known for reliability and innovation.",
                },
                {
                  name: "Apollo",
                  desc: "Advanced tyre solutions for Indian roads and driving conditions.",
                },
                {
                  name: "CEAT",
                  desc: "Durable and affordable tyres for daily and commercial use.",
                },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="group bg-white border border-slate-200 rounded-[32px] p-10 hover:-translate-y-2 hover:border-red-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
                >

                  <div className="flex items-center justify-between mb-8">

                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-500 transition-all">

                      <CircleDot className="w-8 h-8 text-red-500 group-hover:text-white" />

                    </div>

                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />

                  </div>

                  <h3 className="text-3xl font-black uppercase mb-5">
                    {brand.name}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    {brand.desc}
                  </p>

                  <button className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider text-sm hover:gap-3 transition-all">

                    Explore Brand
                    <ArrowRight className="w-4 h-4" />

                  </button>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* WHY GENUINE */}
        <section className="py-28 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Why Genuine Tyres
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-8">
                Trusted Brands.
                <br />
                Genuine Quality.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Tyremall only stocks 100% genuine tyres from authorized
                manufacturers to ensure safety, durability and long-term performance.
              </p>

              <div className="space-y-5">

                {[
                  "Manufacturer Warranty",
                  "100% Genuine Products",
                  "Premium Global Brands",
                  "Expert Installation Support",
                  "Competitive Pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    </div>

                    <p className="font-semibold text-lg">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full" />

              <div className="relative bg-gradient-to-br from-[#111827] to-black rounded-[40px] p-10 overflow-hidden">

                <div className="grid grid-cols-2 gap-6">

                  {[
                    ["10+", "Global Brands"],
                    ["50K+", "Tyres Sold"],
                    ["100%", "Genuine Tyres"],
                    ["4.8★", "Customer Rating"],
                  ].map(([number, label]) => (
                    <div
                      key={label}
                      className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md"
                    >

                      <h3 className="text-4xl font-black text-red-500 mb-3">
                        {number}
                      </h3>

                      <p className="text-slate-300 uppercase tracking-wide text-sm">
                        {label}
                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* AUTHORIZED DEALER */}
        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">

            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-8">

              <Award className="w-12 h-12 text-red-500" />

            </div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Authorized Dealer
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
              Buy Genuine
              <br />
              Premium Tyres.
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Visit Tyremall Dehradun for premium tyre brands,
              professional fitting and trusted automotive expertise.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <a
                href="tel:7088977333"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
              >
                Call Now
              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-red-500 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </section>

        {/* TRUST SECTION */}
        <section className="py-24 bg-black text-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid md:grid-cols-3 gap-8">

              {[
                {
                  icon: ShieldCheck,
                  title: "100% Genuine",
                  desc: "All tyres sourced directly from authorized manufacturers.",
                },
                {
                  icon: Award,
                  title: "Authorized Dealer",
                  desc: "Trusted partner for leading global tyre brands.",
                },
                {
                  icon: Star,
                  title: "Customer Satisfaction",
                  desc: "Thousands of happy customers across Dehradun.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border border-white/10 rounded-[32px] p-10 bg-white/5 backdrop-blur-md"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">

                      <Icon className="w-8 h-8 text-red-500" />

                    </div>

                    <h3 className="text-2xl font-black uppercase mb-4">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

      </main>
    </>
  );
}