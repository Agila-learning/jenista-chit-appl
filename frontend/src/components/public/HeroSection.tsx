import React from 'react';
import { 
  ArrowRight, 
  Mail, 
  ShieldCheck, 
  Users, 
  TrendingUp 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF6EE] sm:bg-gradient-to-b sm:from-[#FAF6EE] sm:via-[#FFFDF7] sm:to-[#F5EFE3] pt-1 sm:pt-3 pb-4 sm:pb-8">
      {/* Hidden semantic heading for SEO & Accessibility */}
      <div className="sr-only">
        <h1>Plan Your Savings. Move Towards Your Goals.</h1>
        <p>
          Jenista Chit Funds: Explore chit plans designed around your financial goals, with clear installment details and a convenient way to track your progress.
        </p>
      </div>

      {/* Main Container - Fitted seamlessly to the page width without square boxed margins */}
      <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Full-width Panoramic Banner Wrapper */}
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_12px_40px_rgba(7,59,50,0.08)] border border-[#064E3B]/10 group bg-white">
          
          {/* Panoramic Graphic Asset */}
          <img 
            src="/assets/hero_banner_full.jpg" 
            alt="Jenista Chits - Plan Your Savings. Move Towards Your Goals. Explore Chit Plans & Enquire Now" 
            className="w-full h-auto block object-cover select-none"
            width={1024}
            height={576}
            loading="eager"
          />

          {/* Precision Interactive Hotspots on Banner CTA Buttons (Desktop & Tablet) */}
          <a
            href="#plans"
            className="absolute left-[5.4%] top-[65.6%] w-[18.8%] h-[7.3%] rounded-full z-20 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#D8AB4B] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] bg-white/0 hover:bg-white/10"
            aria-label="Explore Chit Plans"
            title="Explore Chit Plans"
          >
            <span className="sr-only">Explore Chit Plans</span>
          </a>

          <a
            href="#contact"
            className="absolute left-[24.8%] top-[65.6%] w-[15.2%] h-[7.3%] rounded-full z-20 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#064E3B] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] bg-black/0 hover:bg-black/5"
            aria-label="Enquire Now"
            title="Enquire Now"
          >
            <span className="sr-only">Enquire Now</span>
          </a>
        </div>

        {/* Mobile Action Controls (Rendered on smaller screens for instant finger touch) */}
        <div className="sm:hidden mt-3 px-1 flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <a href="#plans" className="flex-1">
              <button 
                type="button"
                className="w-full h-11 px-3 text-xs font-bold text-white bg-[#064E3B] hover:bg-[#073B32] active:bg-[#043327] rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Explore Chit Plans</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8AB4B]" />
              </button>
            </a>
            
            <a href="#contact" className="flex-1">
              <button 
                type="button"
                className="w-full h-11 px-3 text-xs font-bold text-[#064E3B] bg-white hover:bg-[#F8F1E5] active:bg-[#F0E6D2] border border-[#064E3B]/30 rounded-xl shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Enquire Now</span>
                <Mail className="w-3.5 h-3.5 text-[#064E3B]" />
              </button>
            </a>
          </div>

          <div className="flex items-center justify-between text-[11px] font-bold text-[#102C28]/80 px-1 pt-0.5">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" /> Trusted & Transparent
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#064E3B]" /> Customer Focused
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-[#064E3B]" /> Grow Savings
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

