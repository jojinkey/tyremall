import SEO from "../components/SEO";
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { Helmet } from 'react-helmet-async'
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, MapPin, ArrowRight, Check, Star, Plus, Car, Bike, Truck, Wrench, Crosshair, Gauge, ShieldCheck, Settings2, RefreshCw, Navigation, Bus, Mail, Zap } from 'lucide-react';


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
  background: #f8fafc;
  color: #0f172a;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.text-brand-red { color: var(--color-brand-red); }
.bg-brand-red { background-color: var(--color-brand-red); }
.border-brand-red { border-color: var(--color-brand-red); }

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

.bracket-box {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  box-shadow:
    0 4px 12px rgba(15,23,42,0.03),
    0 12px 28px rgba(15,23,42,0.04),
    inset 0 1px 0 rgba(255,255,255,1);
  transition:
    all 0.4s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.4s cubic-bezier(0.16,1,0.3,1),
    border-color 0.35s ease;
  overflow: hidden;
}

.bracket-box::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(ellipse 80% 40% at 50% 0%, rgba(238,63,44,0.04) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: 0;
}
.bracket-box:hover::before { opacity: 1; }

.bracket-box:hover {
  border-color: rgba(238,63,44,0.3);
  transform: translateY(-6px);
  box-shadow:
    0 8px 24px rgba(15,23,42,0.06),
    0 24px 48px rgba(238,63,44,0.12),
    inset 0 1px 0 rgba(255,255,255,1);
  background: linear-gradient(135deg, #ffffff 0%, #fff8f7 100%);
}

.corner-tl, .corner-tr, .corner-bl, .corner-br {
  position: absolute;
  width: 12px;
  height: 12px;
  transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
  z-index: 2;
}
.bracket-box:hover .corner-tl,
.bracket-box:hover .corner-tr,
.bracket-box:hover .corner-bl,
.bracket-box:hover .corner-br {
  width: 20px;
  height: 20px;
}
.corner-tl { top: -1px; left: -1px; border-top: 3px solid var(--color-brand-red); border-left: 3px solid var(--color-brand-red); border-radius: 20px 0 0 0; }
.corner-tr { top: -1px; right: -1px; border-top: 3px solid var(--color-brand-red); border-right: 3px solid var(--color-brand-red); border-radius: 0 20px 0 0; }
.corner-bl { bottom: -1px; left: -1px; border-bottom: 3px solid var(--color-brand-red); border-left: 3px solid var(--color-brand-red); border-radius: 0 0 0 20px; }
.corner-br { bottom: -1px; right: -1px; border-bottom: 3px solid var(--color-brand-red); border-right: 3px solid var(--color-brand-red); border-radius: 0 0 20px 0; }

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

@keyframes futuristic-pop {
  0% { opacity: 0; transform: scale(0.9) translateY(30px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-futuristic-pop {
  animation: futuristic-pop 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.glow-border-hover {
  transition: all 0.4s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.glow-border-hover:hover {
  border-color: var(--color-brand-red);
  box-shadow: 0 0 30px rgba(238, 63, 44, 0.3), inset 0 0 15px rgba(238, 63, 44, 0.15);
  transform: translateY(-8px);
}

/* ============================================
   ENHANCED PREMIUM CARD SYSTEM - HIGHLY POLISHED
   ============================================ */

/* ---- TYPE 1: TYRE RANGE & EXPERT SERVICES CARDS ---- */
.pc {
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, #fafbfc 100%);
  border-radius: 28px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  box-shadow:
    0 4px 6px -1px rgba(15,23,42,0.02),
    0 10px 24px -4px rgba(15,23,42,0.06),
    inset 0 1px 0 rgba(255,255,255,1),
    inset 0 0 20px rgba(255,255,255,0.5);
  transition:
    transform 0.5s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.5s cubic-bezier(0.16,1,0.3,1),
    border-color 0.4s ease,
    background 0.5s ease;
  overflow: hidden;
  z-index: 1;
}

.pc::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,1) 50%, transparent);
  pointer-events: none;
  z-index: 2;
}

.pc::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background: radial-gradient(ellipse 100% 60% at 50% -20%, rgba(238,63,44,0.08) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.5s cubic-bezier(0.16,1,0.3,1);
  pointer-events: none;
  z-index: -1;
}
.pc:hover::after { opacity: 1; }

.pc:hover {
  border-color: rgba(238,63,44,0.4);
  transform: translateY(-8px) scale(1.015);
  box-shadow:
    0 12px 32px -8px rgba(15,23,42,0.1),
    0 24px 64px -12px rgba(238,63,44,0.18),
    0 0 0 1px rgba(238,63,44,0.05),
    inset 0 1px 0 rgba(255,255,255,1),
    inset 0 0 30px rgba(255,255,255,0.8);
  background: linear-gradient(145deg, #ffffff 0%, #fff6f5 100%);
}

.pc:active {
  transform: translateY(-4px) scale(1.005);
}

.pc-icon {
  width: 68px; height: 68px;
  border-radius: 20px;
  background: linear-gradient(135deg, #fff 0%, #fff0ef 100%);
  border: 1px solid rgba(238,63,44,0.15);
  display: flex; align-items: center; justify-content: center;
  color: var(--color-brand-red);
  flex-shrink: 0;
  transition:
    all 0.5s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
  box-shadow: 
    0 8px 24px -6px rgba(238,63,44,0.15),
    inset 0 2px 4px rgba(255,255,255,1),
    inset 0 -2px 4px rgba(0,0,0,0.02);
  position: relative;
  overflow: hidden;
}
.pc-icon::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, transparent, rgba(238,63,44,0.1), transparent);
  animation: rotate 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}
@keyframes rotate { 100% { transform: rotate(360deg); } }

.pc:hover .pc-icon {
  background: linear-gradient(135deg, var(--color-brand-red) 0%, #d63d23 100%);
  border-color: rgba(238,63,44,0.5);
  color: #fff;
  box-shadow: 
    0 16px 40px -8px rgba(238,63,44,0.5),
    inset 0 2px 4px rgba(255,255,255,0.4),
    inset 0 -4px 8px rgba(0,0,0,0.2);
  transform: scale(1.15) rotate(-8deg);
}
.pc:hover .pc-icon::before { opacity: 1; }

/* ---- TYPE 2: STAT CARDS (Large Numbers) ---- */
.pc-stat {
  position: relative;
  background: linear-gradient(160deg, #ffffff 0%, #f4f7fb 100%);
  border-radius: 32px;
  border: 1px solid rgba(255,255,255,0.8);
  box-shadow:
    0 4px 6px -1px rgba(15,23,42,0.02),
    0 12px 32px -4px rgba(15,23,42,0.08),
    inset 0 2px 0 rgba(255,255,255,1),
    inset 0 0 20px rgba(255,255,255,0.6);
  transition:
    transform 0.5s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.5s cubic-bezier(0.16,1,0.3,1),
    border-color 0.4s ease,
    background 0.5s ease;
  overflow: hidden;
}

.pc-stat::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 32px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(238,63,44,0.2) 0%, transparent 50%, rgba(226,232,240,0.8) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.pc-stat::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 32px;
  background: radial-gradient(circle at 50% -20%, rgba(238,63,44,0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.pc-stat:hover::after { opacity: 1; }

.pc-stat:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow:
    0 16px 40px -8px rgba(15,23,42,0.08),
    0 32px 80px -12px rgba(238,63,44,0.2),
    inset 0 2px 0 rgba(255,255,255,1),
    inset 0 0 30px rgba(255,255,255,0.8);
  background: linear-gradient(160deg, #ffffff 0%, #fff2f0 100%);
}

.pc-stat h3 {
  font-weight: 900;
  font-size: 3.8rem;
  line-height: 1;
  letter-spacing: -2px;
  background: linear-gradient(135deg, var(--color-brand-red) 0%, #a82515 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 4px 12px rgba(238,63,44,0.2));
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  position: relative;
  z-index: 2;
}
.pc-stat:hover h3 {
  transform: scale(1.08) translateY(-4px);
  filter: drop-shadow(0 8px 24px rgba(238,63,44,0.35));
}

/* ---- TYPE 3: BRAND LOGO CARDS ---- */
.pc-brand {
  position: relative;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 24px;
  border: 1px solid rgba(226, 232, 240, 0.7);
  box-shadow:
    0 2px 4px -1px rgba(15,23,42,0.02),
    0 8px 20px -4px rgba(15,23,42,0.05),
    inset 0 1px 0 rgba(255,255,255,1);
  transition:
    all 0.4s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.4s cubic-bezier(0.16,1,0.3,1);
  overflow: hidden;
}

.pc-brand::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: radial-gradient(circle at 50% 50%, rgba(238,63,44,0.04) 0%, transparent 80%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}
.pc-brand:hover::after { opacity: 1; }

.pc-brand:hover {
  border-color: rgba(238,63,44,0.3);
  transform: translateY(-8px) scale(1.05);
  box-shadow:
    0 12px 28px -6px rgba(15,23,42,0.08),
    0 24px 56px -8px rgba(238,63,44,0.18),
    inset 0 1px 0 rgba(255,255,255,1);
  background: linear-gradient(135deg, #ffffff 0%, #fff5f4 100%);
}

.pc-brand img {
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  filter: grayscale(20%) brightness(0.95) drop-shadow(0 2px 4px rgba(0,0,0,0.04));
}
.pc-brand:hover img {
  transform: scale(1.2) translateY(-4px);
  filter: grayscale(0%) brightness(1.05) drop-shadow(0 8px 16px rgba(238,63,44,0.2));
}

/* ---- TYPE 4: REVIEW CARDS ---- */
.pc-review {
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, #f9fafb 100%);
  border-radius: 28px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  padding: 36px 32px 32px;
  box-shadow:
    0 4px 6px -1px rgba(15,23,42,0.03),
    0 12px 32px -4px rgba(15,23,42,0.06),
    inset 0 1px 0 rgba(255,255,255,1);
  transition:
    all 0.5s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
  overflow: hidden;
}

.pc-review::after {
  content: '\u201C';
  position: absolute;
  top: -10px; right: 20px;
  font-size: 140px; line-height: 1;
  background: linear-gradient(180deg, rgba(238,63,44,0.15) 0%, rgba(238,63,44,0.02) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: Georgia, serif;
  pointer-events: none;
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
}
.pc-review:hover::after {
  transform: scale(1.15) translateX(10px) rotate(5deg);
  background: linear-gradient(180deg, rgba(238,63,44,0.25) 0%, rgba(238,63,44,0.05) 100%);
  -webkit-background-clip: text;
}

.pc-review:hover {
  border-color: rgba(238,63,44,0.3);
  transform: translateY(-8px);
  box-shadow:
    0 12px 28px -6px rgba(15,23,42,0.08),
    0 24px 64px -8px rgba(238,63,44,0.15),
    inset 0 1px 0 rgba(255,255,255,1);
  background: linear-gradient(145deg, #ffffff 0%, #fff7f6 100%);
}

.pc-review .avatar {
  box-shadow: 
    0 4px 12px rgba(238,63,44,0.2),
    inset 0 2px 4px rgba(255,255,255,0.4);
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  border: 2px solid #fff;
}
.pc-review:hover .avatar {
  transform: scale(1.15) translateY(-2px);
  box-shadow: 
    0 8px 24px rgba(238,63,44,0.4),
    inset 0 2px 4px rgba(255,255,255,0.4);
  border-color: #fff0ef;
}

/* ---- TYPE 5: CONVERSION POPUP SERVICE CARDS ---- */
.conversion-card {
  position: relative;
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 28px 20px;
  transition:
    all 0.5s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
  overflow: hidden;
}

.conversion-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(135deg, rgba(238,63,44,0.4) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.conversion-card:hover::before { opacity: 1; }

.conversion-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: radial-gradient(circle at 50% 20%, rgba(238,63,44,0.15) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.conversion-card:hover::after { opacity: 1; }

.conversion-card:hover {
  background: rgba(30, 41, 59, 0.7);
  transform: translateY(-10px) scale(1.03);
  box-shadow:
    0 16px 40px -10px rgba(0,0,0,0.5),
    0 24px 64px -12px rgba(238,63,44,0.3),
    inset 0 1px 1px rgba(255,255,255,0.15);
}

.conversion-card .icon-orb {
  width: 72px; height: 72px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
  border: 1px solid rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: white;
  margin: 0 auto 20px;
  transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
  box-shadow: 
    0 8px 24px rgba(0,0,0,0.3),
    inset 0 1px 0 rgba(255,255,255,0.1);
  position: relative;
}
.conversion-card:hover .icon-orb {
  background: linear-gradient(135deg, var(--color-brand-red) 0%, #b82515 100%);
  border-color: rgba(255,255,255,0.3);
  transform: scale(1.15) rotate(5deg);
  box-shadow: 
    0 16px 40px -8px rgba(238,63,44,0.6),
    inset 0 2px 4px rgba(255,255,255,0.3),
    inset 0 -4px 8px rgba(0,0,0,0.2);
}

/* ---- TYPE 6: MODAL BRAND CARDS ---- */
.modal-brand-card {
  position: relative;
  background: linear-gradient(145deg, #ffffff 0%, #fafbfc 100%);
  border-radius: 28px;
  border: 1px solid rgba(226, 232, 240, 0.8);
  padding: 32px 24px;
  box-shadow:
    0 4px 6px -1px rgba(15,23,42,0.02),
    0 10px 24px -4px rgba(15,23,42,0.05),
    inset 0 1px 0 rgba(255,255,255,1);
  transition:
    all 0.5s cubic-bezier(0.16,1,0.3,1),
    box-shadow 0.5s cubic-bezier(0.16,1,0.3,1);
  overflow: hidden;
  cursor: pointer;
}

.modal-brand-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 28px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(238,63,44,0.2) 0%, transparent 50%, transparent 100%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.modal-brand-card:hover::before { opacity: 1; }

.modal-brand-card:hover {
  border-color: transparent;
  transform: translateY(-8px) scale(1.04);
  box-shadow:
    0 12px 28px -6px rgba(15,23,42,0.08),
    0 24px 64px -8px rgba(238,63,44,0.18),
    inset 0 1px 0 rgba(255,255,255,1);
  background: linear-gradient(145deg, #ffffff 0%, #fff5f4 100%);
}

.modal-brand-card:active {
  transform: translateY(-4px) scale(1.02);
}

/* ---- ENHANCED TEXT STYLES FOR CARDS ---- */
.card-title {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0px;
  color: #0f172a;
  transition: all 0.3s ease;
}
.pc:hover .card-title,
.pc-brand:hover .card-title,
.pc-review:hover .card-title {
  color: var(--color-brand-red);
}

.card-subtitle {
  font-size: 0.95rem;
  font-weight: 500;
  color: #64748b;
  transition: color 0.3s ease;
}
.pc:hover .card-subtitle,
.pc-brand:hover .card-subtitle {
  color: #475569;
}

/* ---- SMOOTH ENTRANCE ANIMATIONS FOR CARDS ---- */
@keyframes card-pop-in {
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.card-pop-in {
  animation: card-pop-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.card-pop-in-delay-1 { animation-delay: 50ms; }
.card-pop-in-delay-2 { animation-delay: 100ms; }
.card-pop-in-delay-3 { animation-delay: 150ms; }
.card-pop-in-delay-4 { animation-delay: 200ms; }
.card-pop-in-delay-5 { animation-delay: 250ms; }
.card-pop-in-delay-6 { animation-delay: 300ms; }

/* ============================================
   MODAL ANIMATIONS & STYLES
   ============================================ */
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

@keyframes modal-pop {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-modal-pop {
  animation: modal-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes image-zoom {
@keyframes marquee-roll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  animation: marquee-roll 36s linear infinite;
}
.marquee-track:hover { animation-play-state: paused; }

/* Dynamic Red Scroll Overlay */
.dynamic-scroll-overlay {
  position: fixed;
  inset: 0;
  z-index: 40; /* Sits over content but under the header */
  pointer-events: none;
  background: radial-gradient(circle at 50% calc(var(--scroll-red-intensity, 0) * 100%), var(--color-brand-red) 0%, transparent 90%);
  opacity: calc(var(--scroll-red-intensity, 0) * 0.18);
  mix-blend-mode: multiply;
  will-change: opacity;
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

// --- Card Modal Component ---
const CardModal = ({ isOpen, cardData, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  if (!isOpen || !cardData) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Blur & Dim Background */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-lg transition-opacity duration-300 animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[32px] shadow-[0_30px_120px_rgba(0,0,0,0.5)] overflow-hidden animate-modal-pop z-10"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-brand-red hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl group"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content */}
        <div className="overflow-y-auto max-h-[90vh]">
          {/* Image Section */}
          {cardData.image && (
            <div className="relative h-80 sm:h-96 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center overflow-hidden">
              {typeof cardData.image === 'string' && cardData.image.match(/^[^h]/) ? (
                // Emoji
                <div className="text-9xl animate-image-zoom">{cardData.image}</div>
              ) : (
                // Image URL
                <img
                  src={cardData.image}
                  alt={cardData.title}
                  className="w-full h-full object-contain p-8 sm:p-12 animate-image-zoom"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none"></div>
            </div>
          )}

          {/* Info Section */}
          <div className="p-8 sm:p-10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="text-brand-red text-xs font-bold tracking-[0.35em] uppercase mb-3">
                  {cardData.category || 'Premium Brand'}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">
                  {cardData.title}
                </h2>
              </div>
              {cardData.rating && (
                <div className="flex gap-1 text-amber-400 flex-shrink-0">
                  {[...Array(cardData.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              )}
            </div>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-medium">
              {cardData.description}
            </p>

            {/* Additional Info */}
            {cardData.specs && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 pb-10 border-b border-slate-200">
                {cardData.specs.map((spec, idx) => (
                  <div key={idx} className="pc p-4 text-center">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wide mb-2">
                      {spec.label}
                    </p>
                    <p className="text-slate-900 font-black text-lg">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:7088977333"
                className="flex-1 flex items-center justify-center gap-2 clip-btn bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm shadow-lg shadow-red-500/30 hover:shadow-lg hover:shadow-red-500/50 group transition-all"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://wa.me/917088977333"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 clip-btn-outline px-8 py-4 font-bold uppercase tracking-widest text-sm group hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
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
  const [selectedCard, setSelectedCard] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedCard({
      title: brand.name,
      category: 'Authorized Dealer',
      image: brand.url,
      description: `${brand.name} is a premium tyre manufacturer offering exceptional quality and performance. We are an authorized dealer providing genuine ${brand.name} tyres with full manufacturer warranty. All tyres come with proper certification and are backed by comprehensive warranty coverage.`,
      tagline: brand.tagline,
      specs: [
        { label: 'Warranty', value: 'Full' },
        { label: 'Genuine', value: '100%' },
        { label: 'Fitting', value: 'Expert' }
      ]
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6">
        <div
          className="fixed inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
          onClick={onClose}
        ></div>

        <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] animate-futuristic-pop">

          <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-8 py-6 flex justify-between items-center z-20">
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

          <div className="p-8 md:p-12 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {allBrandLogos.map((brand, idx) => (
                <div
                  key={brand.name}
                  onClick={() => handleBrandClick(brand)}
                  className={`modal-brand-card flex flex-col items-center justify-center group card-pop-in card-pop-in-delay-${(idx % 5) + 1}`}
                >
                  <div className="h-20 md:h-24 flex items-center justify-center mb-5 relative z-10 w-full">
                    <img
                      src={brand.url}
                      alt={`${brand.name} Tyres`}
                      className="max-h-full max-w-full object-contain transition-all duration-500 group-hover:scale-115 filter grayscale(20%) group-hover:grayscale(0%)"
                    />
                  </div>

                  <div className="text-center relative z-10 w-full">
                    <h3 className="card-title uppercase mb-1">{brand.name}</h3>
                    <p className="card-subtitle text-[10px] uppercase tracking-wider">{brand.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky bottom-0 bg-slate-50 border-t border-slate-100 px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 z-20">
            <p className="text-slate-600 text-sm font-medium">
              All brands available with <span className="text-brand-red font-bold">manufacturer warranty</span>
            </p>
            <a
              href="tel:7088977333"
              className="flex items-center gap-2 clip-btn bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-widest text-xs shadow-lg shadow-red-500/30"
            >
              <Phone className="w-4 h-4" /> Get Best Quote
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Brand Details */}
      <CardModal
        isOpen={!!selectedCard}
        cardData={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </>
  );
};

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

const ConversionBanner = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const quickServices = [
    { title: 'New Tyres', subtitle: 'Best Brands & Prices', icon: <Car className="w-7 h-7" />, message: "Hi Tyremall, I am looking to buy New Tyres. Please help me with the best options and pricing." },
    { title: 'Alignment', subtitle: '3D Laser Precision', icon: <Crosshair className="w-7 h-7" />, message: "Hi Tyremall, I would like to book a 3D Wheel Alignment service." },
    { title: 'Nitrogen', subtitle: 'Optimized Pressure', icon: <Gauge className="w-7 h-7" />, message: "Hi Tyremall, I want to avail the Nitrogen Filling service for my vehicle." },
    { title: 'Puncture', subtitle: 'Express Repair', icon: <ShieldCheck className="w-7 h-7" />, message: "Hi Tyremall, I urgently need a Puncture Repair service." },
    { title: 'Balancing', subtitle: 'Vibration-Free Ride', icon: <Settings2 className="w-7 h-7" />, message: "Hi Tyremall, I would like to get my wheels balanced." }
  ];

  const getWhatsAppLink = (message) => {
    return `https://wa.me/917088977333?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity cursor-pointer"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto bg-gradient-to-b from-slate-900 to-slate-950 rounded-[32px] border border-slate-700/50 shadow-[0_30px_100px_rgba(0,0,0,0.9)] p-6 md:p-10 animate-futuristic-pop">

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-brand-red/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="text-center relative z-10 mb-10">

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
            Get Priority <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-brand-red">Service</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            Need new tyres or expert auto care? Tap any service below to instantly get a custom quote and priority booking via WhatsApp!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-5 relative z-10">
          {quickServices.map((service, idx) => (
            <a
              key={idx}
              href={getWhatsAppLink(service.message)}
              target="_blank"
              rel="noreferrer"
              className={`conversion-card w-[45%] md:w-[30%] lg:w-[18%] flex flex-col items-center text-center group card-pop-in card-pop-in-delay-${idx + 1}`}
            >
              <div className="icon-orb">{service.icon}</div>
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
        <div className="mt-10 text-center relative z-10 flex justify-center">
          <button
            onClick={onClose}
            className="group relative px-8 py-4 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 hover:border-brand-red/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_32px_rgba(238,63,44,0.2)] transition-all duration-300 overflow-hidden flex items-center gap-3"
          >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-red/0 via-brand-red/5 to-brand-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <span className="text-slate-300 font-bold uppercase tracking-[0.2em] text-xs group-hover:text-white transition-colors relative z-10">
              Explore Tyremall
            </span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-red group-hover:translate-x-1 transition-all relative z-10" />
          </button>
        </div>
      </div>
    </div>
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

      <div style={floatingHeadlineStyle} className="animate-on-scroll is-visible delay-100">
        <h1 className="text-brand-red text-xs sm:text-sm md:text-base font-bold  tracking-[0.4em] uppercase mb-5 text-shadow-heavy">
          #1 Tyre Shop in Dehradun — Bridgestone, Continental, Yokohama, Goodyear, Apollo, CEAT
        </h1>
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
            Authorized dealer of Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, CEAT tyres in Dehradun. Premium tyres for every vehicle — cars, bikes, scooters, trucks & commercial vehicles on GMS Road.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="tel:7088977333" className="flex items-center gap-2 clip-btn bg-brand-red text-white px-8 py-4 font-bold uppercase tracking-widest text-sm w-full sm:w-auto justify-center group shadow-lg shadow-red-500/20 pulse-animation">
              <Phone className="w-4 h-4" /> Call 70889 77333
            </a>
            <a href="https://wa.me/917088977333" target="_blank" rel="noreferrer" className="flex items-center gap-2 clip-btn-outline px-8 py-4 font-bold uppercase tracking-widest text-sm w-full sm:w-auto justify-center group hover:bg-[#25D366] hover:text-white hover:border-[#25D366]">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (brand) => {
    setSelectedCard({
      title: brand.name,
      category: 'Authorized Dealer',
      image: brand.url,
      description: `${brand.name} is a premium tyre manufacturer offering exceptional quality and performance. We are an authorized dealer providing genuine ${brand.name} tyres with full manufacturer warranty. All tyres come with proper certification and expert fitting service.`,
      tagline: brand.tagline,
      specs: [
        { label: 'Warranty', value: 'Full' },
        { label: 'Genuine', value: '100%' },
        { label: 'Fitting', value: 'Expert' }
      ]
    });
  };

  return (
    <>
      <div id="brands" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Authorized Dealer" title="Premium Tyre Brands" />
          <p className="text-slate-600 text-sm md:text-base text-center max-w-3xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
            Buy genuine Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, and CEAT tyres in Dehradun.
            We stock only 100% genuine tyres from authorized manufacturers — backed by full manufacturer warranty.
          </p>

          <div ref={ref} className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 w-full animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
            {mainBrandLogos.map((brand, idx) => (
              <div
                key={brand.name}
                onClick={() => handleCardClick(brand)}
                className={`pc-brand p-6 md:p-7 flex flex-col items-center justify-center group card-pop-in card-pop-in-delay-${(idx % 5) + 1} cursor-pointer`}
              >
                <div className="h-16 md:h-18 w-full flex items-center justify-center mb-4 z-10 relative">
                  <img
                    src={brand.url}
                    alt={`${brand.name} Tyres Dehradun`}
                    className="max-h-full max-w-[85%] object-contain"
                  />
                </div>
                <span className="card-subtitle font-bold text-[10px] md:text-xs uppercase tracking-wide text-center z-10 relative">
                  {brand.name}
                </span>
              </div>
            ))}

            <div
              onClick={onOpenModal}
              className="group relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-7 rounded-[24px] flex flex-col items-center justify-center border border-slate-700 hover:border-brand-red/50 hover:shadow-[0_24px_56px_-8px_rgba(238,63,44,0.3)] transition-all duration-500 cursor-pointer overflow-hidden card-pop-in card-pop-in-delay-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 group-hover:bg-brand-red group-hover:scale-125 transition-all duration-400 shadow-lg border border-white/10 group-hover:border-red-400">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-black text-sm uppercase tracking-wider text-center group-hover:text-brand-red transition-colors">More</h3>
                <p className="text-slate-400 text-[10px] mt-1 font-bold">+10 Brands</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-4 text-xs md:text-sm font-bold tracking-[0.2em] text-slate-600 uppercase mt-16">
            <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
              <span className="text-brand-red text-lg">●</span> 100% Genuine
            </span>
            <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
              <span className="text-brand-red text-lg">●</span> Manufacturer Warranty
            </span>
            <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
              <span className="text-brand-red text-lg">●</span> Best Price Guarantee
            </span>
            <span className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200">
              <span className="text-brand-red text-lg">●</span> Expert Fitting
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CardModal
        isOpen={!!selectedCard}
        cardData={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </>
  );
};

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
            <div key={cat.title} className="pc p-8 flex flex-col text-left group" style={{ transitionDelay: `${idx * 70}ms` }}>
              <div className="pc-icon mb-6">{cat.icon}</div>
              <h3 className="text-slate-900 font-bold text-xl uppercase tracking-tight mb-2 relative z-10">{cat.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed relative z-10">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExpertServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, isVisible] = useInView();

  const services = [
    {
      title: 'Tyre Fitting',
      shortDesc: 'Professional mounting & balancing.',
      detailedDesc: 'Our state-of-the-art mounting machines ensure your wheels remain 100% scratch-free. We expertly handle low-profile, run-flat, and oversized tyres with absolute precision, ensuring perfect bead seating and optimal safety on every journey.',
      icon: <Wrench className="w-6 h-6" />,
      video: 'https://player.vimeo.com/external/404332610.sd.mp4?s=d6387062d85d7796d833f211da3d35cc8baeb9de&profile_id=164&oauth2_token_id=57447761'
    },
    {
      title: 'Wheel Alignment',
      shortDesc: 'Computerized 3D alignment.',
      detailedDesc: 'Best machines in the world wheel alignment without damaging tires, perfect price. Using advanced 3D laser precision, we align your wheels to exact factory specifications. This prevents uneven wear, maximizes fuel efficiency, and guarantees a perfectly straight, smooth drive.',
      icon: <Crosshair className="w-6 h-6" />,
      video: 'https://player.vimeo.com/external/538571556.sd.mp4?s=33ef66ea680e659b8a3e7ed27eb4b232616238b7&profile_id=164&oauth2_token_id=57447761'
    },
    {
      title: 'Nitrogen Filling',
      shortDesc: 'Pressure monitoring & filling.',
      detailedDesc: 'Nitrogen gas runs significantly cooler and maintains tyre pressure much longer than standard compressed air. Experience better fuel economy, extended tyre lifespan, and reduced oxidation of your premium wheel components.',
      icon: <Gauge className="w-6 h-6" />,
      video: 'https://player.vimeo.com/external/498292862.sd.mp4?s=c8ea54d318db50d8dc51b32d0b5e2be119567950&profile_id=164&oauth2_token_id=57447761'
    },
    {
      title: 'Puncture Repair',
      shortDesc: 'Quick industry-grade repair.',
      detailedDesc: 'We utilize permanent mushroom plug patches applied from the inside out—the safest and only industry-approved repair method. Fast, reliable, and ensures your tyre’s structural integrity and speed rating remain completely uncompromised.',
      icon: <ShieldCheck className="w-6 h-6" />,
      video: 'https://player.vimeo.com/external/404332306.sd.mp4?s=0fa45aedc4e6118d0afdc02cc60840b157bd77ba&profile_id=164&oauth2_token_id=57447761'
    },
    {
      title: 'Wheel Balancing',
      shortDesc: 'Eliminate vibrations & wear.',
      detailedDesc: 'Computerized dynamic balancing detects even the most microscopic weight imbalances. We apply precise, eco-friendly weights to your wheels to ensure a completely vibration-free ride, significantly improving comfort at highway speeds.',
      icon: <Settings2 className="w-6 h-6" />,
      video: 'https://player.vimeo.com/external/404332918.sd.mp4?s=6f47df43fcf3a1eeb36e65b6a7156df2bb38053a&profile_id=164&oauth2_token_id=57447761'
    },
    {
      title: 'Tyre Rotation',
      shortDesc: 'Even tread wear all around.',
      detailedDesc: 'Maximize your tyre investment by rotating them regularly. We follow strict manufacturer-specific cross-patterns to equalize tread wear across all four tyres, extending the lifespan of your complete set by up to 30%.',
      icon: <RefreshCw className="w-6 h-6" />,
      video: 'https://player.vimeo.com/external/394749374.sd.mp4?s=7b99c7bfcb12d46e31f0ee76bafdece0291df13d&profile_id=164&oauth2_token_id=57447761'
    },
  ];

  return (
    <div id="services" className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="What We Offer" title="Expert Tyre Services" />
        <p className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
          Hover over our specialized services below to see our trained technicians in action and discover how we maintain your vehicle.
        </p>

        <div ref={ref} className={`flex flex-col lg:flex-row gap-6 lg:gap-10 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>

          {/* Left Side: Interactive Services List */}
          <div className="w-full lg:w-[40%] flex flex-col gap-3">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-[20px] p-5 transition-all duration-400 border-2 flex items-center gap-5 ${activeIndex === idx
                  ? 'border-brand-red bg-white shadow-[0_16px_40px_-8px_rgba(238,63,44,0.25)] transform lg:scale-[1.03] lg:-mr-4 z-10'
                  : 'border-transparent bg-slate-100/60 hover:bg-white hover:border-slate-200 hover:shadow-md'
                  }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl flex-shrink-0 transition-all duration-400 ${activeIndex === idx
                  ? 'bg-gradient-to-br from-brand-red to-[#c9301d] text-white shadow-[0_8px_20px_rgba(238,63,44,0.3)] scale-110'
                  : 'bg-white border border-slate-200 text-slate-400'
                  }`}>
                  {svc.icon}
                </div>
                <div>
                  <h3 className={`font-black uppercase tracking-wide text-sm transition-colors duration-300 ${activeIndex === idx ? 'text-brand-red' : 'text-slate-800'
                    }`}>
                    {svc.title}
                  </h3>
                  <p className={`text-[11px] font-bold tracking-wide uppercase mt-1 transition-colors duration-300 ${activeIndex === idx ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                    {svc.shortDesc}
                  </p>
                </div>
                <ArrowRight className={`ml-auto w-5 h-5 flex-shrink-0 transition-all duration-400 ${activeIndex === idx ? 'opacity-100 text-brand-red translate-x-0' : 'opacity-0 -translate-x-4'
                  }`} />
              </div>
            ))}
          </div>

          {/* Right Side: Media Display Board */}
          <div className="w-full lg:w-[60%] h-[450px] lg:h-[650px] relative rounded-[32px] overflow-hidden shadow-[0_24px_64px_-12px_rgba(15,23,42,0.15)] border border-slate-200/80 bg-slate-900 group">

            {/* Background Video */}
            <video
              key={activeIndex}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten transition-opacity duration-1000"
            >
              <source src={services[activeIndex].video} type="video/mp4" />
            </video>

            {/* Premium Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent"></div>

            {/* Red Accent Glow Overlay */}
            <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay pointer-events-none transition-opacity duration-500"></div>

            {/* Detailed Content Box */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
              <div className="animate-futuristic-pop" key={`content-${activeIndex}`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-red to-[#c9301d] flex items-center justify-center text-white shadow-[0_8px_24px_rgba(238,63,44,0.4)] border border-white/10">
                    {services[activeIndex].icon}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                    {services[activeIndex].title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm lg:text-base leading-relaxed font-medium max-w-xl drop-shadow-md mb-8 pl-1">
                  {services[activeIndex].detailedDesc}
                </p>

                <div className="flex items-center gap-4 pl-1">
                  <a
                    href={`https://wa.me/917088977333?text=Hi%20Tyremall,%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(services[activeIndex].title)}%20service.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 clip-btn bg-brand-red text-white px-8 py-4 font-black uppercase tracking-widest text-xs shadow-[0_10px_30px_rgba(238,63,44,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(238,63,44,0.6)] transition-all duration-300 group/btn"
                  >
                    <Navigation className="w-4 h-4" /> Book Service
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

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
    'Best machines in the world wheel alignment',
    'GMS Road location — easy access in Dehradun',
    'Free tyre consultation & after-sales support'
  ];

  const [ref, isVisible] = useInView();

  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Authorized Dealer" title="Genuine Bridgestone, Continental & More" />
        <p className="text-slate-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-16 -mt-8 animate-on-scroll is-visible">
          Tyremall is an authorized dealer for Bridgestone, Continental, Yokohama, Goodyear, JK Tyre, Apollo, and CEAT tyres in Dehradun. Located on GMS Road near Chung Gas Agency, Niranjanpur — serving Uttarakhand for over a decade.
        </p>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`pc-stat text-center py-14 px-6 card-pop-in card-pop-in-delay-${idx + 1}`}
            >
              {stat.title === '4.8' && (
                <div className="flex justify-center gap-1 text-brand-red mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
              )}
              <h3 className="mb-3">{stat.title}</h3>
              <p className="text-slate-500 text-[11px] font-black uppercase tracking-[0.2em] relative z-10">{stat.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8 max-w-5xl mx-auto mb-16">
          {points.map((point, idx) => (
            <div key={idx} className="flex items-start gap-4 animate-on-scroll is-visible pc p-4 bg-white/50 border border-slate-100 shadow-sm rounded-2xl hover:shadow-md transition-shadow">
              <div className="mt-0.5 w-6 h-6 rounded-full bg-red-50 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-brand-red" />
              </div>
              <p className="text-slate-700 font-bold text-sm leading-relaxed">{point}</p>
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

const ReviewsSection = () => {
  const reviews = [
    { name: 'Rohit Sharma', rating: 5, text: 'Best tyre shop in Dehradun! Got Bridgestone tyres at an unbeatable price. The 3D alignment was spot-on — zero vibrations on the highway.', vehicle: 'Honda City', date: '2 weeks ago' },
    { name: 'Priya Negi', rating: 5, text: 'Excellent service from start to finish. Staff helped me pick the right Continental tyres for my Swift. Fast fitting, great value, genuine warranty.', vehicle: 'Maruti Swift', date: '1 month ago' },
    { name: 'Deepak Rawat', rating: 5, text: 'Simply the best tyre shop in the city. Got genuine Yokohama with full manufacturer warranty. Wheel balancing completely removed all vibrations.', vehicle: 'Toyota Innova', date: '3 weeks ago' },
    { name: 'Sanjay Bisht', rating: 5, text: 'Came for puncture repair — done in 15 minutes flat. Got a free tyre inspection too. Very professional. Will buy my next set of tyres here only.', vehicle: 'Hyundai Creta', date: '5 days ago' },
    { name: 'Anita Thakur', rating: 5, text: 'The 3D alignment machine is top-of-the-line, no tyre damage at all. Best Apollo tyre prices in Dehradun. Staff is incredibly knowledgeable.', vehicle: 'Renault Duster', date: '2 months ago' },
    { name: 'Vikram Chauhan', rating: 5, text: 'Got Goodyear tyres for my SUV. 100% genuine products, best price guaranteed. Nitrogen filling service was a great bonus. Highly satisfied!', vehicle: 'Mahindra XUV500', date: '1 week ago' },
  ];
  const all = [...reviews, ...reviews];
  const [ref, isVisible] = useInView();

  return (
    <div id="reviews" className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <SectionTitle subtitle="Customer Reviews" title="Trusted by Dehradun" />
        <div ref={ref} className={`flex items-center justify-center gap-3 -mt-8 animate-on-scroll ${isVisible ? 'is-visible' : ''}`}>
          <div className="flex gap-1 text-brand-red drop-shadow-md">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <span className="text-slate-700 font-bold text-sm md:text-base bg-white px-4 py-1.5 rounded-full shadow-sm border border-slate-200">4.8 / 5 on Google &nbsp;·&nbsp; 500+ Happy Customers</span>
        </div>
      </div>

      <div className="relative pb-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right,#f8fafc,transparent)' }}></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left,#f8fafc,transparent)' }}></div>
        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-8 pr-8" style={{ width: 'max-content' }}>
            {all.map((r, idx) => (
              <div key={idx} className="pc-review flex-shrink-0" style={{ width: '340px' }}>
                <div className="flex gap-1 text-brand-red mb-4">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-700 text-[15px] leading-relaxed mb-6 font-medium relative z-10">{r.text}</p>
                <div className="flex items-center justify-between pt-5 border-t border-slate-100 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="avatar w-11 h-11 rounded-full bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center text-white text-sm font-black flex-shrink-0 relative">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-sm leading-tight">{r.name}</p>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">{r.vehicle}</p>
                    </div>
                  </div>
                  <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider flex-shrink-0 bg-slate-100 px-2 py-1 rounded-md">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-16 px-4 sm:px-6">
        <div className="pc p-8 md:p-10">
          <div className="text-center mb-8">
            <div className="text-brand-red text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Share Your Experience</div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Leave a Review</h3>
            <p className="text-slate-500 text-sm mt-2 font-medium">Your feedback helps us serve Dehradun better.</p>
          </div>
          <ReviewForm />
        </div>
      </div>
    </div>
  );
};

const ReviewForm = () => {
  const [form, setForm] = useState({ name: '', vehicle: '', rating: 0, hovered: 0, text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (field, val) => setForm(f => ({ ...f, [field]: val }));

  const submit = () => {
    if (!form.name.trim() || !form.text.trim() || form.rating === 0) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-red to-red-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-red-500/30">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-slate-900 font-black text-xl mb-2 uppercase tracking-tight">Thank You, {form.name.split(' ')[0]}!</h4>
        <p className="text-slate-500 text-sm">Your review has been submitted. We appreciate your feedback!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Your Name *</label>
          <input
            type="text"
            placeholder="e.g. Rohit Sharma"
            value={form.name}
            onChange={e => handle('name', e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 text-sm font-bold placeholder:text-slate-300 placeholder:font-medium focus:outline-none focus:border-brand-red transition-all duration-300 bg-slate-50 focus:bg-white focus:shadow-[0_0_15px_rgba(238,63,44,0.1)]"
          />
        </div>
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Vehicle (optional)</label>
          <input
            type="text"
            placeholder="e.g. Honda City"
            value={form.vehicle}
            onChange={e => handle('vehicle', e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 text-sm font-bold placeholder:text-slate-300 placeholder:font-medium focus:outline-none focus:border-brand-red transition-all duration-300 bg-slate-50 focus:bg-white focus:shadow-[0_0_15px_rgba(238,63,44,0.1)]"
          />
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">Your Rating *</label>
        <div className="flex gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 inline-flex">
          {[1, 2, 3, 4, 5].map(star => (
            <button
              key={star}
              onClick={() => handle('rating', star)}
              onMouseEnter={() => handle('hovered', star)}
              onMouseLeave={() => handle('hovered', 0)}
              className="transition-transform duration-150 hover:scale-125 active:scale-110"
            >
              <Star
                className={`w-8 h-8 transition-colors duration-150 ${star <= (form.hovered || form.rating) ? 'text-amber-400 fill-amber-400 drop-shadow-sm' : 'text-slate-200 fill-slate-200'
                  }`}
              />
            </button>
          ))}
          {form.rating > 0 && (
            <span className="ml-3 self-center text-xs font-black text-slate-600 uppercase tracking-wide bg-white px-3 py-1 rounded-md shadow-sm border border-slate-100">
              {['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][form.rating]}
            </span>
          )}
        </div>
      </div>

      <div>
        <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Your Review *</label>
        <textarea
          rows={4}
          placeholder="Tell us about your experience at Tyremall..."
          value={form.text}
          onChange={e => handle('text', e.target.value)}
          className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 text-slate-900 text-sm font-medium placeholder:text-slate-300 focus:outline-none focus:border-brand-red transition-all duration-300 bg-slate-50 focus:bg-white focus:shadow-[0_0_15px_rgba(238,63,44,0.1)] resize-none"
        />
      </div>

      <button
        onClick={submit}
        disabled={!form.name.trim() || !form.text.trim() || form.rating === 0}
        className="w-full clip-btn bg-brand-red text-white py-4.5 font-black uppercase tracking-widest text-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 group transition-all duration-300"
      >
        Submit Review <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-wider">Your review will be visible on this page after submission.</p>
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                WhatsApp Now
              </a>
            </div>

            <div className="flex items-center gap-3 mb-10 text-sm text-slate-600 font-bold bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 inline-flex">
              <div className="flex gap-1 text-brand-red">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span>4.8 on Google • 500+ reviews</span>
            </div>

            {/* Premium Contact Card */}
            <div className="pc bg-white p-7 md:p-8 max-w-md shadow-sm border border-slate-200/80 rounded-[24px]">
              <div className="flex justify-between items-center py-4 border-b border-slate-100">
                <span className="text-slate-500 text-[11px] font-black uppercase tracking-widest flex items-center gap-2.5"><Mail className="w-4 h-4 text-brand-red" /> Email</span>
                <a href="mailto:sales@tyremall.net" className="text-slate-900 hover:text-brand-red transition-colors font-black text-sm">sales@tyremall.net</a>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-slate-100">
                <span className="text-slate-500 text-[11px] font-black uppercase tracking-widest">Mon - Sat</span>
                <span className="text-brand-red font-black text-sm bg-red-50 px-3 py-1 rounded-md">9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-slate-500 text-[11px] font-black uppercase tracking-widest">Sunday</span>
                <span className="text-slate-900 font-black text-sm bg-slate-100 px-3 py-1 rounded-md">10:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1)] animate-on-scroll is-visible delay-200 group">
            <div className="absolute inset-0 bg-brand-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.939!2d77.9942!3d30.3011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b5c8a5d5c3b%3A0x8f0c0e7d8b9a3f2d!2sTyremall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tyremall Dehradun - ITI Road, Niranjanpur, Near Reliance Market - Buy Bridgestone, Continental, Yokohama, Goodyear Tyres"
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};



// --- Floating Call Now Banner (Static Left) ---
const StaticCallBanner = () => (
  <a
    href="tel:7088977333"
    className="fixed bottom-6 left-6 z-[100] clip-btn bg-brand-red text-white px-6 py-4 font-black text-xs sm:text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(238,63,44,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(238,63,44,0.6)] transition-all duration-300 flex items-center justify-center gap-2 pulse-animation"
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
    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
  </a>
);

// --- Main App Component ---

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showBrandsModal, setShowBrandsModal] = useState(false);

  useEffect(() => {
    // 0. Dynamic Scroll Background Logic
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      // Inject scroll progress as a CSS variable for our overlay to use
      document.documentElement.style.setProperty('--scroll-red-intensity', scroll);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 1. Loader Logic
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    // 2. Futuristic Banner Logic (exactly 10 seconds from load)
    const bannerTimer = setTimeout(() => {
      setShowBanner(true);
    }, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(loaderTimer);
      clearTimeout(bannerTimer);
    };
  }, []);

  return (
    <>
      <SEO
        title="Tyremall Dehradun | Premium Tyre Shop in Uttarakhand"
        description="Buy Bridgestone, Continental, Yokohama, Goodyear, Apollo & CEAT tyres in Dehradun. Premium tyre fitting, wheel alignment & balancing services."
        keywords="Tyre shop Dehradun, Bridgestone tyres Dehradun, Yokohama tyres Dehradun, Apollo tyres, wheel alignment Dehradun"
        image="https://yourdomain.com/home-og.jpg"
        url="https://yourdomain.com/"
      />
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <div className="dynamic-scroll-overlay"></div>
      <Loader isLoading={isLoading} />

      {/* 10s Premium Conversion Popup */}
      <ConversionBanner isVisible={showBanner} onClose={() => setShowBanner(false)} />

      {/* Premium Brands Modal */}
      <MoreBrandsModal isOpen={showBrandsModal} onClose={() => setShowBrandsModal(false)} />

      <div className="bg-slate-50 min-h-screen font-sans selection:bg-brand-red selection:text-white">
        <main>
          <Hero />
          <IntroDestination />
          <BrandsShowcase onOpenModal={() => setShowBrandsModal(true)} />
          <TyreRange />
          <ExpertServices />
          <WhyUs />
          <ReviewsSection />
          <ContactSection />
        </main>
        <StaticCallBanner />
        <FloatingWhatsApp />
      </div>
    </>
  );
}