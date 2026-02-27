import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { ScrollToHash } from './components/routing/ScrollToHash';
import { Home } from './pages/Home';
import { InitiativeVaultCaseStudy } from './pages/work/InitiativeVault';
import { AthenahealthCaseStudy } from './pages/work/Athenahealth';
import { FamiliarCaseStudy } from './pages/work/Familiar';

export default function App() {
  return (
    <div className="app-shell">
      <Nav />
      <ScrollToHash />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/initiative-vault" element={<InitiativeVaultCaseStudy />} />
          <Route path="/work/athenahealth" element={<AthenahealthCaseStudy />} />
          <Route path="/work/familiar" element={<FamiliarCaseStudy />} />
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
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 border border-border/70 bg-bg/70 px-3 py-2 font-code text-[11px] tracking-[0.22em] text-muted transition-colors hover:border-accent/30 hover:text-text supports-[backdrop-filter]:backdrop-blur md:inline-flex"
      aria-label="Email Zona"
    >
      CONTACT
      <span className="text-accent">↗</span>
    </a>
  );
}
