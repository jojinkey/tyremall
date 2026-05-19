import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, MapPin, ArrowRight, Check, Star, Plus,
  Car, Bike, Truck, Wrench, Crosshair, Gauge, 
  ShieldCheck, Settings2, RefreshCw, Navigation, Bus, Mail, Zap
} from 'lucide-react';

// --- Global CSS & Animations ---
const GLOBAL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --color-brand-red: #EE3F2C;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; background: #f8fafc; }

body {
  font-family: 'Rubik', sans-serif;
  background: #f8fafc; /* Slate 50 - Light Mode Base */
  color: #0f172a; /* Slate 900 */
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Typography Utilities */
.text-brand-red { color: var(--color-brand-red); }
.bg-brand-red { background-color: var(--color-brand-red); }
.border-brand-red { border-color: var(--color-brand-red); }

/* Custom Buttons */
.clip-btn {
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  transition: all 0.3s ease;
}
.clip-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(238, 63, 44, 0.25);
}

.clip-btn-outline {
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  background: #ffffff;
  border: 1px solid #cbd5e1;
  color: #0f172a;
  transition: all 0.3s ease;
}
.clip-btn-outline:hover {
  border-color: var(--color-brand-red);
  color: var(--color-brand-red);
  background: #fffafa;
}

/* Bracket Corners - Light Mode */
.bracket-box {
  position: relative;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: all 0.4s ease;
}
.bracket-box:hover {
  border-color: #cbd5e1;
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04);
}
.corner-tl, .corner-tr, .corner-bl, .corner-br {
  position: absolute;
  width: 10px;
  height: 10px;
  transition: all 0.4s ease;
}
.bracket-box:hover .corner-tl, .bracket-box:hover .corner-tr, 
.bracket-box:hover .corner-bl, .bracket-box:hover .corner-br {
  width: 16px;
  height: 16px;
}
.corner-tl { top: -1px; left: -1px; border-top: 2px solid var(--color-brand-red); border-left: 2px solid var(--color-brand-red); }
.corner-tr { top: -1px; right: -1px; border-top: 2px solid var(--color-brand-red); border-right: 2px solid var(--color-brand-red); }
.corner-bl { bottom: -1px; left: -1px; border-bottom: 2px solid var(--color-brand-red); border-left: 2px solid var(--color-brand-red); }
.corner-br { bottom: -1px; right: -1px; border-bottom: 2px solid var(--color-brand-red); border-right: 2px solid var(--color-brand-red); }

/* Scroll Animations */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }

/* Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #f1f5f9; }
::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-brand-red); }

.text-shadow-heavy {
  text-shadow: 0px 4px 20px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.4);
}

.pulse-animation {
  animation: pulse-soft 2s infinite;
}
@keyframes pulse-soft {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(238, 63, 44, 0.4); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(238, 63, 44, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(238, 63, 44, 0); }
}

/* Futuristic Pop-in Animation */
@keyframes futuristic-pop {
  0% { opacity: 0; transform: scale(0.9) translateY(30px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-futuristic-pop {
  animation: futuristic-pop 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Glowing Border Hover */
.glow-border-hover {
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.glow-border-hover:hover {
  border-color: var(--color-brand-red);
  box-shadow: 0 0 30px rgba(238, 63, 44, 0.3), inset 0 0 15px rgba(238, 63, 44, 0.15);
  transform: translateY(-8px);
}
`;

// --- Utility Hooks ---
const useInView = (options = { threshold: 0.1 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};

// --- Reusable Components ---
const SectionTitle = ({ subtitle, title, centered = true }) => {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`mb-16 ${centered ? 'text-center' : 'text-left'} animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
      <div className="text-brand-red text-[11px] font-bold tracking-[0.35em] uppercase mb-4">
        {subtitle}
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
};

const CornerCard = ({ children, className = "", delay = "" }) => {
  const [ref, isVisible] = useInView();
  return (
    <div ref={ref} className={`bracket-box p-6 md:p-8 animate-on-scroll ${delay} ${isVisible ? 'is-visible' : ''} ${className}`}>
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      {children}
    </div>
  );
};

// --- Brand Logos Array ---
const mainBrandLogos = [
  { name: 'Bridgestone', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/bridgestone.png', tagline: 'Japanese Excellence' },
  { name: 'Continental', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/Continetal.png', tagline: 'German Engineering' },
  { name: 'Yokohama', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/Yokohoma.png', tagline: 'Premium Performance' },
  { name: 'Goodyear', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/GoodYear.png', tagline: 'American Innovation' },
  { name: 'JK Tyre', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/JK-Tyre-logo.png', tagline: 'Total Control' },
  { name: 'Apollo', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/apollo.png', tagline: 'Go The Distance' },
  { name: 'CEAT', url: 'https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/Ceat.png', tagline: 'Born Tough' },
];

const allBrandLogos = [
  ...mainBrandLogos
];

// --- Premium Brands Modal ---
const MoreBrandsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] animate-futuristic-pop">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-8 py-6 flex justify-between items-center z-10">
          <div>
            <div className="text-brand-red text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Authorized Dealer</div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
              All Premium Brands
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-slate-100 hover:bg-brand-red hover:text-white flex items-center justify-center transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Premium Brand Grid */}
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {allBrandLogos.map((brand, idx) => (
              <div 
                key={brand.name}
                className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-brand-red/50 hover:shadow-[0_20px_40px_rgba(238,63,44,0.15)] transition-all duration-500 cursor-pointer"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[3px] border-l-[3px] border-brand-red rounded-tl-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[3px] border-r-[3px] border-brand-red rounded-tr-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[3px] border-l-[3px] border-brand-red rounded-bl-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[3px] border-r-[3px] border-brand-red rounded-br-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8"></div>
                
                {/* Logo Container */}
                <div className="h-20 md:h-24 flex items-center justify-center mb-4">
                  <img 
                    src={brand.url} 
                    alt={`${brand.name} Tyres`}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Brand Info */}
                <div className="text-center">
                  <h3 className="text-slate-900 font-bold text-sm md:text-base uppercase tracking-wide mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-slate-500 text-[10px] md:text-xs font-medium tracking-wide">
                    {brand.tagline}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm font-medium">
            All brands available with <span className="text-brand-red font-bold">manufacturer warranty</span>
          </p>
          <a 
            href="tel:7088977333" 
            className="flex items-center gap-2 clip-btn bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-widest text-xs shadow-lg shadow-red-500/30 hover:-translate-y-1 transition-all"
          >
            <Phone className="w-4 h-4" /> Get Best Quote
          </a>
        </div>
      </div>
    </div>
  );
};

// --- Main Components ---

const Loader = ({ isLoading }) => (
  <div 
    className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-all duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
  >
    <img 
      src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png" 
      alt="Tyremall" 
      className="h-28 w-auto mb-8 animate-pulse"
      style={{ filter: 'drop-shadow(0px 10px 30px rgba(238,63,44,0.3))' }}
    />
    <div className="w-48 h-[3px] bg-slate-100 overflow-hidden relative rounded-full">
      <div className="absolute top-0 left-0 h-full bg-brand-red w-full origin-left animate-[scaleX_1.5s_ease-in-out_infinite] scale-x-0 rounded-full"></div>
    </div>
  </div>
);

// --- PREMIUM Conversion Popup Banner (10s Trigger) ---
const ConversionBanner = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const quickServices = [
    { title: 'New Tyres', subtitle: 'Best Brands & Prices', icon: <Car className="w-7 h-7" />, message: "Hi TyreMall, I am looking to buy New Tyres. Please help me with the best options and pricing." },
    { title: 'Alignment', subtitle: '3D Laser Precision', icon: <Crosshair className="w-7 h-7" />, message: "Hi TyreMall, I would like to book a 3D Wheel Alignment service." },
    { title: 'Nitrogen', subtitle: 'Optimized Pressure', icon: <Gauge className="w-7 h-7" />, message: "Hi TyreMall, I want to avail the Nitrogen Filling service for my vehicle." },
    { title: 'Puncture', subtitle: 'Express Repair', icon: <ShieldCheck className="w-7 h-7" />, message: "Hi TyreMall, I urgently need a Puncture Repair service." },
    { title: 'Balancing', subtitle: 'Vibration-Free Ride', icon: <Settings2 className="w-7 h-7" />, message: "Hi TyreMall, I would like to get my wheels balanced." }
  ];

  const getWhatsAppLink = (message) => {
    return `https://wa.me/917088977333?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6">
      {/* Dark Blurred Backdrop - Clicking this closes the banner */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity cursor-pointer" 
        onClick={onClose}
      ></div>
      
      {/* Futuristic Banner Content with max-height to avoid completely overwhelming small screens */}
      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-gradient-to-b from-slate-900 to-black rounded-3xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.9)] p-6 md:p-10 animate-futuristic-pop">
        
        {/* Massive Backlit Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-brand-red/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center relative z-10 mb-8">
          
          {/* Backlit TyreMall Logo */}
          <img 
            src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png" 
            alt="Tyremall" 
            className="mx-auto h-16 sm:h-20 mb-6 drop-shadow-xl"
            style={{ filter: 'drop-shadow(0px 0px 25px rgba(238,63,44,0.9))' }}
          />

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-red/10 border border-brand-red/30 mb-5 shadow-[0_0_15px_rgba(238,63,44,0.2)]">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red animate-pulse" />
            <span className="text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest">⚡ Skip The Waiting Line</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 drop-shadow-lg">
            Get Priority <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-brand-red drop-shadow-md">Service</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Need new tyres or expert auto care? Tap any service below to instantly get a custom quote and priority booking via WhatsApp!
          </p>
        </div>

        {/* 5 Premium Service Cards Grid */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-5 relative z-10">
          {quickServices.map((service, idx) => (
            <a 
              key={idx}
              href={getWhatsAppLink(service.message)}
              target="_blank"
              rel="noreferrer"
              className="glow-border-hover bg-slate-800/40 backdrop-blur-lg p-5 sm:p-6 rounded-2xl w-[45%] md:w-[30%] lg:w-[18%] flex flex-col items-center text-center group flex-grow transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* High Quality Gradient Icon Orb */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:from-red-500 group-hover:to-brand-red group-hover:border-red-400 group-hover:shadow-[0_0_30px_rgba(238,63,44,0.6)] transition-all duration-300 shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-white font-black text-sm sm:text-base uppercase tracking-wide leading-tight group-hover:text-brand-red transition-colors mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 text-[10px] sm:text-xs font-medium leading-snug group-hover:text-slate-300 transition-colors">
                {service.subtitle}
              </p>
            </a>
          ))}
        </div>

        {/* Explore Button to Close */}
        <div className="mt-10 text-center relative z-10">
          <button 
            onClick={onClose}
            className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs hover:text-white transition-colors border-b border-transparent hover:border-brand-red pb-1 flex items-center gap-2 mx-auto group"
          >
            Explore TyreMall 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-brand-red transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Brands', 'Tyres', 'Services', 'About', 'Contact'];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          
          <div className="flex-shrink-0 cursor-pointer">
            <img 
              src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png" 
              alt="Tyremall Logo" 
              className={`transition-all duration-500 w-auto ${scrolled ? 'h-10 drop-shadow-md' : 'h-12 md:h-14 drop-shadow-[0_8px_20px_rgba(238,63,44,0.2)]'}`} 
            />
          </div>

          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className={`font-semibold transition-colors duration-200 text-xs lg:text-sm uppercase tracking-widest relative group ${scrolled ? 'text-slate-600 hover:text-brand-red' : 'text-gray-200 hover:text-white'}`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:7088977333" className="hidden md:flex items-center gap-2 clip-btn bg-brand-red text-white px-5 py-2.5 font-bold text-xs uppercase tracking-widest shadow-lg shadow-red-500/30">
              <Phone className="w-3.5 h-3.5" /> 70889 77333
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 ${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-3 py-3 text-sm font-bold text-slate-700 hover:text-brand-red border-b border-slate-100 uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="tel:7088977333" className="w-full mt-4 flex items-center justify-center gap-2 clip-btn bg-brand-red text-white px-6 py-4 font-bold uppercase tracking-widest text-sm">
            <Phone className="w-4 h-4" /> Call 70889 77333
          </a>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  const floatingHeadlineStyle = {
    position: 'absolute',
    top: '15%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    zIndex: 20,
    textAlign: 'center',
    padding: '0 20px'
  };

  const heroLogoStyle = {
    height: '160px', 
    width: 'auto',
    margin: '12px auto 0 auto', 
    // Premium backing effect: heavy dark shadow for depth + red glow
    filter: 'drop-shadow(0px 8px 20px rgba(0,0,0,0.95)) drop-shadow(0px 0px 20px rgba(238,63,44,0.7))' 
  };

  return (
    <div id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4" type="video/mp4" />
      </video>

      {/* Floating Headline */}
      <div style={floatingHeadlineStyle} className="animate-on-scroll is-visible delay-100">
        <h2 className="text-brand-red text-xs sm:text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-5 text-shadow-heavy">
          #1 Dehradun Tyre Destination 
        </h2>
        <img 
          src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png" 
          alt="Tyremall" 
          style={heroLogoStyle}
        />
      </div>
    </div>
  );
};

const IntroDestination = () => {
  const [ref, isVisible] = useInView();
  
  const logoStyle = {
    height: '180px', 
    width: 'auto',
    maxWidth: '100%',
    marginBottom: '10px',
    filter: 'drop-shadow(0px 10px 30px rgba(238,63,44,0.15)) drop-shadow(0px 4px 10px rgba(0,0,0,0.05))'
  };

  const taglineStyle = {
    marginTop: '0px', 
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px' 
  };

  return (
    <div id="brands" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Intro Banner */}
        <div ref={ref} className={`text-center max-w-3xl mx-auto animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          
          <img 
            src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png" 
            alt="Tyremall" 
            style={logoStyle}
            className="mx-auto"
          />

          <div style={taglineStyle}>
            <p className="text-slate-500 text-xs sm:text-sm font-bold tracking-[0.4em] uppercase">
             GMS Road • Dehradun • Uttarakhand
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-[1.1] text-center mt-2">
              Where the road <br />
              meets <span className="text-brand-red">Perfection.</span>
            </h2>
          </div>
          
          <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-10 mt-6">
            Authorized dealer of Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, CEAT tyres in Dehradun. Premium tyres for every vehicle — cars, bikes, trucks & commercial vehicles on GMS Road.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="tel:7088977333" className="flex items-center gap-2 clip-btn bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm w-full sm:w-auto justify-center group shadow-lg shadow-red-500/20 pulse-animation">
              <Phone className="w-4 h-4" /> Call 70889 77333
            </a>
            <a href="https://wa.me/917088977333" target="_blank" rel="noreferrer" className="flex items-center gap-2 clip-btn-outline px-8 py-4 font-bold uppercase tracking-widest text-sm w-full sm:w-auto justify-center group hover:bg-[#25D366] hover:text-white hover:border-[#25D366]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-700 uppercase">
            <span className="flex items-center gap-2"><span className="text-brand-red text-lg">●</span> 10+ Brands</span>
            <span className="flex items-center gap-2"><span className="text-brand-red text-lg">●</span> Free Consultation</span>
            <span className="flex items-center gap-2"><span className="text-brand-red text-lg">●</span> 50K+ Sold</span>
            <span className="flex items-center gap-2"><span className="text-brand-red text-lg">●</span> 4.8★ Google</span>
          </div>
        </div>

      </div>
    </div>
  );
};

const BrandsShowcase = ({ onOpenModal }) => {
  const [ref, isVisible] = useInView();

  return (
    <div id="brands" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Authorized Dealer" title="Premium Tyre Brands" />
        <p className="text-slate-600 text-sm md:text-base text-center max-w-3xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
          Buy genuine Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, and CEAT tyres in Dehradun. 
          We stock only 100% genuine tyres from authorized manufacturers — backed by full manufacturer warranty.
        </p>

        {/* Premium Brand Grid - All White Background */}
        <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 w-full animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          {mainBrandLogos.map((brand, idx) => (
            <div 
              key={brand.name} 
              className="group relative bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center hover:shadow-[0_15px_35px_rgba(238,63,44,0.12)] hover:border-brand-red/40 transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[2px] border-l-[2px] border-brand-red rounded-tl-xl transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[2px] border-r-[2px] border-brand-red rounded-tr-xl transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[2px] border-l-[2px] border-brand-red rounded-bl-xl transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[2px] border-r-[2px] border-brand-red rounded-br-xl transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
              
              {/* Logo Container - Fixed Height for Alignment */}
              <div className="h-14 md:h-16 w-full flex items-center justify-center mb-3">
                <img 
                  src={brand.url} 
                  alt={`${brand.name} Tyres Dehradun`}
                  className="max-h-full max-w-[85%] object-contain transition-all duration-500 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
              </div>
              
              {/* Brand Name */}
              <span className="text-slate-700 font-semibold text-xs md:text-sm uppercase tracking-wide text-center group-hover:text-brand-red transition-colors duration-300">
                {brand.name}
              </span>
            </div>
          ))}
          
          {/* More Brands Button */}
          <div 
            onClick={onOpenModal}
            className="group relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-xl shadow-sm border border-slate-700 flex flex-col items-center justify-center hover:shadow-[0_15px_35px_rgba(238,63,44,0.2)] hover:border-brand-red/50 transition-all duration-500 cursor-pointer"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                <Plus className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wider text-center group-hover:text-brand-red transition-colors">
                More Brands
              </h3>
              <p className="text-slate-400 text-[10px] md:text-xs mt-1 text-center">
                +10 Premium Brands
              </p>
            </div>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-4 text-xs md:text-sm font-bold tracking-[0.2em] text-slate-600 uppercase mt-16">
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-brand-red text-lg">●</span> 100% Genuine
          </span>
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-brand-red text-lg">●</span> Manufacturer Warranty
          </span>
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-brand-red text-lg">●</span> Best Price Guarantee
          </span>
          <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
            <span className="text-brand-red text-lg">●</span> Expert Fitting
          </span>
        </div>
      </div>
    </div>
  );
}

const TyreRange = () => {
  const categories = [
    { title: 'Car Tyres', desc: 'Sedan, SUV & hatchback from all top brands.', icon: <Car className="w-6 h-6" /> },
    { title: 'Two-Wheeler', desc: 'High-grip tyres for bikes & scooters.', icon: <Bike className="w-6 h-6" /> },
    { title: 'Truck & Bus', desc: 'Heavy-duty tyres for highways & terrain.', icon: <Truck className="w-6 h-6" /> },
    { title: 'Commercial', desc: 'LCV tyres for tempos, vans & pickups.', icon: <Bus className="w-6 h-6" /> },
  ];

  return (
    <div id="tyres" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Our Range" title="Tyres for every vehicle" />
        <p className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
          Whatever you drive, we have the perfect tyre — expertly fitted and competitively priced.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <CornerCard key={cat.title} className="flex flex-col text-left group hover:bg-slate-50" delay={`delay-${idx * 100}`}>
              <div className="w-14 h-14 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-brand-red mb-12 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="text-slate-900 font-bold text-xl uppercase tracking-tight mb-2">{cat.title}</h3>
              <p className="text-slate-500 text-sm">{cat.desc}</p>
            </CornerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpertServices = () => {
  const services = [
    { title: 'Tyre Fitting', desc: 'Professional mounting & balancing.', icon: <Wrench className="w-6 h-6" /> },
    { title: 'Wheel Alignment', desc: 'Computerized 3D alignment.', icon: <Crosshair className="w-6 h-6" /> },
    { title: 'Nitrogen Filling', desc: 'Pressure monitoring & filling.', icon: <Gauge className="w-6 h-6" /> },
    { title: 'Puncture Repair', desc: 'Quick industry-grade repair.', icon: <ShieldCheck className="w-6 h-6" /> },
    { title: 'Wheel Balancing', desc: 'Eliminate vibrations & wear.', icon: <Settings2 className="w-6 h-6" /> },
    { title: 'Tyre Rotation', desc: 'Even tread wear all around.', icon: <RefreshCw className="w-6 h-6" /> },
  ];

  return (
    <div id="services" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="What We Offer" title="Expert Tyre Services" />
        <p className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
          From fitting to alignment — our trained technicians handle it all with precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <CornerCard key={svc.title} className="flex flex-col items-center text-center group bg-white" delay={`delay-${(idx % 3) * 100}`}>
              <div className="absolute top-6 left-6 text-slate-300 group-hover:text-brand-red transition-colors duration-300">
                {svc.icon}
              </div>
              <div className="pt-8 w-full">
                <h3 className="text-slate-900 font-bold text-lg uppercase tracking-wider mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm">{svc.desc}</p>
              </div>
            </CornerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

const WhyUs = () => {
  const stats = [
    { title: '10+', subtitle: 'Years' },
    { title: '50K+', subtitle: 'Tyres Sold' },
    { title: '10+', subtitle: 'Brands' },
    { title: '4.8', subtitle: 'Google Rating' },
  ];

  const points = [
    'Authorized Bridgestone, Continental, Yokohama dealer',
    'Genuine Goodyear, JK Tyre, Apollo, CEAT products',
    'Competitive pricing with manufacturer warranty',
    'Expert technicians, modern 3D alignment equipment',
    'GMS Road location — easy access in Dehradun',
    'Free tyre consultation & after-sales support'
  ];

  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Authorized Dealer" title="Genuine Bridgestone, Continental & More" />
        <p className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
          Tyremall is an authorized dealer for Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, and CEAT tyres in Dehradun. Located on GMS Road near Chung Gas Agency, Niranjanpur — serving Uttarakhand for over a decade.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, idx) => (
            <CornerCard key={idx} className="text-center py-10 bg-slate-50" delay={`delay-${idx * 100}`}>
              {stat.title === '4.8' && (
                <div className="flex justify-center gap-1 text-brand-red mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              )}
              <h3 className="text-slate-900 font-black text-5xl md:text-6xl tracking-tighter mb-3">{stat.title}</h3>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">{stat.subtitle}</p>
            </CornerCard>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 max-w-5xl mx-auto mb-16">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3 animate-on-scroll is-visible">
              <div className="mt-1 w-5 h-5 rounded-full bg-red-50 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3 h-3 text-brand-red" />
              </div>
              <p className="text-slate-700 font-medium text-sm leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-on-scroll is-visible">
          <a href="tel:7088977333" className="inline-flex items-center gap-2 clip-btn bg-brand-red text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-900 transition-colors duration-300 shadow-lg shadow-red-500/20 pulse-animation">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [ref, isVisible] = useInView();

  return (
    <div id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div ref={ref} className={`animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-6">
              BUY BRIDGESTONE, CONTINENTAL TYRES
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-10 max-w-md">
              Visit Tyremall on ITI Road, Niranjanpur, Dehradun (Near Reliance Market & V-Mart Majra) for genuine Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, and CEAT tyres. Free tyre inspection, expert advice, and best prices guaranteed. No appointment needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="tel:7088977333" className="flex items-center justify-center gap-2 clip-btn bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest text-xs shadow-md shadow-red-500/20">
                <Phone className="w-4 h-4" /> Call 70889 77333
              </a>
              <a href="https://wa.me/917088977333" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 clip-btn-outline px-8 py-4 font-bold uppercase tracking-widest text-xs hover:border-[#25D366] hover:text-[#25D366]">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </a>
            </div>

            <div className="flex items-center gap-3 mb-10 text-sm text-slate-600 font-medium">
              <div className="flex gap-1 text-brand-red">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>4.8 on Google • 500+ reviews</span>
            </div>

            <CornerCard className="bg-white p-6 max-w-md shadow-sm">
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2"><Mail className="w-4 h-4" /> Email</span>
                <a href="mailto:sales@tyremall.net" className="text-brand-red hover:underline font-bold text-sm">sales@tyremall.net</a>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-slate-100">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Mon - Sat</span>
                <span className="text-slate-900 font-bold text-sm">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Sunday</span>
                <span className="text-slate-900 font-bold text-sm">10:00 AM – 6:00 PM</span>
              </div>
            </CornerCard>
          </div>

          {/* Map Frame */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden border border-slate-200 shadow-md animate-on-scroll is-visible delay-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.939!2d77.9942!3d30.3011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b5c8a5d5c3b%3A0x8f0c0e7d8b9a3f2d!2sTyremall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Tyremall Dehradun - ITI Road, Niranjanpur, Near Reliance Market - Buy Bridgestone, Continental, Yokohama, Goodyear Tyres"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <img 
            src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png" 
            alt="Tyremall" 
            className="h-14 w-auto opacity-90 transition-all duration-300 drop-shadow-[0_0_15px_rgba(238,63,44,0.3)] hover:opacity-100"
          />
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            <a href="#home" className="hover:text-brand-red transition-colors">Home</a>
            <a href="#brands" className="hover:text-brand-red transition-colors">Brands</a>
            <a href="#tyres" className="hover:text-brand-red transition-colors">Tyres</a>
            <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
            <a href="#contact" className="hover:text-brand-red transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Tyremall Dehradun. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Floating Call Now Banner (Static Left) ---
const StaticCallBanner = () => (
  <a 
    href="tel:7088977333" 
    className="fixed bottom-6 left-6 z-[100] clip-btn bg-brand-red text-white px-5 py-4 font-bold text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(238,63,44,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(238,63,44,0.6)] transition-all duration-300 flex items-center justify-center gap-2 pulse-animation"
    aria-label="Call Now"
  >
    <Phone className="w-5 h-5 fill-current" /> Call Now
  </a>
);

// --- Floating WhatsApp CTA (Static Right) ---
const FloatingWhatsApp = () => (
  <a 
    href="https://wa.me/917088977333" 
    target="_blank" 
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:-translate-y-1 hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
  </a>
);

// --- Main App Component ---

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showBrandsModal, setShowBrandsModal] = useState(false);

  useEffect(() => {
    // 1. Loader Logic
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // 2. Futuristic Banner Logic (exactly 10 seconds from load)
    const bannerTimer = setTimeout(() => {
      setShowBanner(true);
    }, 10000);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(bannerTimer);
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <Loader isLoading={isLoading} />
      
      {/* 10s Premium Conversion Popup */}
      <ConversionBanner isVisible={showBanner} onClose={() => setShowBanner(false)} />
      
      {/* Premium Brands Modal */}
      <MoreBrandsModal isOpen={showBrandsModal} onClose={() => setShowBrandsModal(false)} />
      
      <div className="bg-slate-50 min-h-screen font-sans selection:bg-brand-red selection:text-white">
        <Header />
        <main>
          <Hero />
          <IntroDestination />
          <BrandsShowcase onOpenModal={() => setShowBrandsModal(true)} />
          <TyreRange />
          <ExpertServices />
          <WhyUs />
          <ContactSection />
        </main>
        <Footer />
        <StaticCallBanner />
        <FloatingWhatsApp />
      </div>
    </>
  );
}