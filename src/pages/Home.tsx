import { HomeHero } from '../components/home/HomeHero';
import { SelectedWork } from '../components/home/SelectedWork';
import { About } from '../components/home/About';
import { HomeContact } from '../components/home/HomeContact';

export function Home() {
  return (
    <>
      <HomeHero />
      <SelectedWork />
      <About />
      <HomeContact />
    </>
  );
}
