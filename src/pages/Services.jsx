import SEO from "../components/SEO";
import {
  Wrench,
  Gauge,
  ShieldCheck,
  CircleDot,
  Truck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  return (
    <>
      <SEO
        title="Wheel Alignment & Tyre Services in Dehradun | Tyremall"
        description="Professional wheel alignment, balancing, nitrogen filling, puncture repair and tyre fitting services in Dehradun."
        keywords="Wheel alignment Dehradun, tyre fitting, puncture repair, wheel balancing, nitrogen filling"
        image="https://yourdomain.com/services-og.jpg"
        url="https://yourdomain.com/services"
      />
      <main className="bg-[#f8fafc] text-slate-900 overflow-hidden">

        {/* HERO */}
        <section className="relative pt-40 pb-28 overflow-hidden bg-gradient-to-b from-black via-[#111827] to-[#1e293b]">

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          {/* SVG Rings */}
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
              Tyremall Services
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tight mb-8">
              Professional
              <br />
              Tyre Care
              <br />
              Services.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              From wheel alignment to tyre fitting — Tyremall delivers
              professional tyre solutions with precision equipment and expert technicians.
            </p>

          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-28 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  icon: Wrench,
                  title: "Tyre Fitting",
                  desc: "Professional tyre installation with precision mounting and balancing.",
                },
                {
                  icon: Gauge,
                  title: "Wheel Alignment",
                  desc: "Computerized 3D wheel alignment for smoother driving and tyre life.",
                },
                {
                  icon: CircleDot,
                  title: "Wheel Balancing",
                  desc: "Reduce vibration and uneven wear with advanced balancing systems.",
                },
                {
                  icon: ShieldCheck,
                  title: "Nitrogen Filling",
                  desc: "Maintain optimal tyre pressure with premium nitrogen inflation.",
                },
                {
                  icon: Truck,
                  title: "Commercial Tyres",
                  desc: "Heavy-duty tyre solutions for trucks, buses and commercial fleets.",
                },
                {
                  icon: Sparkles,
                  title: "Puncture Repair",
                  desc: "Quick and professional puncture repairs using industry-grade methods.",
                },
              ].map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="group bg-white border border-slate-200 rounded-[32px] p-10 hover:-translate-y-2 hover:border-red-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">

                      <Icon className="w-8 h-8 text-red-500 group-hover:text-white" />

                    </div>

                    <h3 className="text-2xl font-black uppercase mb-4">
                      {service.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {service.desc}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}
        <section className="py-28 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}
            <div>

              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-8">
                Trusted Tyre
                <br />
                Experts in
                <br />
                Dehradun.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Tyremall combines genuine tyre brands, skilled technicians
                and advanced equipment to deliver reliable tyre solutions
                for every vehicle.
              </p>

              <div className="space-y-5">

                {[
                  "100% Genuine Tyres",
                  "Advanced 3D Alignment",
                  "Expert Technicians",
                  "Best Price Guarantee",
                  "Quick Service & Support",
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
                    ["10+", "Years Experience"],
                    ["50K+", "Tyres Sold"],
                    ["4.8★", "Google Rating"],
                    ["10+", "Premium Brands"],
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
              Book Tyre Service
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
              Premium Tyre
              <br />
              Service Starts Here.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Visit Tyremall Dehradun for professional tyre fitting,
              wheel balancing, nitrogen filling and expert tyre consultation.
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