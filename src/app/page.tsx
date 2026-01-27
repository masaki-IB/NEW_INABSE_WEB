import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Company from '@/components/Company';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <Company />
      <Contact />
    </div>
  );
}
