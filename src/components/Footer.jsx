import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-950 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Logo */}
                    <Link to="/" className="group relative flex items-center justify-center">
                        <span className="absolute -inset-5 rounded-[28px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.65),transparent_55%)] blur-2xl opacity-80 transition-opacity duration-500 group-hover:opacity-100"></span>
                        <span className="absolute -inset-3 rounded-[24px] bg-white/10 border border-white/20 shadow-[0_25px_60px_rgba(255,255,255,0.2)] opacity-70 group-hover:opacity-90 transition-opacity duration-500"></span>
                        <img
                            src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png"
                            alt="Tyremall"
                            className="relative h-14 w-auto opacity-95 transition-all duration-300 drop-shadow-[0_0_35px_rgba(255,255,255,0.55)] group-hover:opacity-100 group-hover:scale-105"
                        />
                    </Link>

                    {/* Nav Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">

                        <Link
                            to="/"
                            className="hover:text-red-500 transition-colors"
                        >
                            Home
                        </Link>

                        <Link
                            to="/brands"
                            className="hover:text-red-500 transition-colors"
                        >
                            Brands
                        </Link>

                        <Link
                            to="/tyres"
                            className="hover:text-red-500 transition-colors"
                        >
                            Tyres
                        </Link>

                        <Link
                            to="/services"
                            className="hover:text-red-500 transition-colors"
                        >
                            Services
                        </Link>

                        <Link
                            to="/about"
                            className="hover:text-red-500 transition-colors"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className="hover:text-red-500 transition-colors"
                        >
                            Contact
                        </Link>

                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-slate-500 uppercase tracking-[0.2em]">

                    <p>
                        &copy; {new Date().getFullYear()} Tyremall Dehradun.
                        All rights reserved.
                    </p>

                    <div className="flex gap-6">

                        <a
                            href="#"
                            className="hover:text-red-500 transition-colors"
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="hover:text-red-500 transition-colors"
                        >
                            Terms of Service
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
}