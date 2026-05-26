import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-950 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Logo */}
                    <Link to="/">
                        <img
                            src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png"
                            alt="Tyremall"
                            className="h-14 w-auto opacity-90 transition-all duration-300 drop-shadow-[0_0_15px_rgba(238,63,44,0.3)] hover:opacity-100 hover:scale-105"
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