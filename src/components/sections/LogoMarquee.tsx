'use client';

const companiesRow1 = [
  { name: 'Air India', url: 'https://www.google.com/s2/favicons?domain=airindia.com&sz=128' },
  { name: 'IndiGo', url: 'https://www.google.com/s2/favicons?domain=goindigo.in&sz=128' },
  { name: 'Flipkart Travel', url: 'https://www.google.com/s2/favicons?domain=flipkart.com&sz=128' },
  { name: 'Clear Trip', url: 'https://www.google.com/s2/favicons?domain=cleartrip.com&sz=128' },
  { name: 'Freelancer', url: 'https://www.google.com/s2/favicons?domain=freelancer.com&sz=128' }
];

const companiesRow2 = [
  { name: 'Freelancer', url: 'https://www.google.com/s2/favicons?domain=freelancer.com&sz=128' },
  { name: 'Clear Trip', url: 'https://www.google.com/s2/favicons?domain=cleartrip.com&sz=128' },
  { name: 'Flipkart Travel', url: 'https://www.google.com/s2/favicons?domain=flipkart.com&sz=128' },
  { name: 'IndiGo', url: 'https://www.google.com/s2/favicons?domain=goindigo.in&sz=128' },
  { name: 'Air India', url: 'https://www.google.com/s2/favicons?domain=airindia.com&sz=128' }
];

// Duplicate for infinite scroll
const marqueeRow1 = [...companiesRow1, ...companiesRow1, ...companiesRow1, ...companiesRow1];
const marqueeRow2 = [...companiesRow2, ...companiesRow2, ...companiesRow2, ...companiesRow2];

function CompanyBox({ company }: { company: { name: string, url: string } }) {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white dark:bg-slate-950 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center p-3 md:p-4 mx-3 md:mx-4 shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Using standard img tag to bypass Next.js external image hostname restrictions */}
        <img 
          src={company.url} 
          alt={company.name} 
          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
             // Fallback if logo fails to load
             e.currentTarget.style.display = 'none';
             if (e.currentTarget.parentElement) {
               e.currentTarget.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-400">${company.name}</span>`;
             }
          }}
        />
      </div>
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="py-16 md:py-12 md:py-16 border-y border-slate-200/50 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
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
            <CompanyBox key={`r1-${index}`} company={company} />
          ))}
        </div>

        {/* Row 2 - Scrolling Right */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
          {marqueeRow2.map((company, index) => (
            <CompanyBox key={`r2-${index}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
