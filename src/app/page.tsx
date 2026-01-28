import Hero from '@/components/Hero';
import Services from '@/components/Services';
import News from '@/components/News';
import Company from '@/components/Company';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      {/* Spacer between Services and News - 約50mm */}
      <div className="h-[200px] bg-slate-950"></div>
      <News />
      {/* Spacer between News and Company - 約50mm */}
      <div className="h-[200px] bg-slate-950"></div>
      <Company />
      {/* Spacer between Company and Contact - 約50mm */}
      <div className="h-[200px] bg-slate-950"></div>
      <Contact />
      {/* Spacer between Contact and Footer - 約50mm */}
      <div className="h-[200px] bg-slate-950"></div>
    </div>
  );
}
