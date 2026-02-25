import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { CodeBlock } from '../code/CodeBlock';
import { Button } from '../ui/Button';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

type Condition = 'Poisoned' | 'Blessed' | 'Stunned';

type Combatant = {
  id: string;
  name: string;
  initiative: number;
  hp: number;
  maxHp: number;
  conditions: Condition[];
};

type EncounterState = {
  combatants: Combatant[];
};

type EncounterEvent =
  | {
      type: 'ADD_COMBATANT';
      payload: { id: string; name: string; initiative: number; maxHp: number };
      timestamp: number;
    }
  | {
      type: 'UPDATE_HP';
      payload: { id: string; delta: number };
      timestamp: number;
    }
  | {
      type: 'TOGGLE_CONDITION';
      payload: { id: string; condition: Condition };
      timestamp: number;
    }
  | {
      type: 'SET_INITIATIVE';
      payload: { id: string; initiative: number };
      timestamp: number;
    };

const INITIAL_STATE: EncounterState = { combatants: [] };

const INITIAL_EVENTS: EncounterEvent[] = [
  {
    type: 'ADD_COMBATANT',
    payload: { id: 'c1', name: 'Nyx', initiative: 18, maxHp: 27 },
    timestamp: 1710000000000
  },
  {
    type: 'ADD_COMBATANT',
    payload: { id: 'c2', name: 'Dorian', initiative: 14, maxHp: 34 },
    timestamp: 1710000000500
  },
  {
    type: 'ADD_COMBATANT',
    payload: { id: 'c3', name: 'Rook', initiative: 11, maxHp: 22 },
    timestamp: 1710000001100
  }
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function applyEvent(state: EncounterState, event: EncounterEvent): EncounterState {
  switch (event.type) {
    case 'ADD_COMBATANT': {
      const next: Combatant = {
        id: event.payload.id,
        name: event.payload.name,
        initiative: event.payload.initiative,
        hp: event.payload.maxHp,
        maxHp: event.payload.maxHp,
        conditions: []
      };
      return { ...state, combatants: [...state.combatants, next] };
    }
    case 'UPDATE_HP': {
      return {
        ...state,
        combatants: state.combatants.map((c) =>
          c.id !== event.payload.id
            ? c
            : { ...c, hp: clamp(c.hp + event.payload.delta, 0, c.maxHp) }
        )
      };
    }
    case 'TOGGLE_CONDITION': {
      return {
        ...state,
        combatants: state.combatants.map((c) => {
          if (c.id !== event.payload.id) return c;
          const has = c.conditions.includes(event.payload.condition);
          const conditions = has
            ? c.conditions.filter((x) => x !== event.payload.condition)
            : [...c.conditions, event.payload.condition];
          return { ...c, conditions };
        })
      };
    }
    case 'SET_INITIATIVE': {
      return {
        ...state,
        combatants: state.combatants.map((c) =>
          c.id !== event.payload.id ? c : { ...c, initiative: event.payload.initiative }
        )
      };
    }
    default: {
      const _exhaustive: never = event;
      return state;
    }
  }
}

function replay(state: EncounterState, events: EncounterEvent[], cursor: number) {
  let next = state;
  for (let i = 0; i < cursor; i++) next = applyEvent(next, events[i]!);
  return next;
}

function formatEventLabel(e: EncounterEvent) {
  switch (e.type) {
    case 'ADD_COMBATANT':
      return `ADD_COMBATANT · ${e.payload.name}`;
    case 'UPDATE_HP':
      return `UPDATE_HP · ${e.payload.delta > 0 ? '+' : ''}${e.payload.delta}`;
    case 'TOGGLE_CONDITION':
      return `TOGGLE_CONDITION · ${e.payload.condition}`;
    case 'SET_INITIATIVE':
      return `SET_INITIATIVE · ${e.payload.initiative}`;
    default: {
      const _exhaustive: never = e;
      return _exhaustive;
    }
  }
}

function prettyJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}

function diffState(before: EncounterState, after: EncounterState) {
  const lines: string[] = [];
  const byIdBefore = new Map(before.combatants.map((c) => [c.id, c]));
  const byIdAfter = new Map(after.combatants.map((c) => [c.id, c]));

  for (const [id, c] of byIdAfter) {
    const prev = byIdBefore.get(id);
    if (!prev) {
      lines.push(`+ added ${c.name} (init ${c.initiative}, hp ${c.hp}/${c.maxHp})`);
      continue;
    }
    if (prev.initiative !== c.initiative) lines.push(`~ ${c.name}.initiative: ${prev.initiative} → ${c.initiative}`);
    if (prev.hp !== c.hp) lines.push(`~ ${c.name}.hp: ${prev.hp} → ${c.hp}`);
    if (prev.conditions.join(',') !== c.conditions.join(',')) {
      lines.push(`~ ${c.name}.conditions: [${prev.conditions.join(', ')}] → [${c.conditions.join(', ')}]`);
    }
  }

  for (const [id, c] of byIdBefore) {
    if (!byIdAfter.has(id)) lines.push(`- removed ${c.name}`);
  }

  if (!lines.length) return ['(no state change)'];
  return lines;
}

