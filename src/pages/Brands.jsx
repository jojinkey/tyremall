import SEO from "../components/SEO";
import { Phone, ArrowRight, CheckCircle2, Star } from "lucide-react";

const BRANDS_CSS = `
  @keyframes brand-marquee {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .brand-marquee-track {
    animation: brand-marquee 24s linear infinite;
    will-change: transform;
  }
  .brand-marquee-track:hover {
    animation-play-state: paused;
  }
`;

const BRANDS = [
  {
    name: "Bridgestone",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/bridgestone.png",
    tagline: "Japanese Excellence",
    country: "Japan · Est. 1931",
    description:
      "The world's largest tyre manufacturer by revenue. Bridgestone's cutting-edge Japanese engineering combined with decades of motorsport heritage delivers unmatched grip, durability, and precision on every road and in every condition.",
    highlight: "F1 Official Tyre Supplier for 12+ seasons",
  },
  {
    name: "Continental",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/Continetal.png",
    tagline: "German Precision",
    country: "Germany · Est. 1871",
    description:
      "One of the oldest and most prestigious tyre manufacturers in the world. Continental's German precision engineering produces tyres with exceptional wet-road grip, long tread life, superior fuel efficiency and a refined, confident ride.",
    highlight: "OEM supplier for BMW, Mercedes-Benz & Audi",
  },
  {
    name: "Yokohama",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/Yokohoma.png",
    tagline: "Drive Your Ambition",
    country: "Japan · Est. 1917",
    description:
      "Yokohama tyres are engineered for drivers who demand precision and control. Their advanced compound technology ensures superior handling, shorter braking distances, and a smooth, confident ride on any terrain.",
    highlight: "Official partner of multiple global racing series",
  },
  {
    name: "Goodyear",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/GoodYear.png",
    tagline: "More Driven",
    country: "USA · Est. 1898",
    description:
      "For over 125 years, Goodyear has been synonymous with reliability and American innovation. From family sedans to NASCAR circuits, Goodyear delivers consistent performance you can trust mile after mile.",
    highlight: "125+ years of trusted tyre innovation",
  },
  {
    name: "JK Tyre",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/JK-Tyre-logo.png",
    tagline: "Total Control",
    country: "India · Est. 1974",
    description:
      "India's leading tyre brand and the first Indian company to manufacture radial tyres. JK Tyre offers a comprehensive range built specifically for Indian roads — from crowded city streets to winding mountain highways.",
    highlight: "India's #1 commercial tyre brand for 15+ years",
  },
  {
    name: "Apollo",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/apollo.png",
    tagline: "Go The Distance",
    country: "India · Est. 1972",
    description:
      "Apollo Tyres has grown from a single plant in India to a truly global tyre brand. Engineered specifically for Indian road conditions, Apollo delivers outstanding performance, durability and value for everyday drivers.",
    highlight: "Engineered for India's diverse road conditions",
  },
  {
    name: "CEAT",
    logo: "https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/Ceat.png",
    tagline: "Born Tough",
    country: "India · Est. 1958",
    description:
      "CEAT is one of India's most trusted tyre brands — tough, reliable and built to handle India's diverse roads with ease. From daily commuters to heavy-duty commercial vehicles, CEAT tyres are engineered for resilience.",
    highlight: "50+ million tyres manufactured every year",
  },
];

