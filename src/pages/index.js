import React, { useState } from 'react';
import Hero from '@/components/home/Hero';
import TopAiTools from '@/components/home/TopAiTools';
import 'typeface-manrope'; // Import the font

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="font-manrope dark:bg-primary-dark">
      <Hero onSearch={handleSearch} />
      <TopAiTools searchTerm={searchTerm} />
    </div>
  );
}