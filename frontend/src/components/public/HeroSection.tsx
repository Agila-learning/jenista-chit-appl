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
    <section className="relative w-full overflow-hidden bg-[#FAF6EE] pt-2 sm:pt-4 pb-6 sm:pb-10">
      <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Full-width Panoramic Banner Canvas */}
        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D8AB4B]/25 shadow-[0_12px_45px_rgba(7,59,50,0.09)] min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] xl:min-h-[640px] flex items-center bg-[#FAF6EE]">
          
          {/* Background Illustration: Clean panoramic artwork (no text, no duplicate logo, no flat buttons) */}
          <img 
            src="/assets/hero_clean_panoramic.jpg" 
            alt="Financial chit savings with Jenista Chits" 
            className="absolute inset-0 w-full h-full object-cover object-right sm:object-center select-none pointer-events-none"
            loading="eager"
            width={1024}
            height={576}
          />

          {/* Soft Mobile & Tablet Legibility Gradient (Fade out on desktop) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE]/95 via-[#FAF6EE]/85 to-[#FAF6EE]/30 sm:via-[#FAF6EE]/60 sm:to-transparent lg:from-transparent lg:via-transparent lg:to-transparent pointer-events-none" />

          {/* Real, Crisp HTML Typography & Interactive Elements on the Left */}
          <div className="relative z-10 w-full px-5 sm:px-10 lg:px-14 py-8 sm:py-12 lg:py-16">
            <div className="max-w-xl lg:max-w-2xl">
              
              {/* Compliance & Trust Pill Tag */}
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#064E3B]/20 mb-5 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-[#064E3B] animate-pulse" />
                <ShieldCheck className="w-3.5 h-3.5 text-[#064E3B]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#073B32] tracking-wide uppercase">
                  Central Chit Funds Act, 1982 Regulated
                </span>
              </div>

              {/* Crisp Page Headline with Elegant Handwritten Gold Script on 'Goals.' */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.75rem] font-black text-[#102C28] tracking-tight leading-[1.12] mb-5">
                Plan Your Savings. <br />
                Move Towards Your{' '}
                <span 
                  className="text-[#C5922F] relative inline-block font-bold drop-shadow-xs"
                  style={{ fontFamily: "'Caveat', cursive, sans-serif", fontSize: '1.2em' }}
                >
                  Goals.
                </span>
              </h1>

              {/* Real HTML Supporting Text */}
              <p className="text-sm sm:text-base lg:text-lg text-[#102C28]/85 max-w-xl leading-relaxed font-normal mb-8">
                Explore chit plans designed around your financial goals, with clear installment details and a convenient way to track your progress.
              </p>

              {/* Realistic Tactile HTML Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                
                {/* 1. Explore Chit Plans - Realistic Deep Emerald Pill Button */}
                <a href="#plans" className="w-full sm:w-auto">
                  <button 
                    type="button"
                    className="group/btn relative h-13 sm:h-14 px-8 rounded-full bg-gradient-to-b from-[#095742] via-[#064E3B] to-[#043D2E] text-white font-extrabold text-sm sm:text-base tracking-wide border border-[#0D7257]/70 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_20px_-4px_rgba(6,78,59,0.5),0_2px_4px_rgba(6,78,59,0.25)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),0_12px_28px_-4px_rgba(6,78,59,0.65),0_4px_8px_rgba(6,78,59,0.35)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-200 flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer"
                  >
                    {/* Subtle top glossy sheen */}
                    <span className="absolute top-0 left-4 right-4 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />
                    <span>Explore Chit Plans</span>
                    <ArrowRight className="w-4 h-4 text-[#E6C675] group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </a>

                {/* 2. Enquire Now - Realistic Porcelain Glass Pill Button */}
                <a href="#contact" className="w-full sm:w-auto">
                  <button 
                    type="button"
                    className="group/btn relative h-13 sm:h-14 px-8 rounded-full bg-gradient-to-b from-white via-[#FCFBF8] to-[#F3EEE3] text-[#102C28] font-black text-sm sm:text-base border-2 border-[#102C28]/85 hover:border-[#064E3B] hover:text-[#064E3B] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_6px_18px_-3px_rgba(16,44,40,0.15),0_2px_4px_rgba(0,0,0,0.06)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_10px_24px_-3px_rgba(16,44,40,0.22)] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.15)] transition-all duration-200 flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer"
                  >
                    <span>Enquire Now</span>
                    <Mail className="w-4 h-4 text-[#102C28] group-hover/btn:text-[#064E3B] transition-colors" />
                  </button>
                </a>
              </div>

              {/* Realistic Trust Pillars with Crisp Vector Icons */}
              <div className="mt-9 pt-6 border-t border-[#102C28]/15 flex flex-wrap items-center gap-y-3 sm:gap-x-6 text-xs sm:text-sm font-bold text-[#102C28]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#064E3B]/10 flex items-center justify-center text-[#064E3B] shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>Trusted & Transparent</span>
                </div>

                <div className="hidden sm:block w-px h-5 bg-[#102C28]/20" />

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#064E3B]/10 flex items-center justify-center text-[#064E3B] shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <span>Customer Focused</span>
                </div>

                <div className="hidden sm:block w-px h-5 bg-[#102C28]/20" />

                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#064E3B]/10 flex items-center justify-center text-[#064E3B] shrink-0">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span>Grow Your Savings</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

