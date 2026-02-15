import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from 'react';
import { 
  Check, ChevronRight, MessageSquare, Users, Zap, 
  ShieldCheck, Globe, ArrowRight, X, Instagram, LayoutDashboard, 
  Settings, TrendingUp, Lock, CheckCircle, AlertCircle, Clock,
  GripVertical, Plus, User, Unlock, FileText, Database, Code,
  Trash2, Key, Terminal, Sun, Moon, Sparkles, Briefcase, Menu,
  BarChart3, MoreHorizontal, Search, Paperclip, Send, MousePointerClick,
  ArrowLeftRight, ChevronsDown
} from 'lucide-react';

// --- Experience Context ---
const ExperienceContext = createContext({
  mode: 'business', // 'business' | 'influencer'
  setMode: () => {}
});

const useExperience = () => useContext(ExperienceContext);

// --- Shared Components ---

const IG_GRADIENT_TEXT = "bg-clip-text text-transparent bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]";
const BRAND_GRADIENT_BG = "bg-gradient-to-r from-[#A855F7] via-[#EC4899] to-[#F97316]";

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon: Icon,
  disabled = false
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: `${BRAND_GRADIENT_BG} text-white hover:shadow-lg hover:shadow-purple-500/30 border border-transparent font-bold tracking-wide`,
    ig: "bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] border border-[var(--border-subtle)] shadow-sm font-semibold",
    secondary: "bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 font-semibold",
    outline: "border border-[var(--border-subtle)] text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] font-medium",
    ghost: "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-subtle)] font-medium",
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

