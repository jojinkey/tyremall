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

                    <Link to="/" className="flex-shrink-0">
                        <img
                            src="https://file.garden/aaq7u9giWjY0-o-W/Tyre%20Mall/TyreMall%20logo.png"
                            alt="Tyremall Logo"
                            className={`transition-all duration-500 w-auto ${scrolled
                                    ? "h-10 drop-shadow-md"
                                    : "h-12 md:h-14 drop-shadow-[0_8px_20px_rgba(238,63,44,0.2)]"
                                }`}
                        />
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