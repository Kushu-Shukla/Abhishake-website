'use client';

const companiesRow1 = [
  'Air India',
  'IndiGo',
  'Flipkart Travel',
  'Clear Trip',
  'Freelancer.com'
];

const companiesRow2 = [
  'Freelancer.com',
  'Clear Trip',
  'Flipkart Travel',
  'IndiGo',
  'Air India'
];

// Duplicate for infinite scroll
const marqueeRow1 = [...companiesRow1, ...companiesRow1, ...companiesRow1, ...companiesRow1];
const marqueeRow2 = [...companiesRow2, ...companiesRow2, ...companiesRow2, ...companiesRow2];

function CompanyBox({ name }: { name: string }) {
  return (
    <div className="h-16 md:h-20 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center px-8 md:px-12 mx-3 md:mx-4 shrink-0 transition-transform duration-300 hover:scale-105 cursor-default">
      <span className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity">
        {name}
      </span>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-16 md:py-24 border-y border-slate-200/50 bg-slate-50/50 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest">
          TRUSTED BY INDUSTRY LEADERS
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative z-0">
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeRow1.map((company, index) => (
            <CompanyBox key={`r1-${index}`} name={company} />
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
          {marqueeRow2.map((company, index) => (
            <CompanyBox key={`r2-${index}`} name={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
