import SEO from "../components/SEO";
import {
  Car,
  Bike,
  Truck,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Star,
  CircleDot,
} from "lucide-react";

export default function Tyres() {
  return (
    <>
      <SEO
        title="Car, Bike & SUV Tyres in Dehradun | Tyremall"
        description="Premium tyres for cars, bikes, SUVs and commercial vehicles in Dehradun with expert fitting and balancing services."
        keywords="Car tyres Dehradun, bike tyres Dehradun, SUV tyres, truck tyres Uttarakhand"
        image="https://yourdomain.com/tyres-og.jpg"
        url="https://yourdomain.com/tyres"
      />
      <main className="bg-[#f8fafc] text-slate-900 overflow-hidden">

        {/* HERO */}
        <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-black via-[#111827] to-[#1e293b]">

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          {/* SVG Tyre Ring */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg
              className="absolute top-10 right-10 w-[400px] h-[400px] animate-spin"
              style={{ animationDuration: "25s" }}
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
              Premium Tyres
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tight mb-8">
              Genuine Tyres
              <br />
              for Every
              <br />
              Vehicle.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Explore premium tyre solutions for cars, bikes, SUVs,
              trucks and commercial vehicles from Bridgestone,
              Continental, Yokohama, Apollo, CEAT and more.
            </p>

          </div>
        </section>

        {/* TYRE CATEGORIES */}
        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  icon: Car,
                  title: "Car Tyres",
                  desc: "Premium tyres for hatchbacks, sedans and SUVs.",
                },
                {
                  icon: Bike,
                  title: "Bike Tyres",
                  desc: "High-performance tyres for motorcycles and scooters.",
                },
                {
                  icon: Truck,
                  title: "Truck Tyres",
                  desc: "Heavy-duty commercial tyres for long-distance transport.",
                },
                {
                  icon: ShieldCheck,
                  title: "SUV Tyres",
                  desc: "Durable off-road and highway tyres for SUVs.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group bg-white border border-slate-200 rounded-[32px] p-10 hover:-translate-y-2 hover:border-red-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
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

        {/* FEATURED BRANDS */}
        <section className="py-28 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="max-w-3xl mb-20">

              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Premium Brands
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight">
                Trusted Global
                <br />
                Tyre Brands.
              </h2>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                "Bridgestone",
                "Continental",
                "Yokohama",
                "Apollo",
                "Goodyear",
                "CEAT",
              ].map((brand) => (
                <div
                  key={brand}
                  className="group bg-white border border-slate-200 rounded-[32px] p-10 hover:border-red-500/30 hover:-translate-y-2 transition-all duration-500"
                >

                  <div className="flex items-center justify-between mb-8">

                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-500 transition-all">

                      <CircleDot className="w-8 h-8 text-red-500 group-hover:text-white" />

                    </div>

                    <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />

                  </div>

                  <h3 className="text-3xl font-black uppercase mb-4">
                    {brand}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    Genuine {brand} tyres with manufacturer warranty
                    and expert installation support.
                  </p>

                  <button className="inline-flex items-center gap-2 text-red-500 font-bold uppercase tracking-wider text-sm hover:gap-3 transition-all">
                    Explore Tyres
                    <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* WHY TYREMALL */}
        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Why Tyremall
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-8">
                Genuine Tyres.
                <br />
                Expert Service.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Tyremall Dehradun provides premium tyres,
                professional fitting, balancing and alignment
                solutions backed by trusted automotive expertise.
              </p>

              <div className="space-y-5">

                {[
                  "100% Genuine Tyres",
                  "Manufacturer Warranty",
                  "Expert Installation",
                  "Competitive Pricing",
                  "Professional Alignment",
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
                    ["50K+", "Tyres Sold"],
                    ["10+", "Global Brands"],
                    ["4.8★", "Google Rating"],
                    ["10+", "Years Experience"],
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

        {/* CTA */}
        <section className="py-28 bg-black text-white text-center">

          <div className="max-w-4xl mx-auto px-6">

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Buy Premium Tyres
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
              Find the Perfect
              <br />
              Tyres Today.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Visit Tyremall Dehradun for genuine premium tyres,
              expert advice and professional tyre services.
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
                className="inline-flex items-center gap-2 border border-white/10 hover:border-red-500 px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
              >
                Contact Us
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}