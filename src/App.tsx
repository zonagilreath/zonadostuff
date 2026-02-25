import { Contact } from './components/contact/Contact';
import { ParticleField } from './components/background/ParticleField';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { MetricsBar } from './components/metrics/MetricsBar';
import { Nav } from './components/nav/Nav';
import { Skills } from './components/skills/Skills';
import { Work } from './components/work/Work';

export default function App() {
  return (
    <div className="relative min-h-dvh bg-bg text-text">
      <ParticleField />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <MetricsBar />
        <Work />
        <Skills />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

