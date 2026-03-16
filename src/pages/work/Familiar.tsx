import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

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

function EmbeddedDemo({ src }: { src: string }) {
  return (
    <div className="mt-8 overflow-hidden rounded-lg border border-border/70 bg-bg/20">
      <div className="flex items-center justify-between gap-3 border-b border-border/70 bg-bg/35 px-4 py-3">
        <div className="font-code text-xs tracking-[0.22em] text-muted">EMBEDDED DEMO</div>
        <a
          className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
          href={src}
          target="_blank"
          rel="noreferrer"
        >
          Open in new tab ↗
        </a>
      </div>
      <div className="aspect-[16/10] w-full">
        <iframe
          title="Familiar embedded demo"
          src={src}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
        />
      </div>
    </div>
  );
}

export function FamiliarCaseStudy() {
  const live = 'https://familiar-encounters.vercel.app/';

  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">CASE STUDY</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Familiar
          </h1>

          <p className="mt-2 font-code text-xs tracking-[0.22em] text-muted">
            AI-powered D&D 5e encounter generator
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Familiar generates structured, ready-to-run encounter sheets for dungeon masters. It
            takes optional form input and produces nine distinct encounter types — each with its own
            schema, run-sheet layout, and type-specific guidance — driven by a RAG pipeline built
            on the D&D 5e SRD.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Live app
              <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/zonagilreath/familiar"
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
            <Tag>Next.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Gemini 2.5 Flash</Tag>
            <Tag>RAG · Tool calling</Tag>
            <Tag>Structured JSON</Tag>
            <Tag>Context caching</Tag>
          </div>
        </div>

        <EmbeddedDemo src={live} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-12">

              <section>
                <SectionTitle label="01" title="The retrieval problem" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The D&D 5e SRD covers hundreds of monsters, hundreds of spells, and a large body
                    of rules and encounter design guidance. Loading it all into every generation
                    request is wasteful and context-inefficient. Loading none of it produces
                    hallucinated stat blocks the moment the model reaches for a specific creature.
                  </p>
                  <p>
                    The solution is a two-tier RAG architecture. A curated subset of the SRD —
                    encounter design guidelines, rules for skill challenges, trap design principles,
                    social encounter frameworks, and general guidance for each encounter type — loads
                    into a Gemini API-level context cache at server startup and stays warm across
                    requests. The large datasets (monster stat blocks and spells) stay out of the
                    context window entirely, retrieved only when the model asks for them.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="Tool-backed SRD datasets" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The model has access to four tools, organized by dataset type. Two operate on
                    the creature dataset (monsters and animals parsed from the SRD markdown), and two
                    on the spell dataset. Within each dataset there’s a search tool — filtering by
                    name, type, CR range, size, spell school, class, and concentration — and a
                    detail tool that returns the full stat block or spell description by exact name.
                  </p>
                  <p>
                    The generation loop runs up to ten tool call rounds. On each round the model
                    can issue multiple calls in parallel; the server executes them, appends the
                    results to the conversation, and continues. The model typically searches first
                    to find candidates, then fetches full stat blocks for the creatures it selects.
                    The loop terminates when the model returns a text response with no pending tool
                    calls.
                  </p>
                </div>
                <div className="mt-6 space-y-2">
                  {[
                    'searchCreatures — filter by name, type, CR range, size; returns up to 20 summary records',
                    'getCreature — full stat block by exact name, including abilities, actions, and lore',
                    'searchSpells — filter by name, school, level range, class, concentration',
                    'getSpell — full spell description by exact name',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-0.5 font-code text-accent">▸</span>
                      <span className="font-code">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle label="03" title="Encounter schema design" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The output is a discriminated union of nine encounter kinds: combat, puzzle,
                    social, skill challenge, investigation, trap, exploration, chase, and hazard.
                    Every kind shares a common envelope — title, goal, stakes, setup, and per-class
                    spotlight hooks — and extends it with a type-specific payload.
                  </p>
                  <p>
                    The payloads encode design intent structurally. A combat encounter carries
                    creature roles (brute, controller, lurker, etc.), terrain features typed as
                    cover, obstacle, hazard, or interactable, an XP budget, and tactical notes
                    per creature type. A social encounter carries NPC profiles with ideals, bonds,
                    flaws, objection lists, and patience windows. A puzzle carries clue sets where
                    each clue names the conclusion it supports and how it’s discovered. These
                    aren’t free-form strings — the schema constrains what the model can return and
                    guarantees the UI has typed fields to render.
                  </p>
                  <p>
                    The encounter design guidelines in the cached context specify what good looks
                    like for each type: combat encounters require at least two terrain features;
                    puzzles require at least three clues per conclusion and two solution paths;
                    investigation nodes must each carry clues that are independently sufficient;
                    traps must include at least two countermeasures; social encounters must have
                    branching consequences for success, partial success, and failure. The schema
                    enforces the structure; the guidelines shape the content.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="04" title="Context caching" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The Gemini API supports explicit context caching: a named, server-side cache
                    that stores a system prompt, a priming turn, and tool declarations against a
                    specific model. Cached content is billed at a reduced token rate and doesn’t
                    count toward per-request input tokens.
                  </p>
                  <p>
                    Familiar creates the cache at first request and keeps the reference for 30
                    minutes. Each generation call attaches the cache name rather than resending the
                    full SRD context. If cache creation fails — cold start, quota limit, model
                    mismatch — the server falls back to an uncached system prompt transparently.
                    The degraded path is slower and more expensive per request but otherwise
                    identical in behavior.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="05" title="Tradeoffs" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The generation endpoint buffers a complete JSON response rather than streaming
                    partial text. Streaming structured data mid-object is fragile — partial JSON
                    isn’t parseable, and a partially rendered run sheet is harder to read than a
                    complete one that appears at once. The tradeoff is a longer wait before the
                    first pixel updates, mitigated with a loading state.
                  </p>
                  <p>
                    The tool call loop adds latency proportional to the number of rounds the model
                    takes. A combat encounter that searches for creatures by CR, fetches two full
                    stat blocks, then generates adds 2–3 round-trips over a simple text generation.
                    That cost is intentional — grounded stat blocks are worth the wait.
                  </p>
                </div>
              </section>

            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">AT A GLANCE</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">MODEL</div>
                <div className="mt-1 text-text">Gemini 2.5 Flash</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">RETRIEVAL</div>
                <div className="mt-1 text-text">2-tier RAG · context cache + tool calls</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">TOOLS</div>
                <div className="mt-1 text-text">4 · creature search, creature detail, spell search, spell detail</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">OUTPUT</div>
                <div className="mt-1 text-text">9-kind discriminated union · typed run sheet</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">ENCOUNTER TYPES</div>
                <div className="mt-1 text-text">Combat · Puzzle · Social · Skill Challenge · Investigation · Trap · Exploration · Chase · Hazard</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">STACK</div>
                <div className="mt-1 text-text">Next.js · TypeScript · Vercel</div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
