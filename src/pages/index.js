import Hero from '@/components/home/Hero';
import Image from 'next/image';
import TopAiTools from '@/components/home/TopAiTools';
import { Manrope } from "next/font/google";

const font = Manrope({ subsets: ["latin"] });

export default function Home() {


  return (
    <div className={`${font.className} dark:bg-primary-dark`}>
     <Hero/>
     <TopAiTools/>
    </div>
  );
}