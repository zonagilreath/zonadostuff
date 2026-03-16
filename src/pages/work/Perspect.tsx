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

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-6 overflow-x-auto border border-border/70 bg-bg/40 p-4 font-code text-[13px] leading-relaxed text-muted">
      <code>{children}</code>
    </pre>
  );
}

function Screenshot({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="mt-6">
      <div className="overflow-hidden border border-border/70">
        <img src={src} alt={alt} className="w-full" loading="lazy" />
      </div>
      {caption && (
        <figcaption className="mt-2 font-code text-[11px] tracking-[0.12em] text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
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
          title="Perspect embedded demo"
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

export function PerspectCaseStudy() {
  const live = 'https://perspect-iota.vercel.app/';

  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">SIDE PROJECT · 2025</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Perspect
          </h1>

          <p className="mt-2 font-code text-xs tracking-[0.22em] text-muted">
            Schema → TypeScript · Zod · tRPC · React Forms
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Paste a Prisma schema, a SQL DDL block, or a plain-English description of your data
            model — and get production-quality TypeScript scaffolding back: Zod validators, tRPC
            routers, React forms, and typed interfaces. Not toy output. Opinionated, type-safe
            code that reflects how modern full-stack TypeScript apps should be built.
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
              href="https://github.com/zonagilreath/perspect"
              target="_blank"
              rel="noopener noreferrer"
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
            <Tag>Next.js 14</Tag>
            <Tag>Vercel AI SDK</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Zod</Tag>
            <Tag>Monaco Editor</Tag>
            <Tag>tRPC</Tag>
          </div>
        </div>

        <EmbeddedDemo src={live} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-12">

              <section>
                <SectionTitle label="01" title="The problem" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Every TypeScript project with a database eventually writes the same boilerplate:
                    an interface matching the schema, a Zod validator for every input shape, a
                    tRPC router with CRUD procedures, and a form component wired up to a resolver.
                    It’s mechanical work — low-value, high-volume, and easy to let drift out of
                    sync with the actual schema.
                  </p>
                  <p>
                    Perspect eliminates that loop. You define the schema once — in the format you
                    already have — and the scaffolding follows from it deterministically.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="How it works" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The core architectural decision is an intermediate representation (IR) that
                    every input format normalizes into before any generation happens. Prisma schemas
                    and SQL DDL go through deterministic parsers — no AI involved. Plain-English
                    descriptions go through an LLM that outputs structured IR directly, never
                    raw code.
                  </p>
                  <p>
                    Once you have the IR, code generation is scoped and predictable. The AI’s
                    job is generating idiomatic code from clean structured data, not interpreting
                    freeform text. TypeScript types and Zod schemas are generated entirely
                    deterministically — no LLM call at all.
                  </p>
                </div>

                <CodeBlock>{`// The pipeline
┌──────────────┐     ┌──────────────────┐     ┌───────────────────┐
│  Schema In   │ ──▶ │  Normalize to IR │ ──▶ │  Generate Code    │
│              │     │                  │     │                   │
│ • Prisma     │     │  Deterministic   │     │  LLM + streaming  │
│ • SQL DDL    │     │  for Prisma/SQL, │     │  with structured  │
│ • English    │     │  LLM for English │     │  prompt templates │
└──────────────┘     └──────────────────┘     └───────────────────┘`}
                </CodeBlock>
              </section>

              <section>
                <SectionTitle label="03" title="Deterministic generation" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    TypeScript types are generated with zero LLM involvement: enums become string
                    literal unions, primary keys become branded ID types
                    (<code className="font-code text-sm">UserId = string & {'{'}__brand: "UserId"{'}'}</code>),
                    and the generator produces full interfaces, Create/Update input types,
                    WithRelations types for every model with a relation, and cursor-based
                    pagination utilities.
                  </p>
                  <p>
                    The Prisma parser walks the schema line-by-line: model blocks, enum blocks,
                    relation annotations, optional markers, list types, <code className="font-code text-sm">@id</code>,{' '}
                    <code className="font-code text-sm">@unique</code>, and <code className="font-code text-sm">@default</code> attributes all
                    map to typed IR fields. SQL DDL goes through an equivalent parser that handles
                    CREATE TABLE, column definitions, primary keys, foreign keys, and
                    NOT NULL constraints.
                  </p>
                </div>

                <CodeBlock>{`// From a Prisma model...
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      Role     @default(USER)
  posts     Post[]
  createdAt DateTime @default(now())
}

// ...Perspect generates:
export type UserId = string & { __brand: "UserId" };

export interface User {
  id: UserId;
  email: string;
  name?: string;
  role: Role;
  createdAt: Date;
}

export interface CreateUserInput {
  email: string;
  name?: string;
  role?: Role;
}

export type UpdateUserInput = Partial<CreateUserInput>;

export interface UserWithRelations extends User {
  posts: Post[];
}`}
                </CodeBlock>

                <Screenshot
                  src="/images/percept_types.png"
                  alt="Perspect Types output tab showing branded ID types and full interfaces"
                  caption="TYPES TAB · branded IDs, interfaces, Create/Update inputs, WithRelations — no LLM"
                />
              </section>

              <section>
                <SectionTitle label="04" title="Generation targets" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Four generation targets, configurable via the settings panel. Zod produces
                    create, update, and full validation schemas with string transforms. tRPC
                    produces a full CRUD router with cursor-based pagination, typed errors, and
                    Zod input validation on every procedure. React Forms produces create/edit
                    components wired to react-hook-form with a Zod resolver, or native
                    controlled state — your choice. TypeScript Types is fully deterministic, no
                    LLM.
                  </p>
                  <p>
                    Config options scope what you get: tRPC vs REST style, react-hook-form vs
                    native state, Prisma vs Drizzle ORM style in the router, JSDoc comments on
                    or off, and strict mode that enforces <code className="font-code text-sm">z.string().min(1)</code> on
                    required strings.
                  </p>
                </div>

                <Screenshot
                  src="/images/percept_zod.png"
                  alt="Perspect Zod output tab showing create, update and full validation schemas"
                  caption="ZOD TAB · create/update/full schemas, z.string().min(1) on required fields, z.coerce.date() for timestamps"
                />

                <Screenshot
                  src="/images/percept_trpc.png"
                  alt="Perspect tRPC output tab showing full CRUD router with cursor pagination"
                  caption="TRPC TAB · CRUD procedures, protectedProcedure for mutations, TRPCError with typed codes, cursor pagination"
                />

                <Screenshot
                  src="/images/percept_react_form.png"
                  alt="Perspect React Forms output tab showing create and edit form components"
                  caption="FORMS TAB · create + edit components, react-hook-form + Zod resolver, Tailwind, inline validation errors"
                />
              </section>

              <section>
                <SectionTitle label="05" title="AI integration" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Vercel AI SDK handles streaming and provider abstraction — swapping between
                    Anthropic and OpenAI is a one-line config change. Streaming matters here
                    because Zod schemas and tRPC routers for a reasonably complex model are
                    several hundred lines; users shouldn’t wait for a full response before
                    seeing output.
                  </p>
                  <p>
                    Prompt templates are structured per target, not generic. Each one receives
                    the serialized IR and generates code for exactly one output type with
                    consistent formatting and import conventions. The LLM is never asked to
                    parse or interpret the schema — that already happened deterministically
                    before the prompt is assembled.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="06" title="Editor experience" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Both the input and output panes use Monaco Editor — the same editor that
                    powers VS Code — so you get syntax highlighting, line numbers, and
                    keyboard shortcuts in both directions. Output is tabbed: Types, Zod, tRPC,
                    and Forms are each accessible without leaving the page, and each tab shows
                    the relevant generated filename.
                  </p>
                  <p>
                    The layout is a resizable two-pane split using react-resizable-panels,
                    so you can give more real estate to whichever side you’re working with.
                    Built-in example schemas let you try the tool without writing anything.
                  </p>
                </div>
              </section>

            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">AT A GLANCE</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">TYPE</div>
                <div className="mt-1 text-text">Side project</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">INPUT</div>
                <div className="mt-1 text-text">Prisma · SQL DDL · Plain English</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">OUTPUT</div>
                <div className="mt-1 text-text">TypeScript types · Zod · tRPC · React Forms</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">STACK</div>
                <div className="mt-1 text-text">Next.js 14 · Vercel AI SDK · Monaco · Zod · Radix UI</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">LINKS</div>
                <div className="mt-1 space-y-1">
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-code text-[12px] text-accent hover:underline"
                  >
                    Live demo ↗
                  </a>
                  <a
                    href="https://github.com/zonagilreath/perspect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-code text-[12px] text-accent hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
