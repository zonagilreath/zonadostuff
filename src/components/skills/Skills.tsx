import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

type SkillCard = {
  icon: string;
  title: string;
  highlighted: string[];
  normal: string[];
};

const cards: SkillCard[] = [
  {
    icon: '◈',
    title: 'Frontend & UI',
    highlighted: ['React 19', 'TypeScript'],
    normal: ['Radix UI', 'Tailwind CSS', 'Design Systems', 'Accessibility']
  },
  {
    icon: '◇',
    title: 'Backend & APIs',
    highlighted: ['Node.js', 'Fastify'],
    normal: ['GraphQL', 'tRPC', 'REST APIs', 'Zod']
  },
  {
    icon: '△',
    title: 'Data & Auth',
    highlighted: ['PostgreSQL', 'Prisma'],
    normal: ['Supabase', 'RLS', 'JWT', 'Event Sourcing']
  },
  {
    icon: '○',
    title: 'DevOps & Quality',
    highlighted: ['Docker', 'AWS'],
    normal: ['CI/CD', 'Vitest', 'React Testing Library', 'GitHub Actions']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeader label="▸ TECHNICAL STACK" title="Skills & Tools" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="border border-border/70 bg-surface/45 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="flex items-center gap-3">
                <div className="font-heading text-2xl font-bold text-accent">{c.icon}</div>
                <div className="font-heading text-xl font-bold tracking-tight text-text">
                  {c.title}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {c.highlighted.map((s) => (
                  <span
                    key={`${c.title}-${s}`}
                    className="inline-flex items-center border border-accent/35 bg-bg/40 px-2.5 py-1 font-code text-[12px] text-accent"
                  >
                    {s}
                  </span>
                ))}
                {c.normal.map((s) => (
                  <span
                    key={`${c.title}-${s}`}
                    className="inline-flex items-center border border-border/70 bg-bg/25 px-2.5 py-1 font-code text-[12px] text-muted transition-colors hover:border-accent/30 hover:text-text"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-border/70 bg-surface/45 p-6">
          <pre className="overflow-x-auto font-code text-sm leading-relaxed text-text">
{`// Real patterns from my work — type-safe, composable, tested
import { trpc } from '../utils/trpc';

function useEncounter(id: string) {
  const { data, isLoading } =
    trpc.encounter.getById.useQuery(
      { id },
      { enabled: Boolean(id) }
    );

  const dispatch = useEventStore(
    state => state.dispatch
  );

  const updateHP = useCallback(
    (characterId: string, delta: number) => {
      dispatch({
        type: 'UPDATE_HP',
        payload: { characterId, delta },
        timestamp: Date.now(),
      });
    }, [dispatch]
  );

  return { encounter: data, isLoading, updateHP };
}
`}
          </pre>
        </div>
      </Container>
    </section>
  );
}

