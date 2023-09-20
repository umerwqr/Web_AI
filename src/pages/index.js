import Hero from '@/components/home/Hero';
import Image from 'next/image';
import TopAiTools from '@/components/home/TopAiTools';
import 'typeface-manrope'; // Import the font

export default function Home() {
  return (
    <div className="font-manrope dark:bg-primary-dark">
     <Hero/>
     <TopAiTools/>
    </div>
  );
}