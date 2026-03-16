import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

const SCREENSHOTS = {
  overview: '/images/iv-01-overview.png',
  timeline: '/images/iv-02-timeline.png',
  spells:   '/images/iv-03-spells.png',
  features: '/images/iv-04-features.png',
} as const;

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center border border-border/70 bg-bg/25 px-2.5 py-1 font-code text-[12px] text-muted">
      {children}
    </span>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <div className="font-code text-xs tracking-[0.22em] text-muted">{label}</div>
      <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Screenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10 space-y-3">
      <img
        src={src}
        alt={alt}
        className="w-full border border-border/70 object-cover"
        loading="lazy"
      />
      <figcaption className="font-code text-[11px] tracking-[0.18em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}

export function InitiativeVaultCaseStudy() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">CASE STUDY · PRIVATE BETA</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Initiative Vault
          </h1>

          <p className="mt-2 font-code text-xs tracking-[0.22em] text-muted">
            Full-stack encounter manager for tabletop RPGs
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Initiative Vault is a professional-grade encounter manager for tabletop RPGs, built around
            one idea: speed at the table. It keeps initiative order, monster stats, spells, class
            features, and dice in a single screen designed for real play. I built the full stack as
            founding engineer — event-sourced state, a schema-driven SRD content system, type-safe
            APIs, and a React 19 UI tuned for dense, legible information.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://initiative-vault.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Live app
              <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/gelatinous-labs/initiative-vault"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-5 py-3 font-code text-sm font-semibold text-text transition-colors hover:border-accent/30"
            >
              Source
              <span aria-hidden>↗</span>
            </a>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 border border-border/70 bg-transparent px-5 py-3 font-code text-sm font-semibold text-muted transition-colors hover:border-accent/30 hover:text-text"
            >
              Back
              <span aria-hidden>←</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Tag>React 19</Tag>
            <Tag>TypeScript</Tag>
            <Tag>tRPC · Zod</Tag>
            <Tag>PostgreSQL · Prisma</Tag>
            <Tag>Supabase Auth · RLS</Tag>
            <Tag>Event sourcing</Tag>
            <Tag>Radix UI · Tailwind</Tag>
            <Tag>Railway · Vercel · GitHub Actions</Tag>
          </div>
        </div>

        <Screenshot
          src={SCREENSHOTS.overview}
          alt="Initiative Vault overview: three-panel layout showing encounter list, monster detail card, and dice roller"
          caption="Overview — encounter order, monster stat block, compendium search, and dice roller in one screen"
        />

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-12">

              <section>
                <SectionTitle label="01" title="Context and scope" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Most combat trackers fail at the moment they’re needed most: mid-fight, under time
                    pressure, with a table full of people waiting on you. They bury the important
                    information under configuration, modal flows, and dense layouts designed for setup,
                    not play.
                  </p>
                  <p>
                    Initiative Vault prioritizes the opposite: the high-frequency actions — advancing
                    turns, updating HP, tracking conditions — are front and center. Everything else is
                    a keystroke or click away but never in the way.
                  </p>
                  <p>
                    I’m building this as founding engineer at Gelatinous Labs, responsible for the
                    full stack: schema design, API layer, auth model, UI system, and deployment
                    infrastructure.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="Event-sourced encounter state" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    All encounter mutations — HP deltas, conditions applied or removed, lineup
                    changes — are stored as typed events rather than overwritten row state. The UI
                    derives current combatant state by replaying the event log from the beginning of
                    the encounter, or from any point in it.
                  </p>
                  <p>
                    This gives us rewindable history for free: a DM can step backward through the
                    timeline to review what happened, correct a mistake, or settle a rules dispute,
                    then jump back to the present. Undo/redo is a pointer move in the event stream,
                    not a special-case reducer.
                  </p>
                  <p>
                    The architecture also gives us a clean path to multi-user sync: because state is
                    derived from events, future WebSocket collaboration just needs to broadcast new
                    events and merge them into the log — the reducer handles the rest without changes.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.timeline}
                  alt="Encounter timeline rewound to a past state, showing HP values and conditions at that point in the fight"
                  caption="Rewinding the encounter timeline — HP deltas and conditions recomputed from the event log at any prior state"
                />

                <div className="mt-6 space-y-2">
                  {[
                    'Typed event log stored in PostgreSQL with Prisma models',
                    'Combatant state derived on read — not written into mutable rows',
                    'Undo/redo as pointer position in the event stream',
                    'Architecture designed for future WebSocket multi-user sync',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 font-code text-accent">▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle label="03" title="SRD content system and action economy" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The SRD content starts as markdown from a community source. Rather than hardcode
                    monster blocks and class features as static records, we analyzed patterns in both
                    the markdown source and the official SRD 5.2 document to build a schema that
                    applies consistent structure to all of it: monsters, spells, class features,
                    feats, and equipment.
                  </p>
                  <p>
                    On top of that schema sits an action economy system. It derives “action grants”
                    from categorical definitions — class feature sets, monster stat blocks — and then
                    compiles those grants with a specific combatant’s particulars: their actual
                    level, equipment, and any customized stats. The result is a runtime menu of
                    available actions and abilities for each participant, built fresh per combatant
                    rather than hard-coded per type.
                  </p>
                  <p>
                    This means a Level 11 Druid and a Level 3 Druid see different Wild Shape options
                    automatically. A monster with a custom HP pool or modified stat block still gets
                    the correct attack calculations. The content layer stays data-driven all the way
                    down.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.features}
                  alt="Wild Shape class feature panel showing Beast Shapes table and rules text rendered from structured SRD data"
                  caption="Class feature panel — tabular rules and prose rendered from the same structured SRD schema, not hard-coded markup"
                />
              </section>

              <section>
                <SectionTitle label="04" title="Spell and resource management" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The spell manager keeps library and prepared list in a single modal, searchable
                    and filterable without losing context. Selecting a spell opens its full rule text
                    alongside the list — so a player can look something up and manage their prepared
                    slots in the same interaction.
                  </p>
                  <p>
                    Keyboard navigation is implemented for the primary flows and we’re targeting full
                    keyboard-only operation by general availability, so the app works at a physical
                    table without needing to hand off a mouse.
                  </p>
                </div>

                <Screenshot
                  src={SCREENSHOTS.spells}
                  alt="Spell manager modal showing Library and Prepared tabs, spell search, and spell detail panel"
                  caption="Spell manager — library, prepared list, and rule text in one modal, optimized for mid-session lookup"
                />
              </section>

              <section>
                <SectionTitle label="05" title="Stack and architecture" />
                <div className="mt-6 space-y-2">
                  {[
                    'React 19 + TypeScript — context-based state, custom hooks, Radix UI primitives, Tailwind design tokens',
                    'tRPC + Zod — end-to-end type safety from PostgreSQL queries to UI components',
                    'PostgreSQL + Prisma — multi-tenant schema with RLS policies enforcing campaign and character ownership at the database level',
                    'Supabase Auth + JWT verification — authorization at both app and database layers',
                    'Fastify server — CORS, Helmet, rate limiting, Railway deployment',
                    'CI/CD — GitHub Actions for TypeScript validation, ESLint, Vitest, and Prettier on every push',
                    'Frontend deployed to Vercel, backend to Railway with environment-specific configs',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 font-code text-accent">▸</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle label="06" title="What’s next" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Currently in private beta. The next phase focuses on full keyboard-only
                    navigation, multi-user session sync over WebSockets, and expanding encounter
                    tooling — all without compromising the core loop’s speed and legibility.
                  </p>
                </div>
              </section>

            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">AT A GLANCE</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">ROLE</div>
                <div className="mt-1 text-text">Founding engineer</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">COMPANY</div>
                <div className="mt-1 text-text">Gelatinous Labs</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">STATUS</div>
                <div className="mt-1 text-text">Private beta</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">STACK</div>
                <div className="mt-1 text-text">React · tRPC · PostgreSQL · Supabase</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">PATTERNS</div>
                <div className="mt-1 text-text">Event sourcing · RLS · CI/CD</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">DEPLOY</div>
                <div className="mt-1 text-text">Railway + Vercel</div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
