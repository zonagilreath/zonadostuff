import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { ScrollToHash } from './components/routing/ScrollToHash';
import { Home } from './pages/Home';
import { InitiativeVaultCaseStudy } from './pages/work/InitiativeVault';
import { AthenahealthCaseStudy } from './pages/work/Athenahealth';
import { FamiliarCaseStudy } from './pages/work/Familiar';
import { PerspectCaseStudy } from './pages/work/Perspect';

export default function App() {
  return (
    <div className="app-shell">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:border focus:border-accent/30 focus:bg-bg focus:px-4 focus:py-2 focus:font-heading focus:text-sm focus:text-text"
      >
        Skip to main content
      </a>

      <Nav />
      <ScrollToHash />

      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/initiative-vault" element={<InitiativeVaultCaseStudy />} />
          <Route path="/work/athenahealth" element={<AthenahealthCaseStudy />} />
          <Route path="/work/familiar" element={<FamiliarCaseStudy />} />
          <Route path="/work/perspect" element={<PerspectCaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <ContactQuickAccess />
    </div>
  );
}

function ContactQuickAccess() {
  return (
    <a
      href="mailto:bryson.gilreath@gmail.com"
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 border border-border/70 bg-bg/70 px-3 py-2 font-heading text-[11px] uppercase tracking-[0.14em] text-muted transition-colors hover:border-accent/30 hover:text-text supports-[backdrop-filter]:backdrop-blur md:inline-flex"
      aria-label="Email Zona"
    >
      HIRE ME
      <span className="text-accent">↗</span>
    </a>
  );
}
