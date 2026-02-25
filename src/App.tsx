import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { MetricsBar } from './components/metrics/MetricsBar';
import { Nav } from './components/nav/Nav';
import { Skills } from './components/skills/Skills';
import { Work } from './components/work/Work';

export default function App() {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <Nav />
      <main>
        <Hero />
        <MetricsBar />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