export default function Brands() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: BRANDS_CSS }} />
      <SEO
        title="Premium Tyre Brands in Dehradun | Tyremall"
        description="Explore Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo & CEAT tyres available at Tyremall Dehradun."
        keywords="Bridgestone tyres Dehradun, Continental tyres, Yokohama tyres, CEAT tyres, Apollo tyres, JK Tyre Dehradun"
        image="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png"
        url="https://tyremall.net/brands"
      />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center pt-32 pb-24 bg-gradient-to-br from-black via-slate-950 to-[#0d1117] overflow-hidden">

          {/* Scattered brand watermarks */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <img src={BRANDS[0].logo} alt="" aria-hidden="true"
              className="absolute top-16 right-[6%] w-64 opacity-[0.06] rotate-12 mix-blend-luminosity"
              loading="eager" decoding="async" />
            <img src={BRANDS[1].logo} alt="" aria-hidden="true"
              className="absolute bottom-20 left-[4%] w-56 opacity-[0.06] -rotate-8 mix-blend-luminosity"
              loading="eager" decoding="async" />
            <img src={BRANDS[2].logo} alt="" aria-hidden="true"
              className="absolute top-1/3 right-1/4 w-48 opacity-[0.05] rotate-6 mix-blend-luminosity"
              loading="eager" decoding="async" />
            <img src={BRANDS[3].logo} alt="" aria-hidden="true"
              className="absolute top-24 left-1/4 w-56 opacity-[0.06] -rotate-12 mix-blend-luminosity"
              loading="eager" decoding="async" />
            <img src={BRANDS[4].logo} alt="" aria-hidden="true"
              className="absolute bottom-1/3 right-[8%] w-44 opacity-[0.05] rotate-3 mix-blend-luminosity"
              loading="eager" decoding="async" />
            <img src={BRANDS[5].logo} alt="" aria-hidden="true"
              className="absolute top-1/2 left-[5%] w-40 opacity-[0.05] -rotate-6 mix-blend-luminosity"
              loading="eager" decoding="async" />
            <img src={BRANDS[6].logo} alt="" aria-hidden="true"
              className="absolute bottom-16 right-1/3 w-52 opacity-[0.06] rotate-9 mix-blend-luminosity"
              loading="eager" decoding="async" />
          </div>

          {/* Red top halo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-red-500/[0.12] blur-[130px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">

            <p className="text-red-500 text-[10px] font-black tracking-[0.45em] uppercase mb-7">
              Authorized Multi-Brand Dealer · Dehradun
            </p>

            <h1
              className="font-black text-white uppercase tracking-tighter leading-[0.88] mb-8"
              style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
            >
              7 World-Class<br />Tyre Brands.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Genuine tyres from the world's most trusted manufacturers —
              all under one roof in Dehradun.
            </p>

            {/* Brand logo pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {BRANDS.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="w-9 h-6 bg-white rounded-md flex items-center justify-center p-1 flex-shrink-0">
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="max-h-full max-w-full object-contain"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                    {b.name}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7088977333"
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: "0 12px 40px rgba(238,63,44,0.4)" }}
              >
                <Phone className="w-4 h-4" /> Call 70889 77333
              </a>
              <a
                href="https://wa.me/917088110172"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                WhatsApp Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </section>

        {/* ── SCROLLING LOGO MARQUEE ───────────────────────────────────────── */}
        <div className="py-5 bg-white border-y border-slate-100 overflow-hidden">
          <div
            className="brand-marquee-track"
            style={{ display: "flex", width: "max-content", gap: "48px", alignItems: "center" }}
          >
            {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((b, i) => (
              <div key={i} className="flex items-center gap-4 flex-shrink-0">
                <img
                  src={b.logo}
                  alt={b.name}
                  className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-slate-200 font-bold text-lg select-none">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── BRAND SPOTLIGHT SECTIONS ─────────────────────────────────────── */}
        {BRANDS.map((brand, i) => {
          const isDark = i % 2 !== 0;
          return (
            <section
              key={brand.name}
              className={`relative py-24 md:py-36 overflow-hidden ${isDark ? "bg-slate-950" : "bg-white"}`}
            >
              {/* Full-section background logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <img
                  src={brand.logo}
                  alt=""
                  aria-hidden="true"
                  className="object-contain"
                  style={{
                    width: "min(80vw, 680px)",
                    opacity: isDark ? 0.025 : 0.04,
                  }}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Ambient red glow on dark sections */}
              {isDark && (
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "50%",
                    [i % 4 === 1 ? "right" : "left"]: "-100px",
                    transform: "translateY(-50%)",
                    width: "450px",
                    height: "450px",
                    background: "radial-gradient(circle, rgba(238,63,44,0.1), transparent 70%)",
                  }}
                />
              )}

              <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-14 md:gap-20 items-center`}>

                  {/* ── Logo side */}
                  <div className={`flex justify-center items-center ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                    <div className="relative group">
                      {/* Hover glow ring */}
                      <div
                        className="absolute -inset-6 rounded-[44px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                        style={{ background: "rgba(238,63,44,0.18)" }}
                      />
                      {/* White logo container */}
                      <div
                        className="relative bg-white rounded-[36px] p-14 md:p-20 transition-shadow duration-500"
                        style={{
                          boxShadow:
                            "0 30px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)",
                        }}
                      >
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="mx-auto object-contain group-hover:scale-[1.04] transition-transform duration-500"
                          style={{ width: "min(240px, 60vw)", height: "140px" }}
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ── Text side */}
                  <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                    <p className="text-red-500 text-[10px] font-black tracking-[0.45em] uppercase mb-4">
                      {brand.country}
                    </p>

                    <h2
                      className={`font-black uppercase tracking-tighter leading-[0.9] mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
                      style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
                    >
                      {brand.name}
                    </h2>

                    <p className={`text-sm font-black uppercase tracking-[0.2em] mb-6 ${isDark ? "text-red-400" : "text-red-500"}`}>
                      "{brand.tagline}"
                    </p>

                    <p className={`text-base md:text-lg leading-relaxed mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {brand.description}
                    </p>

                    {/* Highlight badge */}
                    <div
                      className={`inline-flex items-center gap-3 px-5 py-3 rounded-full mb-10 ${isDark ? "" : "bg-slate-50 border border-slate-200"}`}
                      style={
                        isDark
                          ? { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }
                          : {}
                      }
                    >
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400 flex-shrink-0" />
                      <span className={`text-sm font-bold ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        {brand.highlight}
                      </span>
                    </div>

                    {/* Feature chips */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      {["Manufacturer Warranty", "100% Genuine", "Expert Fitting"].map((f) => (
                        <div
                          key={f}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide ${isDark ? "text-slate-400" : "bg-slate-50 border border-slate-200 text-slate-500"}`}
                          style={
                            isDark
                              ? { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }
                              : {}
                          }
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4 flex-wrap">
                      <a
                        href="tel:7088977333"
                        className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-7 py-3.5 rounded-xl font-black uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-0.5"
                        style={{ boxShadow: "0 8px 28px rgba(238,63,44,0.35)" }}
                      >
                        <Phone className="w-4 h-4" /> Get Price
                      </a>
                      <a
                        href="https://wa.me/917088110172"
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-black uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-0.5 ${isDark ? "text-white hover:bg-white/[0.08]" : "text-slate-700 hover:border-red-500 hover:text-red-500 border border-slate-200"}`}
                        style={isDark ? { border: "1px solid rgba(255,255,255,0.18)" } : {}}
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}

        {/* ── TRUST STATS ──────────────────────────────────────────────────── */}
        <section className="py-28 bg-white relative overflow-hidden">
          {/* Brand logos tiled as faint background texture */}
          <div className="absolute inset-0 pointer-events-none select-none grid grid-cols-4 items-center gap-10 p-16 opacity-[0.032]">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <img key={i} src={b.logo} alt="" aria-hidden="true"
                className="w-full h-auto object-contain" loading="lazy" decoding="async" />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-red-500 text-[10px] font-black tracking-[0.45em] uppercase mb-4">Why Tyremall</p>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900">
                One Store. All Brands.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { n: "7+", l: "Premium Brands" },
                { n: "50K+", l: "Tyres Sold" },
                { n: "100%", l: "Genuine Products" },
                { n: "4.8★", l: "Google Rating" },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  className="text-center p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-red-200 transition-all duration-300"
                  style={{ boxShadow: "0 0 0 0 transparent" }}
                >
                  <p className="text-4xl md:text-5xl font-black text-red-500 mb-2">{n}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section className="py-28 bg-slate-950 relative overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
            style={{
              width: "700px",
              height: "350px",
              background: "radial-gradient(ellipse, rgba(238,63,44,0.13), transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 rounded-full pointer-events-none"
            style={{
              width: "400px",
              height: "300px",
              background: "radial-gradient(ellipse, rgba(238,63,44,0.08), transparent 70%)",
              filter: "blur(80px)",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <p className="text-red-500 text-[10px] font-black tracking-[0.45em] uppercase mb-6">
              Authorized Dealer
            </p>
            <h2
              className="font-black text-white uppercase tracking-tighter leading-[0.92] mb-6"
              style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
            >
              Buy Genuine.<br />Buy from Us.
            </h2>
            <p className="text-slate-400 text-lg mb-14 max-w-xl mx-auto leading-relaxed">
              Visit Tyremall on GMS Road, Dehradun for expert advice, the best
              prices and 100% genuine tyres — all with manufacturer warranty.
            </p>

            {/* All brand logos prominently displayed */}
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 max-w-4xl mx-auto mb-14">
              {BRANDS.map((b) => (
                <div
                  key={b.name}
                  className="bg-white rounded-2xl p-3 md:p-4 flex items-center justify-center aspect-square transition-all duration-300 group"
                  style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.08)" }}
                >
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="max-h-10 md:max-h-12 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7088977333"
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 15px 40px rgba(238,63,44,0.4)" }}
              >
                <Phone className="w-5 h-5" /> Call 70889 77333
              </a>
              <a
                href="https://wa.me/917088110172"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.15em] text-sm transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                }}
              >
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
