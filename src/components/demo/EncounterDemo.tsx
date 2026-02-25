import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

interface Entity {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  maxHp: number;
  ac: number;
  conditions: string[];
}

const INITIAL_ENTITIES: Entity[] = [
  { id: 1, name: 'Adult Bronze Dragon', initiative: 17, hp: 212, maxHp: 212, ac: 18, conditions: [] },
  { id: 2, name: 'Adult Bronze Dragon', initiative: 13, hp: 212, maxHp: 212, ac: 18, conditions: [] },
  { id: 3, name: 'Aboleth', initiative: 10, hp: 150, maxHp: 150, ac: 17, conditions: ['Restrained'] },
  { id: 4, name: 'the guy', initiative: 8, hp: 10, maxHp: 10, ac: 10, conditions: [] },
  { id: 5, name: 'Aboleth', initiative: 5, hp: 150, maxHp: 150, ac: 17, conditions: [] },
];

export function EncounterDemo() {
  const [entities, setEntities] = useState<Entity[]>(INITIAL_ENTITIES);
  const [selectedId, setSelectedId] = useState<number>(3);
  const [round, setRound] = useState(2);

  const selectedEntity = entities.find(e => e.id === selectedId);

  const updateHp = (id: number, delta: number) => {
    setEntities(prev => prev.map(e => 
      e.id === id 
        ? { ...e, hp: Math.max(0, Math.min(e.maxHp, e.hp + delta)) }
        : e
    ));
  };

  const toggleCondition = (id: number, condition: string) => {
    setEntities(prev => prev.map(e => 
      e.id === id 
        ? { 
            ...e, 
            conditions: e.conditions.includes(condition)
              ? e.conditions.filter(c => c !== condition)
              : [...e.conditions, condition]
          }
        : e
    ));
  };

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl tracking-tight text-text mb-3">
            Initiative Vault
          </h2>
        </Reveal>
        <Reveal delayMs={80}>
          <p className="text-muted max-w-2xl mb-12">
            A professional-grade D&D encounter tracker built with React 19, TypeScript, tRPC, and PostgreSQL.
            Try the live demo below—click entities, adjust HP, and toggle conditions.
          </p>
        </Reveal>

        <Reveal delayMs={160}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            {/* Encounter List */}
            <div className="panel-card">
              <div className="flex items-center justify-between w-full mb-2">
                <h3 className="section-title">Encounter 1</h3>
                <div className="flex items-center gap-3">
                  <span className="font-code text-sm text-muted">Round {round}</span>
                  <button
                    onClick={() => setRound(r => r + 1)}
                    className="px-3 py-1.5 bg-accent hover:bg-accent/90 text-surface font-code text-xs font-semibold rounded-md transition-colors"
                  >
                    Next Round
                  </button>
                </div>
              </div>

              <div className="w-full space-y-2">
                {entities.map((entity) => (
                  <div
                    key={entity.id}
                    onClick={() => setSelectedId(entity.id)}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors
                      ${
                        entity.id === selectedId
                          ? 'bg-muted-bg border-2 border-accent/30'
                          : 'bg-surface-dark hover:bg-muted-bg border-2 border-transparent'
                      }
                    `}
                  >
                    <div className="stat-badge w-12 shrink-0">
                      <span className="stat-badge-text font-code">{entity.initiative}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-text truncate">{entity.name}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={(e) => { e.stopPropagation(); updateHp(entity.id, -10); }}
                        className="w-7 h-7 flex items-center justify-center rounded bg-muted-bg hover:bg-destructive/20 text-text hover:text-destructive transition-colors font-code text-sm"
                      >
                        −
                      </button>
                      <div className="font-code text-sm text-text min-w-[60px] text-center">
                        {entity.hp} / {entity.maxHp}
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); updateHp(entity.id, 10); }}
                        className="w-7 h-7 flex items-center justify-center rounded bg-muted-bg hover:bg-accent/20 text-text hover:text-accent transition-colors font-code text-sm"
                      >
                        +
                      </button>
                      <div className="stat-badge w-12 shrink-0">
                        <span className="stat-badge-text font-code">{entity.ac} AC</span>
                      </div>
                      {entity.conditions.length > 0 && (
                        <div className="px-2 py-1 bg-accent/20 rounded text-accent text-xs font-code">
                          {entity.conditions[0]}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entity Details */}
            {selectedEntity && (
              <div className="panel-card">
                <h3 className="section-title mb-4">{selectedEntity.name}</h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-code text-muted mb-2">STATS</div>
                    <div className="flex gap-2">
                      <div className="stat-badge flex-1">
                        <div className="text-center">
                          <div className="text-xs text-muted font-code">AC</div>
                          <div className="stat-badge-text font-code">{selectedEntity.ac}</div>
                        </div>
                      </div>
                      <div className="stat-badge flex-1">
                        <div className="text-center">
                          <div className="text-xs text-muted font-code">HP</div>
                          <div className="stat-badge-text font-code">{selectedEntity.hp}</div>
                        </div>
                      </div>
                      <div className="stat-badge flex-1">
                        <div className="text-center">
                          <div className="text-xs text-muted font-code">INIT</div>
                          <div className="stat-badge-text font-code">{selectedEntity.initiative}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-code text-muted mb-2">CONDITIONS</div>
                    <div className="flex flex-wrap gap-2">
                      {['Restrained', 'Poisoned', 'Prone'].map(condition => (
                        <button
                          key={condition}
                          onClick={() => toggleCondition(selectedEntity.id, condition)}
                          className={`
                            px-3 py-1.5 rounded-md text-xs font-code transition-colors
                            ${
                              selectedEntity.conditions.includes(condition)
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

                  <div>
                    <div className="text-xs font-code text-muted mb-2">ACTIONS</div>
                    <div className="space-y-2 text-sm text-muted">
                      <div>
                        <div className="text-text font-medium">Multiattack</div>
                        <div>The aboleth makes two Tentacle attacks or uses Psychic Drain.</div>
                      </div>
                      <div>
                        <div className="text-text font-medium">Tentacle</div>
                        <div className="font-code text-xs text-accent">+9 to hit, 2d6+5 damage</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mt-8 flex gap-3">
            <a
              href="https://initiative-vault.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-surface font-code text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Try Live App ↗
            </a>
            <a
              href="https://github.com/gelatinous-labs/initiative-vault"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-surface hover:bg-muted-bg text-text font-code text-sm font-semibold rounded-lg transition-colors border border-border"
            >
              View Source
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
