'use client';

import Image from 'next/image';

const row1 = [
  { name: 'Google Drive', url: 'https://cdn.simpleicons.org/googledrive' },
  { name: 'Adobe', url: 'https://cdn.simpleicons.org/adobecreativecloud' },
  { name: 'Jira', url: 'https://cdn.simpleicons.org/jira' },
  { name: 'Gmail', url: 'https://cdn.simpleicons.org/gmail' },
  { name: 'Figma', url: 'https://cdn.simpleicons.org/figma' },
  { name: 'Outlook', url: 'https://cdn.simpleicons.org/microsoftoutlook' },
  { name: 'Slack', url: 'https://cdn.simpleicons.org/slack' },
  { name: 'Zendesk', url: 'https://cdn.simpleicons.org/zendesk' },
];

const row2 = [
  { name: 'Salesforce', url: 'https://cdn.simpleicons.org/salesforce' },
  { name: 'Intercom', url: 'https://cdn.simpleicons.org/intercom' },
  { name: 'HubSpot', url: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Google Calendar', url: 'https://cdn.simpleicons.org/googlecalendar' },
  { name: 'Asana', url: 'https://cdn.simpleicons.org/asana' },
  { name: 'Zoom', url: 'https://cdn.simpleicons.org/zoom' },
  { name: 'Notion', url: 'https://cdn.simpleicons.org/notion' },
  { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe' },
];

// Duplicate for infinite scroll
const marqueeRow1 = [...row1, ...row1, ...row1];
const marqueeRow2 = [...row2, ...row2, ...row2];

function LogoBox({ company }: { company: { name: string, url: string } }) {
  return (
    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center p-3 md:p-4 mx-3 md:mx-4 shrink-0 transition-transform duration-300 hover:scale-110 cursor-pointer">
      <div className="relative w-full h-full">
        <Image src={company.url} alt={company.name} fill className="object-contain" unoptimized />
      </div>
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
          CONNECTS WITH YOUR FAVORITE TOOLS
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 relative z-0">
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {marqueeRow1.map((company, index) => (
            <LogoBox key={`r1-${index}`} company={company} />
          ))}
        </div>

        {/* Row 2 - Scrolling Right (we use a negative animation direction in tailwind or just a reverse animation) */}
        {/* We can use the same marquee but starting shifted and with direction-reverse if configured in Tailwind.
            Since standard animate-marquee is linear forwards, we'll just use a style hack or add animate-marquee-reverse */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
          {marqueeRow2.map((company, index) => (
            <LogoBox key={`r2-${index}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
