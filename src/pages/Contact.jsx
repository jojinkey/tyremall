import SEO from "../components/SEO";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Tyremall Dehradun | Premium Tyre Shop"
        description="Contact Tyremall Dehradun for premium tyres, wheel alignment, balancing and expert tyre consultation."
        keywords="Contact Tyremall, tyre shop contact Dehradun, tyre services Uttarakhand"
        image="https://yourdomain.com/contact-og.jpg"
        url="https://yourdomain.com/contact"
      />
      <main className="bg-[#f8fafc] text-slate-900 overflow-hidden">

        {/* HERO */}
        <section className="relative pt-40 pb-28 bg-gradient-to-b from-black via-[#111827] to-[#1e293b] overflow-hidden">

          <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-red-500/20 blur-[120px] rounded-full" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-6">
              Contact Tyremall
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] uppercase tracking-tight mb-8">
              Let’s Keep
              <br />
              You Moving.
            </h1>

            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Need new tyres, wheel alignment, balancing, puncture repair or expert advice?
              Contact Tyremall Dehradun today for genuine tyres and premium service.
            </p>

          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  info: "70889 77333",
                  sub: "Mon - Sat",
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "sales@tyremall.net",
                  sub: "Quick Response",
                },
                {
                  icon: MapPin,
                  title: "Visit Store",
                  info: "GMS Road, Dehradun",
                  sub: "Near Niranjanpur",
                },
                {
                  icon: Clock3,
                  title: "Working Hours",
                  info: "9:00 AM – 8:00 PM",
                  sub: "Sunday 10AM – 6PM",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group bg-white border border-slate-200 rounded-[30px] p-10 hover:-translate-y-2 hover:border-red-500/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
                  >

                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
                      <Icon className="w-8 h-8 text-red-500 group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-black uppercase mb-3">
                      {item.title}
                    </h3>

                    <p className="text-slate-900 font-bold text-lg mb-2">
                      {item.info}
                    </p>

                    <p className="text-slate-500">
                      {item.sub}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>

              <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
                Get In Touch
              </p>

              <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-8">
                Need Expert
                <br />
                Tyre Advice?
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our experts help you choose the right tyres for your vehicle,
                driving style, terrain and budget.
              </p>

              <div className="space-y-5">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-red-500" />
                  </div>

                  <div>
                    <h4 className="font-black uppercase mb-1">
                      Call Us
                    </h4>

                    <p className="text-slate-600">
                      +91 70889 77333
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>

                  <div>
                    <h4 className="font-black uppercase mb-1">
                      Store Location
                    </h4>

                    <p className="text-slate-600">
                      GMS Road, Dehradun, Uttarakhand
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 md:p-10 shadow-sm">

              <h3 className="text-3xl font-black uppercase mb-8">
                Send Enquiry
              </h3>

              <form className="space-y-6">

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-3">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-3">
                    Vehicle Type
                  </label>

                  <select className="w-full h-14 px-5 rounded-2xl border border-slate-200 focus:border-red-500 focus:outline-none">

                    <option>Select Vehicle</option>
                    <option>Car</option>
                    <option>Bike</option>
                    <option>SUV</option>
                    <option>Truck</option>

                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold uppercase tracking-wide mb-3">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us what you need..."
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:border-red-500 focus:outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full h-14 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  Send Enquiry
                  <ArrowRight className="w-5 h-5" />
                </button>

              </form>

            </div>

          </div>
        </section>

        {/* MAP / CTA */}
        <section className="py-28 bg-black text-white text-center">

          <div className="max-w-4xl mx-auto px-6">

            <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-8">
              <MapPin className="w-10 h-10 text-red-500" />
            </div>

            <p className="text-red-500 uppercase tracking-[0.3em] text-xs font-bold mb-5">
              Visit Tyremall
            </p>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-8">
              Genuine Tyres.
              <br />
              Trusted Service.
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
              Visit our Dehradun showroom for premium tyre brands,
              expert fitting, wheel alignment and complete tyre solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-5">

              <a
                href="tel:7088977333"
                className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-wider transition-all"
              >
                <Phone size={18} />
                Call Now
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
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