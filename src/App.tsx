import { Routes, Route } from 'react-router-dom';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Benefits } from '@/components/Benefits';
import { Sustainability } from '@/components/Sustainability';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import {Team} from '@/components/Team';
import {MissionVersion} from '@/components/MissionVersion';
import TreeApp from '@/components/Tree';
import NotFound from '@/pages/NotFound';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <Benefits />
      <Sustainability />
      <MissionVersion/>
      <Team/>
      <TreeApp/>
      <CTA />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