const Section = ({ children, className = '', id = '' }) => (
  <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ children, className = '', hover = true }) => (
  <div className={`bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-8 shadow-[var(--shadow-card)] backdrop-blur-xl ${hover ? 'hover:shadow-lg hover:border-purple-500/30 transition-all duration-500' : ''} ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = '' }) => (
  <span className={`px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase border border-purple-500/20 mb-6 inline-block backdrop-blur-sm ${className}`}>
    {children}
  </span>
);

const ConstructionIcon = () => (
  <div className="flex flex-col items-center justify-center p-12 opacity-50">
     <div className="w-16 h-16 border-2 border-dashed border-[var(--border-subtle)] rounded-full flex items-center justify-center mb-4">
        <Settings className="animate-spin-slow text-[var(--text-secondary)]" />
     </div>
     <p className="text-sm text-[var(--text-secondary)]">Module under maintenance</p>
  </div>
);

// --- Visual Effects ---

const AmbientBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#05010d]">
    {/* Deep Violet Base - Top Left */}
    <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-[#833AB4] rounded-full opacity-20 blur-[150px] animate-blob" />
    
    {/* Warm Orange/Red - Middle Right */}
    <div className="absolute top-[30%] right-[-20%] w-[800px] h-[800px] bg-[#FCAF45] rounded-full opacity-10 blur-[150px] animate-blob animation-delay-2000" />
    
    {/* Pink/Red Accent - Bottom Left */}
    <div className="absolute bottom-[-20%] left-[10%] w-[800px] h-[800px] bg-[#FD1D1D] rounded-full opacity-15 blur-[150px] animate-blob animation-delay-4000" />
    
    {/* Noise Texture for Grit */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-25 brightness-100 contrast-150 mix-blend-overlay" />
    
    {/* Vignette to focus center */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,1,13,0.6)_100%)]" />
  </div>
);

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50; 
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 2,
        alpha: Math.random() * 0.5 + 0.2 
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${p.alpha})`; 
        ctx.fill();
        
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.1 * (1 - dist/100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
      requestAnimationFrame(animate);
    };
    
    animate();
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-70" />;
};

// --- Custom Styles Injection ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');
    
    :root {
      /* Default to Business */
      --bg-primary: #F8FAFC;
      --bg-surface: #FFFFFF;
      --bg-subtle: #F1F5F9;
      --text-primary: #1A1A1A;
      --text-secondary: #64748B;
      --border-subtle: #E2E8F0;
      --nav-bg: rgba(255, 255, 255, 0.85);
      --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      --glow-opacity: 0.08;
    }

    .experience-business {
      --bg-primary: #F8FAFC;
      --bg-surface: #FFFFFF;
      --bg-subtle: #F1F5F9;
      --text-primary: #0F172A;
      --text-secondary: #64748B;
      --border-subtle: #E2E8F0;
      --nav-bg: rgba(255, 255, 255, 0.85);
      --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
      --glow-opacity: 0.15;
    }

    .experience-influencer {
      --bg-primary: transparent; /* Changed to transparent to let AmbientBackground show */
      --bg-surface: rgba(255, 255, 255, 0.03);
      --bg-subtle: rgba(255, 255, 255, 0.08);
      --text-primary: #FFFFFF;
      --text-secondary: #E2E8F0; 
      --border-subtle: rgba(255, 255, 255, 0.15);
      --nav-bg: rgba(5, 1, 13, 0.7);
      --shadow-card: 0 8px 32px rgba(0, 0, 0, 0.6);
      --glow-opacity: 0.6; 
    }

    body { 
      font-family: 'Plus Jakarta Sans', sans-serif; 
      background-color: var(--bg-primary); 
      color: var(--text-primary); 
      transition: background-color 0.7s cubic-bezier(0.4, 0, 0.2, 1), color 0.7s cubic-bezier(0.4, 0, 0.2, 1); 
    }
    
    .font-mono { font-family: 'Space Mono', monospace; }
    
    .text-insta {
      background: linear-gradient(45deg, #833AB4, #FD1D1D, #FCAF45);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .text-radiant {
      background: linear-gradient(to right, #A855F7, #EC4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .text-ambient {
      background: linear-gradient(90deg, #FF6B6B 0%, #E1306C 50%, #833AB4 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 0 25px rgba(225, 48, 108, 0.6));
      animation: pulse-ambient 4s infinite alternate;
    }

    @keyframes pulse-ambient {
      0% { filter: drop-shadow(0 0 15px rgba(131, 58, 180, 0.4)); }
      50% { filter: drop-shadow(0 0 35px rgba(253, 29, 29, 0.6)); }
      100% { filter: drop-shadow(0 0 15px rgba(252, 175, 69, 0.4)); }
    }

    .animate-blob { animation: blob 15s infinite alternate; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }

    .glass-nav {
      background: var(--nav-bg);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-subtle);
      transition: background-color 0.5s ease, border-color 0.5s ease;
    }
    
    .experience-influencer h1, .experience-influencer h2, .experience-influencer h3 {
       text-shadow: 0 2px 10px rgba(0,0,0,0.5);
       letter-spacing: -0.02em;
    }
    
    .experience-influencer p {
       font-weight: 500;
       text-shadow: 0 1px 4px rgba(0,0,0,0.5);
    }
  `}</style>
);

// --- Header Component ---
const Header = ({ navigate }) => {
    const { mode, setMode } = useExperience();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMode = () => {
        setMode(prev => prev === 'business' ? 'influencer' : 'business');
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
                {/* Branding */}
                <div className="flex items-center gap-2 cursor-pointer group z-50" onClick={() => navigate('/')}>
                    <div className="w-9 h-9 rounded-lg bg-[#00D775] flex items-center justify-center font-bold text-white shadow-lg shadow-green-500/20 group-hover:scale-105 transition-transform">
                        <Check className="w-5 h-5 stroke-[3px]" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[var(--text-primary)]">InstaAi</span>
                </div>

                {/* Golden Mode Switcher (Centered on Desktop, Relative on Mobile) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 hidden md:block">
                    <button 
                        onClick={toggleMode}
                        className={`relative w-48 h-10 rounded-full flex items-center p-1 transition-all duration-500 shadow-inner ${
                            mode === 'influencer' 
                            ? 'bg-black border border-white/20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)]' 
                            : 'bg-gray-100 border border-gray-300 shadow-[inset_0_2px_5px_rgba(0,0,0,0.05)]'
                        }`}
                    >
                        {/* Moving Golden Thumb */}
                        <div className={`absolute w-24 h-8 rounded-full shadow-lg transition-all duration-500 transform ${
                            mode === 'influencer' 
                            ? 'translate-x-[92px]' 
                            : 'translate-x-0'
                        } flex items-center justify-center bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-500 text-black border border-yellow-300/50`}>
                            <span className="text-xs font-bold uppercase tracking-wider">
                                {mode === 'influencer' ? 'Creator' : 'Business'}
                            </span>
                        </div>

                        {/* Background Labels */}
                        <div className="flex w-full justify-between px-4 text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300">
                            <span className={`${mode === 'influencer' ? 'text-gray-500' : 'opacity-0'} flex items-center gap-1 transition-opacity`}><Briefcase size={10} /> Biz</span>
                            <span className={`${mode === 'business' ? 'text-gray-400' : 'opacity-0'} flex items-center gap-1 transition-opacity`}>Pro <Sparkles size={10} /></span>
                        </div>
                    </button>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center z-50">
                    <button onClick={() => navigate('/')} className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Home</button>
                    <button onClick={() => navigate('/product')} className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Product</button>
                    <button onClick={() => navigate('/demo')} className="bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 border border-white/10">
                        Get Demo
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden text-[var(--text-primary)] flex items-center gap-4 z-50">
                    {/* Mobile Toggle (Mini) */}
                    <button onClick={toggleMode} className="p-2 rounded-full bg-gradient-to-r from-amber-200 to-yellow-500 text-black shadow-lg">
                       {mode === 'influencer' ? <Sparkles size={16}/> : <Briefcase size={16}/>}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                       {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
               <div className="absolute top-20 left-0 w-full bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-10 z-30 md:hidden">
                  <button onClick={() => {navigate('/'); setIsMenuOpen(false)}} className="text-lg font-bold text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]">Home</button>
                  <button onClick={() => {navigate('/product'); setIsMenuOpen(false)}} className="text-lg font-bold text-[var(--text-primary)] py-2 border-b border-[var(--border-subtle)]">Product</button>
                  <button onClick={() => {navigate('/demo'); setIsMenuOpen(false)}} className="text-lg font-bold text-purple-600 py-2">Get Demo</button>
               </div>
            )}
        </nav>
    );
};

// --- Experience Selector Component ---
const ExperienceSelector = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[10000] bg-[#020105] flex flex-col items-center justify-center p-6 animate-in fade-in duration-700">
      <div className="absolute inset-0 overflow-hidden">
         <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] animate-pulse"></div>
         <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-pink-900/20 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-12 tracking-tight text-center z-10 drop-shadow-2xl">
        Choose your experience
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full z-10">
        {/* Influencer Option */}
        <button 
          onClick={() => onSelect('influencer')}
          className="group relative h-80 rounded-3xl border border-white/10 bg-[#0F0A19] p-8 text-left transition-all duration-500 hover:scale-[1.02] hover:border-purple-500/50 hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)] overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-black to-orange-900/40 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(253,29,29,0.3),transparent_50%)]" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 ring-1 ring-white/10">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Influencer</h2>
            <p className="text-gray-300 font-medium mb-8">Dark, immersive, Instagram-native.</p>
            <div className="mt-auto flex items-center gap-2 text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
              Enter Mode <ArrowRight size={16} />
            </div>
          </div>
        </button>

        {/* Business Option */}
        <button 
          onClick={() => onSelect('business')}
          className="group relative h-80 rounded-3xl border border-gray-200 bg-white p-8 text-left transition-all duration-500 hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 shadow-lg ring-1 ring-black/5">
              <Briefcase className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-black mb-2">Business</h2>
            <p className="text-gray-600 font-medium mb-8">Clean, bright, enterprise-ready.</p>
            <div className="mt-auto flex items-center gap-2 text-black font-bold group-hover:translate-x-2 transition-transform">
              Enter Mode <ArrowRight size={16} />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

// --- Preloader ---
const Preloader = ({ onComplete }) => {
  const [opacity, setOpacity] = useState(1);
  const { mode } = useExperience();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(onComplete, 800);
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-800 ${mode === 'influencer' ? 'bg-[#020202]' : 'bg-white'}`}
      style={{ opacity, pointerEvents: opacity === 0 ? 'none' : 'auto' }}
    >
      <div className="relative">
        <div className={`w-20 h-20 border-2 rounded-full animate-spin ${mode === 'influencer' ? 'border-white/10 border-t-[#00D775]' : 'border-black/10 border-t-[#00D775]'}`}></div>
        <div className={`absolute inset-0 flex items-center justify-center font-extrabold tracking-tighter text-xl animate-pulse ${mode === 'influencer' ? 'text-white' : 'text-black'}`}>IA</div>
      </div>
    </div>
  );
};

// --- Home Component ---

