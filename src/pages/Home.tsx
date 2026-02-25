import { Contact } from '../components/contact/Contact';
import { Hero } from '../components/hero/Hero';
import { MetricsBar } from '../components/metrics/MetricsBar';
import { Skills } from '../components/skills/Skills';
import { Work } from '../components/work/Work';

export function Home() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}
