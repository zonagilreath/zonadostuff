import { Contact } from '../components/contact/Contact';
import { EncounterDemo } from '../components/demo/EncounterDemo';
import { Hero } from '../components/hero/Hero';
import { MetricsBar } from '../components/metrics/MetricsBar';
import { Skills } from '../components/skills/Skills';
import { Work } from '../components/work/Work';

export function Home() {
  return (
    <>
      <Hero />
      <MetricsBar />
      <EncounterDemo />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}
