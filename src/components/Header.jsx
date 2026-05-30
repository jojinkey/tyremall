import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 30);

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Brands", path: "/brands" },
        { name: "Tyres", path: "/tyres" },
        { name: "Services", path: "/services" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">

                    <Link to="/" className="flex-shrink-0 group">
                        <div
                            className={`relative flex items-center justify-center rounded-[28px] px-4 py-2 transition-all duration-500 ${scrolled ? "scale-95" : "scale-105"}`}
                        >
                            <div
                                className={`absolute inset-0 rounded-[28px] bg-gradient-to-br from-amber-100/80 via-white/60 to-amber-300/40 blur-3xl ${scrolled ? "opacity-60" : "opacity-90"} transition-opacity duration-500 pointer-events-none`}
                            ></div>
                            <div
                                className={`absolute inset-[3px] rounded-[24px] bg-gradient-to-r from-white/70 via-amber-50/60 to-amber-200/40 ${scrolled ? "shadow-[0_12px_30px_rgba(253,224,71,0.25)]" : "shadow-[0_22px_60px_rgba(253,224,71,0.35)]"} pointer-events-none transition-all duration-500`}
                            ></div>
                            <img
                                src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png"
                                alt="Tyremall Logo"
                                className={`relative z-10 w-auto transition-all duration-500 ${scrolled
                                    ? "h-12 md:h-14 drop-shadow-[0_0_28px_rgba(253,224,71,0.65)]"
                                    : "h-16 md:h-20 drop-shadow-[0_0_48px_rgba(253,224,71,0.75)]"
                                }`}
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8 lg:space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-semibold transition-colors duration-200 text-xs lg:text-sm uppercase tracking-widest relative group ${scrolled
                                        ? "text-slate-600 hover:text-red-500"
                                        : "text-gray-200 hover:text-white"
                                    }`}
                            >
                                {link.name}

                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="tel:7088977333"
                            className="hidden md:flex items-center gap-2 bg-red-500 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            70889 77333
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden p-2 ${scrolled ? "text-slate-900" : "text-white"
                                }`}
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[400px]" : "max-h-0"
                    }`}
            >
                <div className="px-4 py-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-3 text-sm font-bold text-slate-700 hover:text-red-500 border-b border-slate-100 uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a
                        href="tel:7088977333"
                        className="w-full mt-4 flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-sm"
                    >
                        <Phone className="w-4 h-4" />
                        Call 70889 77333
                    </a>
                </div>
            </div>
        </header>
    );
}