function newId() {
  return `c_${Math.random().toString(16).slice(2)}_${Date.now().toString(16)}`;
}

export function InitiativeVaultDemo() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<'encounter' | 'events' | 'inspector'>('encounter');

  const [events, setEvents] = useState<EncounterEvent[]>(INITIAL_EVENTS);
  const [cursor, setCursor] = useState(() => INITIAL_EVENTS.length);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(() =>
    INITIAL_EVENTS.length ? INITIAL_EVENTS.length - 1 : null
  );

  const cursorRef = useRef(cursor);
  useEffect(() => {
    cursorRef.current = cursor;
  }, [cursor]);

  const updateCursor = (next: number | ((current: number) => number)) => {
    setCursor((current) => {
      const value = typeof next === 'function' ? next(current) : next;
      cursorRef.current = value;
      return value;
    });
  };

  const derived = useMemo(() => replay(INITIAL_STATE, events, cursor), [cursor, events]);

  const ordered = useMemo(() => {
    return [...derived.combatants].sort((a, b) => b.initiative - a.initiative);
  }, [derived.combatants]);

  const selectedEvent = selectedIndex == null ? null : events[selectedIndex] ?? null;
  const stateBeforeSelected =
    selectedIndex == null ? replay(INITIAL_STATE, events, cursor) : replay(INITIAL_STATE, events, selectedIndex);
  const stateAfterSelected =
    selectedIndex == null
      ? replay(INITIAL_STATE, events, cursor)
      : replay(INITIAL_STATE, events, Math.min(events.length, selectedIndex + 1));

  const dispatch = (event: Omit<EncounterEvent, 'timestamp'>) => {
    const timestamp = Date.now();
    const nextEvent = { ...event, timestamp } as EncounterEvent;
    const baseLen = cursorRef.current;

    setEvents((prev) => {
      const base = prev.slice(0, baseLen);
      return [...base, nextEvent];
    });

    updateCursor(baseLen + 1);
    setSelectedIndex(baseLen);
  };

  const reset = () => {
    setEvents(INITIAL_EVENTS);
    updateCursor(INITIAL_EVENTS.length);
    setSelectedIndex(INITIAL_EVENTS.length - 1);
  };

  const isLive = cursor === events.length;

  const header = (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="font-code text-[11px] tracking-[0.22em] text-accent/90">
          ▸ INITIATIVE VAULT INTERACTIVE DEMO
        </div>
        <div className="mt-2 text-sm text-muted">
          Event-sourced encounter state · replayable timeline · typed events · state diffs
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <button
          className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-3 py-2 font-code text-[11px] tracking-[0.22em] text-muted transition-colors hover:border-accent/30 hover:text-text"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? 'CLOSE DEMO' : 'OPEN DEMO'}
          <span className="text-accent">{open ? '×' : '↗'}</span>
        </button>
        <button
          className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-3 py-2 font-code text-[11px] tracking-[0.22em] text-muted transition-colors hover:border-accent/30 hover:text-text"
          onClick={reset}
          disabled={!open}
        >
          RESET
        </button>
      </div>
    </div>
  );

  return (
    <div className="mt-7 border border-border/70 bg-bg/25 p-5">
      {header}

      {open ? (
        <div className="mt-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-code text-[11px] tracking-[0.22em] text-muted">
              <span className={isLive ? 'text-accent' : 'text-muted'}>{isLive ? 'LIVE' : 'REPLAY'}</span>
              <span className="text-muted/70">·</span>
              <span>
                cursor: <span className="text-text">{cursor}</span> / {events.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                className="px-3 py-2 font-code text-[11px] tracking-[0.22em]"
                onClick={() => updateCursor((c) => Math.max(0, c - 1))}
                disabled={cursor === 0}
              >
                Undo
              </Button>
              <Button
                variant="secondary"
                className="px-3 py-2 font-code text-[11px] tracking-[0.22em]"
                onClick={() => updateCursor((c) => Math.min(events.length, c + 1))}
                disabled={cursor === events.length}
              >
                Redo
              </Button>
            </div>
          </div>

          <input
            className="w-full accent-[#6ee7b7]"
            type="range"
            min={0}
            max={events.length}
            value={cursor}
            onChange={(e) => {
              const next = Number(e.target.value);
              updateCursor(next);
              setSelectedIndex(next ? next - 1 : null);
            }}
          />

          <div className="mt-5 lg:hidden">
            <div className="inline-flex overflow-hidden border border-border/70 bg-bg/30">
              {(['encounter', 'events', 'inspector'] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setTab(k)}
                  className={[
                    'px-3 py-2 font-code text-[11px] tracking-[0.22em] transition-colors',
                    tab === k ? 'bg-accent/15 text-text' : 'text-muted hover:text-text'
                  ].join(' ')}
                >
                  {k.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            <div className={[tab === 'encounter' ? 'block' : 'hidden', 'lg:block'].join(' ')}>
              <EncounterPanel
                combatants={ordered}
                onUpdateHp={(id, delta) => dispatch({ type: 'UPDATE_HP', payload: { id, delta } })}
                onToggleCondition={(id, condition) =>
                  dispatch({ type: 'TOGGLE_CONDITION', payload: { id, condition } })
                }
                onSetInitiative={(id, initiative) =>
                  dispatch({ type: 'SET_INITIATIVE', payload: { id, initiative } })
                }
                onAddCombatant={(name, initiative, maxHp) =>
                  dispatch({
                    type: 'ADD_COMBATANT',
                    payload: { id: newId(), name, initiative, maxHp }
                  })
                }
                prefersReducedMotion={prefersReducedMotion}
              />
            </div>

            <div className={[tab === 'events' ? 'block' : 'hidden', 'lg:block'].join(' ')}>
              <EventsPanel
                events={events}
                cursor={cursor}
                selectedIndex={selectedIndex}
                onSelect={(idx) => setSelectedIndex(idx)}
              />
            </div>

            <div className={[tab === 'inspector' ? 'block' : 'hidden', 'lg:block'].join(' ')}>
              <InspectorPanel
                selectedIndex={selectedIndex}
                selectedEvent={selectedEvent}
                diffLines={diffState(stateBeforeSelected, stateAfterSelected)}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PanelShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-border/70 bg-surface/30">
      <div className="border-b border-border/70 bg-bg/25 px-4 py-3 font-code text-[11px] tracking-[0.22em] text-muted">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function EncounterPanel({
  combatants,
  onUpdateHp,
  onToggleCondition,
  onSetInitiative,
  onAddCombatant,
  prefersReducedMotion
}: {
  combatants: Combatant[];
  onUpdateHp: (id: string, delta: number) => void;
  onToggleCondition: (id: string, condition: Condition) => void;
  onSetInitiative: (id: string, initiative: number) => void;
  onAddCombatant: (name: string, initiative: number, maxHp: number) => void;
  prefersReducedMotion: boolean;
}) {
  const [name, setName] = useState('');
  const [initiative, setInitiative] = useState(12);
  const [maxHp, setMaxHp] = useState(24);

  return (
    <PanelShell title="ENCOUNTER">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {combatants.map((c) => {
            const hpPct = c.maxHp ? c.hp / c.maxHp : 0;
            return (
              <div key={c.id} className="border border-border/70 bg-bg/20 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-heading text-sm font-bold text-text">{c.name}</div>
                    <div className="mt-1 font-code text-[10px] tracking-[0.22em] text-muted">
                      init: <span className="text-text">{c.initiative}</span>
                      <span className="text-muted/70"> · </span>
                      hp: <span className="text-text">{c.hp}</span>/{c.maxHp}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-code text-[10px] tracking-[0.22em] text-muted">INIT</span>
                    <input
                      className="w-16 border border-border/70 bg-bg/35 px-2 py-1 font-code text-xs text-text outline-none focus:border-accent/40"
                      type="number"
                      value={c.initiative}
                      onChange={(e) => onSetInitiative(c.id, Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="mt-2 h-1.5 w-full overflow-hidden bg-border/40">
                  <div
                    className={[
                      'h-full bg-accent/70',
                      prefersReducedMotion ? '' : 'transition-[width] duration-300 ease-out'
                    ].join(' ')}
                    style={{ width: `${clamp(hpPct * 100, 0, 100)}%` }}
                  />
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {([-5, -1, +1, +5] as const).map((delta) => (
                    <button
                      key={delta}
                      onClick={() => onUpdateHp(c.id, delta)}
                      className="border border-border/70 bg-bg/30 px-2.5 py-1 font-code text-[11px] tracking-[0.22em] text-muted transition-colors hover:border-accent/30 hover:text-text"
                    >
                      {delta > 0 ? `+${delta}` : delta}
                    </button>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {(['Poisoned', 'Blessed', 'Stunned'] as const).map((cond) => {
                    const on = c.conditions.includes(cond);
                    return (
                      <button
                        key={cond}
                        onClick={() => onToggleCondition(c.id, cond)}
                        className={[
                          'border px-2.5 py-1 font-code text-[11px] tracking-[0.22em] transition-colors',
                          on
                            ? 'border-accent/40 bg-accent/10 text-text'
                            : 'border-border/70 bg-bg/25 text-muted hover:border-accent/30 hover:text-text'
                        ].join(' ')}
                      >
                        {cond}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="border border-border/70 bg-bg/20 p-3">
          <div className="font-code text-[11px] tracking-[0.22em] text-muted">ADD COMBATANT</div>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <input
              className="border border-border/70 bg-bg/35 px-2 py-2 font-code text-xs text-text outline-none focus:border-accent/40"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border border-border/70 bg-bg/35 px-2 py-2 font-code text-xs text-text outline-none focus:border-accent/40"
              type="number"
              value={initiative}
              onChange={(e) => setInitiative(Number(e.target.value))}
            />
            <input
              className="border border-border/70 bg-bg/35 px-2 py-2 font-code text-xs text-text outline-none focus:border-accent/40"
              type="number"
              value={maxHp}
              onChange={(e) => setMaxHp(Number(e.target.value))}
            />
          </div>

          <div className="mt-3">
            <button
              className="inline-flex items-center border border-border/70 bg-bg/30 px-3 py-2 font-code text-[11px] tracking-[0.22em] text-muted transition-colors hover:border-accent/30 hover:text-text"
              onClick={() => {
                const trimmed = name.trim();
                if (!trimmed) return;
                onAddCombatant(trimmed, initiative, maxHp);
                setName('');
              }}
            >
              DISPATCH ADD_COMBATANT
            </button>
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

function EventsPanel({
  events,
  cursor,
  selectedIndex,
  onSelect
}: {
  events: EncounterEvent[];
  cursor: number;
  selectedIndex: number | null;
  onSelect: (idx: number) => void;
}) {
  return (
    <PanelShell title="EVENT LOG">
      <div className="max-h-[460px] overflow-auto pr-1">
        <div className="flex flex-col gap-2">
          {events.map((e, idx) => {
            const isSelected = selectedIndex === idx;
            const isApplied = idx < cursor;
            return (
              <button
                key={idx}
                onClick={() => onSelect(idx)}
                className={[
                  'text-left border px-3 py-2 transition-colors',
                  isSelected
                    ? 'border-accent/45 bg-accent/10'
                    : 'border-border/70 bg-bg/20 hover:border-accent/30',
                  isApplied ? '' : 'opacity-55'
                ].join(' ')}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-code text-[11px] tracking-[0.22em] text-text">
                    <span className="text-muted/70">#{idx}</span> {formatEventLabel(e)}
                  </div>
                  <div className="font-code text-[10px] tracking-[0.22em] text-muted/70">
                    {new Date(e.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </PanelShell>
  );
}

function InspectorPanel({
  selectedIndex,
  selectedEvent,
  diffLines
}: {
  selectedIndex: number | null;
  selectedEvent: EncounterEvent | null;
  diffLines: string[];
}) {
  const eventCode =
    selectedEvent == null
      ? `// Select an event to inspect\n`
      : `// selected event #${selectedIndex}\n${prettyJson(selectedEvent)}\n`;

  return (
    <PanelShell title="INSPECTOR">
      <div className="flex flex-col gap-4">
        <CodeBlock filename="encounter.events.ts" code={TYPE_PROOF_CODE} />
        <CodeBlock filename="selected-event.json" code={eventCode} showLineNumbers={false} />
        <div className="border border-border/70 bg-bg/20 p-3">
          <div className="font-code text-[11px] tracking-[0.22em] text-muted">STATE DIFF</div>
          <pre className="mt-2 whitespace-pre-wrap font-code text-xs leading-relaxed text-text">
            {diffLines.join('\n')}
          </pre>
        </div>
      </div>
    </PanelShell>
  );
}

const TYPE_PROOF_CODE = `// Typed event-sourcing, replayable state, no state libs
type Condition = 'Poisoned' | 'Blessed' | 'Stunned';

type EncounterEvent =
  | { type: 'ADD_COMBATANT'; payload: { id: string; name: string; initiative: number; maxHp: number }; timestamp: number }
  | { type: 'UPDATE_HP'; payload: { id: string; delta: number }; timestamp: number }
  | { type: 'TOGGLE_CONDITION'; payload: { id: string; condition: Condition }; timestamp: number }
  | { type: 'SET_INITIATIVE'; payload: { id: string; initiative: number }; timestamp: number };

function applyEvent(state: EncounterState, event: EncounterEvent): EncounterState {
  // exhaustiveness checked via "never" in the default case
  switch (event.type) {
    // ...
  }
}

function replay(state: EncounterState, events: EncounterEvent[], cursor: number) {
  return events.slice(0, cursor).reduce(applyEvent, state);
}
`;