const Home = ({ navigate }) => {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [revenue, setRevenue] = useState(12450);
  const [currency, setCurrency] = useState('$');
  const { mode } = useExperience();
  
  // Dynamic Animation State for "Control Restored"
  const [systemText, setSystemText] = useState("System Active");
  
  // Cycle system text when in view
  useEffect(() => {
     if (progress >= 0.85) {
        const texts = ["System Active", "Leads Captured", "Engaging Clients", "Comments Engaged"];
        let i = 0;
        const interval = setInterval(() => {
           i = (i + 1) % texts.length;
           setSystemText(texts[i]);
        }, 2000);
        return () => clearInterval(interval);
     }
  }, [progress]);

  useEffect(() => {
    if (progress > 0.35 && progress < 0.5) {
      const interval = setInterval(() => {
        setCurrency(prev => {
           if(prev === '$') return '₹';
           if(prev === '₹') return '€';
           if(prev === '€') return '£';
           return '$';
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [progress]);

  useEffect(() => {
    if (progress > 0.4 && progress < 0.5) {
      setRevenue(Math.max(8200, revenue - 150));
    } else if (progress < 0.35) {
      setRevenue(12450);
    }
  }, [progress, revenue]);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const rect = scrollRef.current.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const totalHeight = rect.height - viewHeight;
      const currentPos = -rect.top;
      
      let p = Math.max(0, Math.min(1, currentPos / totalHeight));
      setProgress(p);

      if (p < 0.15) setActiveStep(1); 
      else if (p < 0.35) setActiveStep(2); 
      else if (p < 0.50) setActiveStep(3); 
      else if (p < 0.65) setActiveStep(4); 
      else if (p < 0.85) setActiveStep(5); 
      else setActiveStep(6); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bubbles = useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    text: ["Price?", "Collab?", "Shipping?", "Available?", "Hey!", "Size?", "Help?", "Order?", "Discount?", "Details?"][i % 10],
    x: Math.random() * 90,
    y: Math.random() * 80 + 10,
    initials: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26))
  })), []);

  return (
    <div className="relative transition-all duration-700">
      {/* Side Progress */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden md:flex flex-col items-center gap-1 h-[50vh]">
        {[
          { id: 1, label: 'Start' },
          { id: 2, label: 'Chaos' },
          { id: 3, label: 'Leak' },
          { id: 4, label: 'Solution' },
          { id: 5, label: 'Growth' },
          { id: 6, label: 'Demo' }
        ].map((step, idx, arr) => (
          <div key={step.id} className="relative flex flex-col items-center flex-grow group cursor-pointer">
             <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeStep >= step.id ? 'bg-[#00D775] scale-125 shadow-[0_0_10px_rgba(0,215,117,0.4)]' : 'bg-[var(--border-subtle)]'}`} />
             <span className={`absolute right-6 top-1/2 -translate-y-1/2 text-xs font-bold whitespace-nowrap transition-all duration-300 ${activeStep === step.id ? 'opacity-100 translate-x-0 text-[var(--text-primary)]' : 'opacity-0 translate-x-2 text-[var(--text-secondary)]'}`}>
               {step.label}
             </span>
             {idx < arr.length - 1 && <div className="w-[2px] flex-grow bg-[var(--border-subtle)] my-1" />}
          </div>
        ))}
      </aside>

      {/* Phase 1: Hero */}
      <section className={`h-screen w-full flex flex-col items-center justify-center relative overflow-hidden z-10 transition-colors duration-700`}>
         {mode === 'influencer' ? (
             <ParticleBackground />
         ) : (
             <>
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#833AB4]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#FCAF45]/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
                <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]"></div>
             </>
         )}
         
         <div className="z-10 text-center max-w-5xl px-6 pt-12 relative">
            <Badge className={mode === 'influencer' ? 'bg-white/10 text-white border-white/20' : ''}>InstaAi IG Demo</Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 text-[var(--text-primary)] animate-in fade-in zoom-in duration-1000 drop-shadow-xl transition-colors">
               Turn DMs into Revenue.
               <br />
               <span className="text-ambient block mt-2">Automatically.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium tracking-wide max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed transition-colors">
               The enterprise-grade layer for Instagram. Unify inboxes, automate replies, and track conversion attribution without lifting a finger.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
               <button onClick={() => navigate('/demo')} className="bg-gradient-to-r from-[#A855F7] to-[#F97316] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-purple-500/40 transition-all transform hover:scale-105 border border-white/10">
                 Try Interactive Demo <ChevronRight className="inline ml-1 stroke-[3px]" size={20} />
               </button>
               <button onClick={() => navigate('/product')} className="px-10 py-4 rounded-full font-semibold text-[var(--text-primary)] border border-[var(--border-subtle)] hover:bg-[var(--bg-surface)] transition-all backdrop-blur-sm">
                 View Features
               </button>
            </div>
         </div>

         {/* Scroll Indicator */}
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}>
            <ChevronsDown size={32} className="text-[var(--text-secondary)]" />
         </div>
      </section>

      {/* Phase 2: Narrative Scroll - IDENTICAL LOGIC, ADAPTED VISUALS */}
      <div ref={scrollRef} className="relative h-[1000vh]">
         {/* Sticky container uses transparent bg in Influencer mode to let AmbientBackground show through */}
         <div className={`sticky top-0 h-screen w-full overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-700 ${mode === 'influencer' ? 'bg-transparent' : 'bg-[var(--bg-primary)]'}`}>
            
            {/* Visual overlay for scroll progress */}
            <div 
              className={`absolute inset-0 transition-all duration-1000`}
              style={{ 
                 background: mode === 'influencer' 
                    ? `radial-gradient(circle at 70% 30%, rgba(253,29,29,0.1) 0%, transparent 60%), radial-gradient(circle at 30% 70%, rgba(131,58,180,0.1) 0%, transparent 60%)`
                    : `radial-gradient(circle at 70% 30%, rgba(253,29,29,0.05) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(131,58,180,0.05) 0%, transparent 50%)`,
                 opacity: progress > 0.6 ? 1 : 0 
              }} 
            />

            <div className="absolute top-24 md:top-32 w-full text-center z-50 px-4">
               <h2 className="text-3xl md:text-6xl font-extrabold text-[var(--text-primary)] transition-all duration-500 drop-shadow-xl">
                  {progress < 0.15 ? "What Currently Happens." : 
                   progress < 0.25 ? "Responses are missed." :
                   progress < 0.35 ? "Missed Follow-ups." :
                   progress < 0.50 ? "Revenue leaks." :
                   progress < 0.60 ? "InstaAi Steps IN." :
                   progress < 0.75 ? "Conversations get organized." :
                   progress < 0.85 ? "More Leads Generated." :
                   "Control is restored."}
               </h2>
            </div>

            <div className="relative w-full h-full flex items-center justify-center">
               
               {/* Revenue Ticker */}
               <div 
                 className={`absolute font-mono text-5xl md:text-7xl font-bold z-50 flex items-center gap-2 tracking-tighter bg-[var(--bg-surface)] backdrop-blur-xl px-8 py-4 rounded-2xl border border-[var(--border-subtle)] shadow-2xl transition-all duration-500 ${progress >= 0.35 && progress < 0.50 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                 style={{ color: progress > 0.40 ? '#EF4444' : '#9CA3AF' }}
               >
                  <span className="text-purple-500">{currency}</span>
                  {revenue.toLocaleString()}
               </div>

               {/* InstaAi AI Reveal */}
               <div className={`absolute z-40 inset-0 flex items-center justify-center transition-all duration-700 ${progress >= 0.50 && progress < 0.60 ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-150 blur-xl pointer-events-none'}`}>
                  <div className="relative">
                     <div className="w-32 h-32 bg-gradient-to-tr from-[#A855F7] to-[#EC4899] rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.4)] animate-pulse">
                        <Check className="text-white w-16 h-16 stroke-[4px]" />
                     </div>
                     <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 whitespace-nowrap">
                        InstaAi
                     </div>
                  </div>
               </div>

               {/* Scattered Messages - Enhanced contrast for Influencer Mode */}
               <div className="absolute inset-0 w-full h-full pointer-events-none">
                  {bubbles.map((b, i) => {
                     let opacity = 0;
                     let scale = 0.5;
                     let grayscale = 0;
                     let isMissed = false;
                     let isFollowUpMissed = false;

                     if (progress > 0.05 && progress < 0.50) {
                        opacity = 1;
                        scale = 1;
                        if (progress > 0.15) {
                           grayscale = 1;
                           if (i % 3 === 0) isMissed = true; 
                        }
                        if (progress > 0.25) {
                           if (i % 2 === 0) isFollowUpMissed = true;
                        }
                     }
                     
                     if (progress >= 0.50) opacity = 0;
                     if (progress < 0.1 && i > 5) opacity = 0;
                     
                     const bubbleBg = mode === 'influencer' ? 'rgba(20, 10, 30, 0.9)' : '#FFFFFF';
                     const bubbleText = mode === 'influencer' ? '#F3F4F6' : '#1A1A1A';
                     const missedBg = mode === 'influencer' ? '#2D2639' : '#F1F5F9';
                     const missedText = mode === 'influencer' ? '#9CA3AF' : '#94A3B8';
                     const followUpBg = mode === 'influencer' ? 'rgba(127, 29, 29, 0.5)' : '#FEF2F2';
                     // Fix: use border shorthand only
                     const borderColor = isFollowUpMissed ? '#FECACA' : (mode === 'influencer' ? 'rgba(255,255,255,0.1)' : 'transparent');

                     return (
                        <div 
                           key={b.id}
                           className={`absolute rounded-[18px] rounded-bl-sm px-4 py-3 shadow-lg flex items-center gap-3 transition-all duration-1000 backdrop-blur-md`}
                           style={{
                              left: `${b.x}%`,
                              top: `${b.y}%`,
                              opacity,
                              transform: `scale(${scale}) ${isFollowUpMissed ? 'translateY(10px)' : ''}`,
                              filter: `grayscale(${grayscale})`,
                              backgroundColor: isFollowUpMissed ? followUpBg : (isMissed && progress > 0.15 ? missedBg : bubbleBg),
                              color: isFollowUpMissed ? '#EF4444' : (isMissed && progress > 0.15 ? missedText : bubbleText),
                              border: `1px solid ${borderColor}`,
                              boxShadow: mode === 'influencer' ? '0 4px 20px rgba(0,0,0,0.4)' : '0 4px 15px rgba(0,0,0,0.08)'
                           }}
                        >
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${isFollowUpMissed ? 'bg-red-100 text-red-500' : (mode === 'influencer' ? 'bg-white/10 text-white' : 'bg-gradient-to-br from-gray-200 to-gray-300 text-gray-600')}`}>
                              {isFollowUpMissed ? '!' : b.initials}
                           </div>
                           <span className="text-sm font-bold">{b.text}</span>
                        </div>
                     );
                  })}
               </div>

               {/* Organized Flow Layer */}
               <div className={`absolute inset-0 transition-opacity duration-1000 ${progress >= 0.60 && progress < 0.85 ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Scaled wrapper for mobile */}
                  <div className="absolute inset-0 md:scale-100 scale-75 origin-center">
                      <div className={`absolute top-1/2 left-[20%] -translate-y-1/2 bg-[var(--bg-surface)] border border-purple-500/30 rounded-lg px-4 py-2 text-xs font-bold shadow-md flex items-center gap-2 text-[var(--text-primary)] backdrop-blur-md ${mode === 'influencer' ? 'shadow-purple-500/20 ring-1 ring-purple-500/20' : ''}`}>
                         <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div> Trigger: Keyword
                      </div>
                      <div className={`absolute top-1/2 left-[50%] -translate-y-1/2 -translate-x-1/2 bg-[var(--bg-surface)] border border-purple-500/30 rounded-lg px-4 py-2 text-xs font-bold shadow-md flex items-center gap-2 text-[var(--text-primary)] backdrop-blur-md ${mode === 'influencer' ? 'shadow-purple-500/20 ring-1 ring-purple-500/20' : ''}`}>
                         <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div> Check: Sentiment
                      </div>
                      <div className={`absolute top-1/2 left-[80%] -translate-y-1/2 bg-[var(--bg-surface)] border border-purple-500/30 rounded-lg px-4 py-2 text-xs font-bold shadow-md flex items-center gap-2 text-[var(--text-primary)] backdrop-blur-md ${mode === 'influencer' ? 'shadow-purple-500/20 ring-1 ring-purple-500/20' : ''}`}>
                         <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div> Action: DM Offer
                      </div>
                      
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                         <path d="M 28% 50% L 45% 50%" stroke="#A855F7" strokeWidth="2" strokeDasharray="5" className="opacity-40" />
                         <path d="M 55% 50% L 75% 50%" stroke="#A855F7" strokeWidth="2" strokeDasharray="5" className="opacity-40" />
                      </svg>

                      {[
                         { type: 'Lead', sentiment: 'Positive', status: 'Auto-Reply Sent', x: '10%', y: '30%', delay: 0 },
                         { type: 'Sale', sentiment: 'Excited', status: 'Discount Code Sent', x: '65%', y: '45%', delay: 200 },
                         { type: 'Support', sentiment: 'Neutral', status: 'Ticket Created', x: '35%', y: '60%', delay: 400 },
                         { type: 'Lead', sentiment: 'Interested', status: 'Demo Booked', x: '15%', y: '75%', delay: 600, extra: true },
                         { type: 'Sale', sentiment: 'Ready', status: 'Link Clicked', x: '70%', y: '25%', delay: 800, extra: true },
                      ].map((row, i) => (
                         <div 
                            key={i} 
                            className={`absolute bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl w-64 h-16 flex flex-col justify-center px-4 shadow-sm transition-all duration-700 ${(!row.extra || progress > 0.75) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${mode === 'influencer' ? 'shadow-lg shadow-black/40' : ''}`}
                            style={{ left: row.x, top: row.y, transitionDelay: `${row.delay}ms` }}
                         >
                            <div className="flex justify-between items-center mb-1">
                               <div className="flex items-center gap-2">
                                  <div className={`w-2 h-2 rounded-full ${row.type === 'Sale' ? 'bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.6)]' : 'bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]'}`}></div>
                                  <span className="text-[10px] font-bold text-[var(--text-secondary)]">{row.type}</span>
                               </div>
                               <span className="text-[9px] text-green-500 font-mono">{row.sentiment}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[9px] text-[var(--text-secondary)]">
                               <CheckCircle size={10} /> {row.status}
                            </div>
                         </div>
                      ))}
                  </div>
               </div>

               {/* System UI Restore - DYNAMIC ANIMATION */}
               <div 
                  className={`absolute inset-0 bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] shadow-2xl shadow-purple-500/10 max-w-4xl mx-auto h-[60vh] top-[20vh] transition-all duration-1000 ${progress >= 0.85 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
               >
                  <div className="absolute inset-0 bg-yellow-400/5"></div>
                  <div className="h-14 border-b border-[var(--border-subtle)] flex items-center px-6 bg-[var(--bg-surface)] backdrop-blur-sm justify-between relative z-20 rounded-t-2xl">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                     </div>
                     <div className="text-xs font-bold text-purple-600 tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">INSTAAI</div>
                  </div>
                  
                  <div className="flex-1 flex relative z-10 h-full">
                     <div className="w-64 border-r border-[var(--border-subtle)] bg-[var(--bg-subtle)] p-6 space-y-4 hidden md:block rounded-bl-2xl">
                        <div className="h-2 w-20 bg-[var(--border-subtle)] rounded mb-6"></div>
                        <div className="space-y-3">
                           <div className="h-10 w-full bg-[var(--bg-surface)] rounded-lg shadow-sm border border-purple-500/20 flex items-center px-4 gap-3">
                              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                              <div className="h-2 w-16 bg-[var(--border-subtle)] rounded"></div>
                           </div>
                           <div className="h-10 w-full bg-transparent rounded-lg border border-transparent flex items-center px-4 gap-3">
                              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                              <div className="h-2 w-12 bg-[var(--border-subtle)] rounded"></div>
                           </div>
                        </div>
                     </div>
                     
                     <div className="flex-1 relative flex items-center justify-center">
                        <div className="text-center z-10 bg-[var(--bg-surface)] p-8 rounded-2xl shadow-xl backdrop-blur-xl border border-[var(--border-subtle)]">
                           <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-purple-500 to-yellow-400 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30">
                              <Check className="text-white w-8 h-8" />
                           </div>
                           {/* DYNAMIC TEXT ANIMATION */}
                           <div className="text-3xl font-bold text-[var(--text-primary)] mb-1 tracking-tight min-w-[250px] animate-in fade-in slide-in-from-bottom-2 duration-500 key={systemText}">
                              {systemText}
                           </div>
                           <div className="text-xs text-purple-500 font-mono uppercase tracking-widest">OPERATIONAL</div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Phase 3: AHA Moment */}
      <section className="min-h-screen relative z-20 flex flex-col items-center justify-center py-24 overflow-hidden">
         <div className="absolute inset-0 bg-[var(--bg-primary)]/40 backdrop-blur-[2px]"></div>

         <div className="text-center max-w-4xl px-6 mb-32 relative z-10">
            <h2 className="text-4xl md:text-7xl font-extrabold leading-tight mb-8 text-[var(--text-primary)] drop-shadow-xl">
               Instagram provides platofrm. <br />
               <span className="text-[#00D775]">InstaAi</span> brings symphony.
            </h2>
            <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium leading-relaxed">
               This isn’t just an inbox. It’s an operating system.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl px-6 w-full relative z-10">
            {[
               { title: 'Automation', icon: Zap, color: 'text-purple-500', shadow: 'hover:shadow-purple-500/10', desc: 'Calm, rule-based workflows that run 24/7 without human input.' },
               { title: 'More Leads', icon: TrendingUp, color: 'text-pink-500', shadow: 'hover:shadow-pink-500/10', desc: 'Capture every opportunity with instant, intelligent responses.' },
               { title: 'Governance', icon: LayoutDashboard, color: 'text-orange-500', shadow: 'hover:shadow-orange-500/10', desc: 'Strict boundaries, roles, and structure for enterprise teams.' },
            ].map((card, i) => (
               <div key={i} className="text-center group hover:-translate-y-2 transition-transform duration-500">
                  <div className={`h-32 w-32 mx-auto mb-8 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg ${card.shadow} backdrop-blur-md`}>
                     <card.icon size={40} className={card.color} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">{card.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-xs mx-auto font-medium">{card.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Phase 4: CTA - Ambient Gradient in Influencer Mode */}
      <section className={`h-screen relative z-30 flex flex-col items-center justify-center text-center px-6 overflow-hidden transition-all duration-1000 ${mode === 'influencer' ? '' : 'bg-black'}`}>
         
         {/* Influencer Ambient Gradient Layer */}
         {mode === 'influencer' && (
             <div className="absolute inset-0 z-0">
                 {/* Intense Central Gradient */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vh] bg-gradient-to-br from-[#2E0249] via-[#A8185D] to-[#D47C28] opacity-90 blur-[80px]" />
                 {/* Radial Overlay for Vignette */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)]" />
                 {/* Noise */}
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
             </div>
         )}

         <div className="max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-8xl font-extrabold mb-8 text-white tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
               See this in action.
            </h2>
            <p className="text-xl md:text-3xl text-white/90 mb-12 font-medium drop-shadow-md">
               Experience how Instagram engagement becomes predictable revenue.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
               <button onClick={() => navigate('/demo')} className="bg-white text-black px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 w-full md:w-auto shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                  Launch Live Demo
               </button>
               <button onClick={() => navigate('/product')} className="text-white border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-full text-lg font-bold transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2 group backdrop-blur-sm shadow-lg">
                  See how it works <ArrowRight className="group-hover:translate-x-1 transition-transform stroke-[3px]" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
};

// --- Product Page ---
const Product = () => {
    const { mode } = useExperience();
    return (
        <div className="pt-32 min-h-screen relative">
            {mode === 'influencer' && <AmbientBackground />}
            <div className="relative z-10">
                <Section>
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <Badge>The Platform</Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text-primary)] drop-shadow-lg">Built for high-velocity teams.</h1>
                        <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed">Every interaction is an opportunity. InstaAi ensures you never miss one.</p>
                    </div>

                    <div className="space-y-32">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-500 mb-6"><MessageSquare /></div>
                            <h3 className="text-3xl font-bold mb-4 text-[var(--text-primary)]">Omnichannel Inbox</h3>
                            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6 font-medium">
                            Stop toggling accounts. View every DM, Story mention, and comment in a single stream. Assign conversations to support agents or sales reps automatically based on intent.
                            </p>
                            <ul className="space-y-3 text-[var(--text-secondary)] font-medium">
                            <li className="flex items-center gap-2"><Check size={16} className="text-pink-500"/> Real-time sync</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-pink-500"/> Team assignments</li>
                            <li className="flex items-center gap-2"><Check size={16} className="text-pink-500"/> Internal notes & tagging</li>
                            </ul>
                        </div>
                        <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] p-2 aspect-square relative shadow-2xl shadow-purple-500/10 backdrop-blur-md">
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-2xl" />
                            <div className="h-full w-full bg-[var(--bg-subtle)] rounded-xl flex flex-col overflow-hidden">
                                <div className="p-4 border-b border-[var(--border-subtle)] flex gap-2 bg-[var(--bg-surface)]">
                                <div className="w-3 h-3 rounded-full bg-red-500"/>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                                <div className="w-3 h-3 rounded-full bg-green-500"/>
                                </div>
                                <div className="flex-1 p-6 space-y-4">
                                <div className="flex items-end gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zinc-200"/>
                                    <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-3 rounded-2xl rounded-bl-none text-sm text-[var(--text-secondary)] shadow-sm font-medium">Do you ship to Canada?</div>
                                </div>
                                <div className="flex items-end gap-3 flex-row-reverse">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"/>
                                    <div className="bg-purple-600 text-white p-3 rounded-2xl rounded-br-none text-sm shadow-md shadow-purple-200 font-medium">Yes! We ship worldwide via DHL Express.</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

// --- Demo Component ---
const Demo = () => {
  const { mode } = useExperience();
  const [connectionStatus, setConnectionStatus] = useState('idle'); 
  const [activeTab, setActiveTab] = useState('inbound');
  
  const [chatMessages, setChatMessages] = useState([]);
  const chatContainerRef = useRef(null);

  // Scripted Conversation - FAST PACE (2s Interval)
  const script = [
    { role: 'user', text: "Hey, is the floral maxi dress available in Size M?", delay: 500 },
    { role: 'bot', text: "Hi @fashion_ista! 🌸 Yes, Size M is in stock! Here's the direct link to grab it before it's gone: [Link]", delay: 2500 },
    { role: 'system', text: "USER CLICKED LINK BUT DIDN'T PURCHASE (WAIT 2 HOURS)", delay: 4500 },
    { role: 'bot', text: "Still thinking about it? 👀 Here's a 5% discount code just for you: SAVE5. Valid for 1 hour!", delay: 6500 },
    { role: 'user', text: "Oh nice! Thanks, ordering now.", delay: 8500 },
    { role: 'bot', text: "Awesome choice! 🕊️ We'll DM you the tracking info once it ships.", delay: 10500 }
  ];

  useEffect(() => {
    if (connectionStatus === 'connected' && activeTab === 'inbound' && chatMessages.length === 0) {
      let timeouts = [];
      
      script.forEach((msg) => {
        const timeout = setTimeout(() => {
          setChatMessages(prev => [...prev, msg]);
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
          }
        }, msg.delay);
        timeouts.push(timeout);
      });

      return () => timeouts.forEach(clearTimeout);
    }
  }, [connectionStatus, activeTab]);

  // --- Automation Builder Logic ---
  const [steps, setSteps] = useState([
    { id: 1, type: 'condition', params: { condition: 'Contact stopped replying' } },
    { id: 2, type: 'wait', params: { waitDays: 3 } },
    { id: 3, type: 'message', params: { messageText: 'Add to 1st follow-up' } }
  ]);
  const [customizingStep, setCustomizingStep] = useState(null);

  const handleDragStart = (e, type) => e.dataTransfer.setData('stepType', type);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('stepType');
    if (type) {
      setSteps(prev => [...prev, {
        id: Date.now(),
        type,
        params: { waitDays: 1, messageText: 'New Action', condition: 'If...', tag: 'New Tag' }
      }]);
    }
  };
  const deleteStep = (id) => setSteps(prev => prev.filter(s => s.id !== id));
  const updateStepParam = (id, param, value) => {
    setSteps(prev => prev.map(s => s.id === id ? { ...s, params: { ...s.params, [param]: value } } : s));
  };

  const handleConnect = () => {
    setConnectionStatus('loading');
    setTimeout(() => {
      setConnectionStatus('connected');
    }, 2000);
  };

  if (connectionStatus === 'idle') {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center px-4 relative">
        {mode === 'influencer' && <AmbientBackground />}
        <div className="relative z-10 w-full max-w-md">
           <div className={`bg-[var(--bg-surface)] backdrop-blur-xl border border-[var(--border-subtle)] p-1 rounded-3xl shadow-2xl ${mode === 'influencer' ? 'shadow-purple-900/40' : ''}`}>
              <div className="bg-[var(--bg-surface)] rounded-[20px] p-8 text-center border border-[var(--border-subtle)] relative overflow-hidden">
                 <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]`} />
                 
                 <div className="w-20 h-20 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-2xl mx-auto flex items-center justify-center mb-8 shadow-lg shadow-pink-500/20">
                    <Instagram className="text-white w-10 h-10" />
                 </div>
                 
                 <h2 className="text-3xl font-bold mb-3 text-[var(--text-primary)]">Connect Instagram</h2>
                 <p className="text-[var(--text-secondary)] mb-8 text-sm font-medium">
                    Select a mode below. Sandbox uses mock data to simulate live environment.
                 </p>
                 
                 <button 
                    onClick={handleConnect}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg ${BRAND_GRADIENT_BG} text-white`}
                 >
                    Authorize Access
                 </button>
              </div>
           </div>
        </div>
      </div>
    );
  }

  if (connectionStatus === 'loading') {
     return (
        <div className="pt-32 min-h-screen flex items-center justify-center px-4 relative">
           {mode === 'influencer' && <AmbientBackground />}
           <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-6"></div>
              <div className="text-xl font-bold text-[var(--text-primary)] animate-pulse">Establishing Secure Connection...</div>
           </div>
        </div>
     );
  }

  return (
    <div className="pt-24 h-screen flex flex-col bg-[var(--bg-subtle)] relative overflow-hidden">
      {mode === 'influencer' && <AmbientBackground />}
      
      <div className="px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] flex justify-between items-center shadow-sm relative z-20 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="relative">
             <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full p-[2px]">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=AjioBrand" alt="Profile" className="rounded-full bg-white object-cover" />
             </div>
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <div className="text-sm font-bold text-[var(--text-primary)] leading-tight">ajio_life_demo</div>
            <div className="text-[10px] text-green-500 flex items-center gap-1 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"/> Live
            </div>
          </div>
        </div>

        <div className="flex gap-1 bg-[var(--bg-subtle)] p-1 rounded-lg overflow-x-auto border border-[var(--border-subtle)]">
           {['inbound', 'analytics', 'automation', 'outbound'].map((tab) => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab)} 
               className={`px-4 py-2 rounded-md text-xs font-bold transition-all capitalize whitespace-nowrap ${activeTab === tab ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]/50'}`}
             >
               {tab}
             </button>
           ))}
        </div>
        
        <button onClick={() => setConnectionStatus('idle')} className="text-xs font-medium text-red-400 hover:text-red-500 transition-colors">
           Disconnect
        </button>
      </div>

      <div className="flex-1 overflow-hidden flex relative z-10">
        
        {activeTab === 'inbound' && (
           <div className="flex-1 flex h-full">
              <div className="w-80 border-r border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 backdrop-blur-md hidden md:flex flex-col">
                 <div className="p-4 border-b border-[var(--border-subtle)]">
                    <h3 className="font-bold text-[var(--text-primary)] mb-4">Priority Inbox</h3>
                    <div className="relative">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={14} />
                       <input type="text" placeholder="Search..." className="w-full bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-purple-500 text-[var(--text-primary)]" />
                    </div>
                 </div>
                 <div className="flex-1 overflow-y-auto">
                    {[
                       { id: 1, user: 'fashion_ista_99', msg: 'Ordered!', time: 'Just now', active: true, tags: ['Converted', 'SLA < 1h left'] },
                       { id: 2, user: 'dave_runner', msg: 'Size info?', time: '2m ago', active: false, tags: [] },
                       { id: 3, user: 'sarah_j', msg: 'Shipping to NY?', time: '15m ago', active: false, tags: [] },
                    ].map(chat => (
                       <div key={chat.id} className={`p-4 border-b border-[var(--border-subtle)] cursor-pointer hover:bg-[var(--bg-subtle)] transition-colors ${chat.active ? 'bg-[var(--bg-subtle)] border-l-4 border-l-purple-500' : ''}`}>
                          <div className="flex justify-between items-start mb-1">
                             <span className="font-bold text-sm text-[var(--text-primary)]">@{chat.user}</span>
                             <span className="text-[10px] text-[var(--text-secondary)]">{chat.time}</span>
                          </div>
                          <div className="text-xs text-[var(--text-secondary)] mb-2 truncate">{chat.msg}</div>
                          <div className="flex flex-wrap gap-1">
                             {chat.tags.map(tag => (
                                <span key={tag} className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${tag.includes('Converted') ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                   {tag}
                                </span>
                             ))}
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="flex-1 flex flex-col bg-[var(--bg-surface)]/30 backdrop-blur-sm">
                 <div className="flex-1 p-6 overflow-y-auto space-y-6" ref={chatContainerRef}>
                    {chatMessages.map((msg, idx) => (
                       <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                          {msg.role === 'system' ? (
                             <div className="w-full flex justify-center my-4">
                                <div className="bg-[var(--bg-subtle)] border border-[var(--border-subtle)] px-4 py-1 rounded-full text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-wider flex items-center gap-2">
                                   <Clock size={10} /> {msg.text}
                                </div>
                             </div>
                          ) : (
                             <div className={`max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                msg.role === 'user' 
                                   ? 'bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] rounded-tl-none' 
                                   : 'bg-purple-600 text-white rounded-tr-none shadow-purple-500/20'
                             }`}>
                                {msg.text}
                             </div>
                          )}
                       </div>
                    ))}
                 </div>
                 <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/80 backdrop-blur-md">
                    <div className="flex gap-2">
                       <button className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><Paperclip size={20} /></button>
                       <input type="text" placeholder="Type a reply..." className="flex-1 bg-transparent border-none focus:outline-none text-[var(--text-primary)]" />
                       <button className="p-2 text-purple-500 hover:text-purple-400"><Send size={20} /></button>
                    </div>
                 </div>
              </div>

              <div className="w-72 border-l border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 backdrop-blur-md p-6 hidden lg:block">
                 <div className="flex flex-col items-center mb-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 p-1 mb-4">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-full h-full rounded-full bg-white" />
                    </div>
                    <h2 className="text-lg font-bold text-[var(--text-primary)]">Sarah Jenkins</h2>
                    <div className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mt-1">
                       <Instagram size={12} /> 12.4K followers
                    </div>
                 </div>

                 <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-[var(--bg-subtle)] p-3 rounded-xl border border-[var(--border-subtle)] text-center">
                       <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1">Lifetime Value</div>
                       <div className="text-xl font-bold text-green-500">$450</div>
                    </div>
                    <div className="bg-[var(--bg-subtle)] p-3 rounded-xl border border-[var(--border-subtle)] text-center">
                       <div className="text-[10px] text-[var(--text-secondary)] uppercase tracking-wider mb-1">Orders</div>
                       <div className="text-xl font-bold text-[var(--text-primary)]">5</div>
                    </div>
                 </div>

                 <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Assigneeds</h4>
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-[var(--bg-surface)]"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-[var(--bg-surface)] flex items-center justify-center text-[10px] font-bold text-white">+1</div>
                 </div>
              </div>
           </div>
        )}

        {/* ... (Other Tabs remain similar but scaled appropriately) ... */}
        {activeTab === 'automation' && (
           <div className="flex-1 flex bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-95">
             <div className="w-64 border-r border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 hidden md:flex flex-col backdrop-blur-md">
                <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-6">Flow Components</h3>
                <div className="space-y-3">
                   {/* ... components ... */}
                   {[
                     { label: 'Wait Time', type: 'wait', icon: Clock }, 
                     { label: 'Send Message', type: 'message', icon: MessageSquare }, 
                     { label: 'Check Condition', type: 'condition', icon: Zap }, 
                     { label: 'Add Tag', type: 'tag', icon: Plus }
                   ].map(item => (
                      <div key={item.label} className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-4 rounded-xl flex items-center gap-3">
                         <item.icon size={16} className="text-[var(--text-secondary)]" />
                         <span className="text-sm font-bold text-[var(--text-primary)]">{item.label}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="flex-1 p-8 overflow-y-auto flex justify-center relative">
               <div className="flex flex-col items-center space-y-8 max-w-lg w-full pb-20 relative z-10 pt-10">
                  <div className="flex gap-4">
                     <div className="bg-[var(--bg-surface)] px-6 py-3 rounded-full border border-purple-500/50 text-sm font-bold flex items-center gap-2 shadow-lg shadow-purple-500/20 text-[var(--text-primary)] backdrop-blur-md">
                        <Zap size={16} className="text-purple-500 fill-purple-500" /> Start Trigger: "Size M"
                     </div>
                  </div>
                  <div className="w-0.5 h-8 bg-[var(--border-subtle)]"></div>
                  {/* ... simplified render for flow ... */}
                  <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] p-5 rounded-2xl w-full max-w-xs text-center text-sm font-bold text-[var(--text-secondary)]">
                     Flow Visualizer (Desktop Optimized)
                  </div>
               </div>
             </div>
           </div>
        )}
      </div>
    </div>
  );
};

// --- Footer Component ---
const Footer = () => (
   <footer className="py-8 text-center text-[var(--text-secondary)] text-sm font-medium border-t border-[var(--border-subtle)] relative z-10 bg-[var(--bg-surface)]">
      <p>Made by Jalaj Singh; for InstaAi.</p>
   </footer>
);

// --- Business Plan (B2B vs B2C) ---
const BusinessPlan = () => {
    const { mode } = useExperience();
    return (
        <div className="pt-32 min-h-screen relative">
             {mode === 'influencer' && <AmbientBackground />}
            <Section>
                <div className="text-center mb-12 relative z-10">
                <Badge>Investor Relations</Badge>
                <h2 className="text-3xl font-extrabold text-[var(--text-primary)] drop-shadow-lg">Confidential Pitch Deck</h2>
                </div>
                <div className="max-w-md mx-auto bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-10 text-center shadow-xl relative z-10 backdrop-blur-md">
                    <Lock size={48} className="mx-auto text-[var(--text-secondary)] mb-6" />
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">Restricted Access</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-6 font-medium">Please enter the access code provided to you.</p>
                    <button className="w-full bg-black text-white font-bold py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        <Unlock size={16} /> Unlock Deck
                    </button>
                </div>
            </Section>
        </div>
    );
};

// --- Production Integration (NEW) ---
const ProductionIntegration = () => {
    const { mode } = useExperience();
   return (
      <div className="pt-24 min-h-screen px-6 max-w-7xl mx-auto pb-20 relative">
          {mode === 'influencer' && <AmbientBackground />}
         <div className="mb-10 relative z-10">
            <Badge className="bg-blue-50 text-blue-600 border-blue-100">Production (Beta)</Badge>
            <h1 className="text-4xl font-extrabold mb-4 text-[var(--text-primary)] drop-shadow-lg">Production Integration</h1>
            <p className="text-[var(--text-secondary)] max-w-2xl font-medium">
               Connect your real Instagram Professional account. This environment adheres to strict enterprise governance policies.
            </p>
         </div>
         <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            <div className="space-y-6">
               <Card className="bg-white">
                  <h3 className="font-bold mb-6 flex items-center gap-2 text-[var(--text-primary)]">
                     <Instagram size={20} /> Meta Connection
                  </h3>
                  <div className="text-center py-8">
                        <div className="w-16 h-16 bg-[var(--bg-subtle)] rounded-full flex items-center justify-center mx-auto mb-4">
                           <User size={32} className="text-[var(--text-secondary)]" />
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-6 font-medium">Link your professional account to start processing events.</p>
                        <button className="w-full py-3 bg-[#0095f6] hover:bg-[#0085db] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                           <Instagram size={18} /> Connect with Instagram
                        </button>
                  </div>
               </Card>
            </div>
         </div>
      </div>
   );
};

// --- Security Page ---
const SecurityPage = () => {
    const { mode } = useExperience();
    return (
        <div className="pt-32 min-h-screen relative">
            {mode === 'influencer' && <AmbientBackground />}
            <div className="relative z-10">
                <Section>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                    <ShieldCheck size={64} className="mx-auto text-purple-600 mb-6"/>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--text-primary)] drop-shadow-lg">Bank-Grade Security</h1>
                    <p className="text-xl text-[var(--text-secondary)] font-medium leading-relaxed">
                        Trusted by enterprise brands to handle sensitive customer data. We exceed industry standards for compliance and data protection.
                    </p>
                    </div>
                </Section>
            </div>
        </div>
    );
};

const Contact = () => {
    const { mode } = useExperience();
    return (
        <div className="pt-32 min-h-screen relative">
             {mode === 'influencer' && <AmbientBackground />}
            <div className="relative z-10">
                <Section className="max-w-xl mx-auto">
                    <h1 className="text-4xl font-extrabold mb-8 text-center text-[var(--text-primary)] drop-shadow-lg">Get in touch</h1>
                    <form className="space-y-6">
                        <div><label className="block text-sm font-bold mb-2 text-[var(--text-secondary)]">Work Email</label><input required type="email" className="w-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-lg p-3 text-[var(--text-primary)] focus:border-purple-500 focus:outline-none transition-colors font-medium" placeholder="name@company.com" /></div>
                        <Button className="w-full justify-center">Send Request</Button>
                    </form>
                </Section>
            </div>
        </div>
    );
};

// --- Main App Component ---

const App = () => {
  const [route, setRoute] = useState('/');
  const [loading, setLoading] = useState(false); 
  const [mode, setMode] = useState(null); 

  useEffect(() => {
    // Check for saved mode on mount (session storage only)
    const savedMode = sessionStorage.getItem('dt_experience_mode');
    if (savedMode) {
      setMode(savedMode);
      setLoading(true); 
    }
  }, []);

  const handleModeSelect = (selectedMode) => {
    sessionStorage.setItem('dt_experience_mode', selectedMode);
    setMode(selectedMode);
    setLoading(true); 
  };

  const navigate = (path) => {
    window.scrollTo(0, 0);
    setRoute(path);
  };

  // Render Experience Selector if no mode selected
  if (!mode) {
    return <ExperienceSelector onSelect={handleModeSelect} />;
  }

  // Render Preloader if loading
  if (loading) {
    return (
      <ExperienceContext.Provider value={{ mode, setMode }}>
        <Preloader onComplete={() => setLoading(false)} />
      </ExperienceContext.Provider>
    );
  }

  return (
    <ExperienceContext.Provider value={{ mode, setMode }}>
      <div className={`app-root min-h-screen font-sans selection:bg-purple-100 ${mode === 'influencer' ? 'experience-influencer' : 'experience-business'}`}>
        <GlobalStyles />
        
        {/* Global Header persistent across all routes */}
        <Header navigate={navigate} />

        {/* Route Content - Ambient Background for Influencer Mode persisted here */}
        {mode === 'influencer' && <AmbientBackground />}

        <main className="animate-in fade-in duration-1000 relative z-10 flex-col flex min-h-screen">
          <div className="flex-grow">
            {route === '/' && <Home navigate={navigate} />}
            {route === '/product' && <Product />}
            {route === '/demo' && <Demo />}
            {route === '/business-plan' && <BusinessPlan />}
            {route === '/integration' && <ProductionIntegration />}
            {route === '/security' && <SecurityPage />}
            {route === '/contact' && <Contact />}
          </div>
          <Footer />
        </main>
      </div>
    </ExperienceContext.Provider>
  );
};

export default App;