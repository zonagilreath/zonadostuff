import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

interface Combatant {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  maxHp: number;
  ac: number;
  conditions: string[];
}

const INITIAL_COMBATANTS: Combatant[] = [
  { id: 1, name: 'Adult Bronze Dragon', initiative: 17, hp: 212, maxHp: 212, ac: 19, conditions: [] },
  { id: 2, name: 'Aboleth', initiative: 10, hp: 135, maxHp: 135, ac: 17, conditions: ['Restrained'] },
  { id: 3, name: 'Party Barbarian', initiative: 8, hp: 68, maxHp: 95, ac: 15, conditions: [] },
  { id: 4, name: 'Archfey Warlock', initiative: 5, hp: 52, maxHp: 52, ac: 13, conditions: [] },
];

export function EncounterDemo() {
  const [combatants, setCombatants] = useState<Combatant[]>(INITIAL_COMBATANTS);
  const [selectedId, setSelectedId] = useState<number>(2);
  const [round, setRound] = useState(2);

  const selected = combatants.find(c => c.id === selectedId);

  const adjustHp = (id: number, delta: number) => {
    setCombatants(prev => prev.map(c => 
      c.id === id 
        ? { ...c, hp: Math.max(0, Math.min(c.maxHp, c.hp + delta)) }
        : c
    ));
  };

  const toggleCondition = (id: number, condition: string) => {
    setCombatants(prev => prev.map(c => 
      c.id === id 
        ? { 
            ...c, 
            conditions: c.conditions.includes(condition)
              ? c.conditions.filter(cond => cond !== condition)
              : [...c.conditions, condition]
          }
        : c
    ));
  };

  if (!selected) return null;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-text mb-2">
            Initiative Vault
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="text-muted text-sm sm:text-base max-w-2xl mb-8">
            A professional D&D encounter tracker built with React 19, TypeScript, tRPC, and PostgreSQL.
            Tap a combatant below to view details.
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="max-w-lg mx-auto">
            {/* Combat Snapshot Card */}
            <div className="panel-card">
              {/* Header */}
              <div className="flex items-center justify-between w-full pb-2 border-b border-border">
                <h3 className="text-sm font-code text-muted uppercase tracking-wider">Combat Snapshot</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-muted-bg rounded text-xs font-code text-text">Round {round}</span>
                  <button
                    onClick={() => setRound(r => r + 1)}
                    className="px-2.5 py-1 bg-accent hover:bg-accent/90 text-surface text-xs font-code font-semibold rounded transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Initiative Order Chips */}
              <div className="w-full">
                <div className="text-[11px] font-code text-muted uppercase tracking-wider mb-2">Initiative Order</div>
                <div className="flex flex-wrap gap-2">
                  {combatants.map((combatant) => (
                    <button
                      key={combatant.id}
                      onClick={() => setSelectedId(combatant.id)}
                      className={`
                        flex items-center gap-2 px-3 py-1.5 rounded-md transition-all font-code text-sm
                        ${
                          combatant.id === selectedId
                            ? 'bg-accent/15 border border-accent/60 text-accent'
                            : 'bg-muted-bg border border-transparent text-muted hover:bg-muted-bg hover:text-text'
                        }
                      `}
                    >
                      <span className="font-semibold">{combatant.initiative}</span>
                      <span className="truncate max-w-[140px]">{combatant.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Combatant Details */}
              <div className="w-full pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium text-text truncate">{selected.name}</h4>
                  {selected.conditions.length > 0 && (
                    <div className="px-2 py-0.5 bg-accent/20 rounded text-accent text-xs font-code">
                      {selected.conditions[0]}
                    </div>
                  )}
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="stat-badge flex-col py-2">
                    <div className="text-[11px] text-muted font-code uppercase tracking-wider">AC</div>
                    <div className="stat-badge-text font-code text-lg">{selected.ac}</div>
                  </div>
                  <div className="stat-badge flex-col py-2">
                    <div className="text-[11px] text-muted font-code uppercase tracking-wider">HP</div>
                    <div className="stat-badge-text font-code text-lg">{selected.hp}</div>
                  </div>
                  <div className="stat-badge flex-col py-2">
                    <div className="text-[11px] text-muted font-code uppercase tracking-wider">Init</div>
                    <div className="stat-badge-text font-code text-lg">{selected.initiative}</div>
                  </div>
                </div>

                {/* HP Bar */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-code text-muted">Hit Points</span>
                    <span className="text-xs font-code text-text">{selected.hp} / {selected.maxHp}</span>
                  </div>
                  <div className="w-full h-2 bg-muted-bg rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-accent transition-all duration-300"
                      style={{ width: `${(selected.hp / selected.maxHp) * 100}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => adjustHp(selected.id, -10)}
                      className="flex-1 h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-destructive/20 text-text hover:text-destructive transition-colors font-code text-sm font-semibold"
                    >
                      -10
                    </button>
                    <button
                      onClick={() => adjustHp(selected.id, -5)}
                      className="flex-1 h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-destructive/20 text-text hover:text-destructive transition-colors font-code text-sm font-semibold"
                    >
                      -5
                    </button>
                    <button
                      onClick={() => adjustHp(selected.id, 5)}
                      className="flex-1 h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-accent/20 text-text hover:text-accent transition-colors font-code text-sm font-semibold"
                    >
                      +5
                    </button>
                    <button
                      onClick={() => adjustHp(selected.id, 10)}
                      className="flex-1 h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-accent/20 text-text hover:text-accent transition-colors font-code text-sm font-semibold"
                    >
                      +10
                    </button>
                  </div>
                </div>

                {/* Conditions */}
                <div>
                  <div className="text-[11px] font-code text-muted uppercase tracking-wider mb-2">Conditions</div>
                  <div className="flex flex-wrap gap-2">
                    {['Restrained', 'Poisoned', 'Prone'].map(condition => (
                      <button
                        key={condition}
                        onClick={() => toggleCondition(selected.id, condition)}
                        className={`
                          px-3 py-1.5 rounded-md text-xs font-code transition-colors
                          ${
                            selected.conditions.includes(condition)
                              ? 'bg-accent text-surface'
                              : 'bg-muted-bg text-muted hover:bg-accent/20 hover:text-accent'
                          }
                        `}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://initiative-vault.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 bg-accent hover:bg-accent/90 text-surface font-code text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Try Live App ↗
              </a>
              <a
                href="https://github.com/gelatinous-labs/initiative-vault"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 bg-surface hover:bg-muted-bg text-text font-code text-sm font-semibold rounded-lg transition-colors border border-border inline-flex items-center justify-center gap-2"
              >
                View Source
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
