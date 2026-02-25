import { useState } from 'react';
import { Button, ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

const EMAIL = 'bryson.gilreath@gmail.com';

export function Contact() {
  const [copied, setCopied] = useState(false);

  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader
            label="▸ LET'S WORK TOGETHER"
            title="Get In Touch"
            right={null}
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
            I'm available for freelance React and full-stack development work. Whether you need a
            complex UI, a type-safe API, or end-to-end application architecture — let's build
            something great.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink variant="primary" href={`mailto:${EMAIL}`}>
              Email Me
            </ButtonLink>

            <Button
              variant="secondary"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(EMAIL);
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1400);
                } catch {
                  // no-op; clipboard may be unavailable in some contexts
                }
              }}
            >
              {copied ? '✓ Copied!' : 'Copy Email'}
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
              href="https://linkedin.com/in/zonagilreath"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
              href="https://github.com/ZonaGilreath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

