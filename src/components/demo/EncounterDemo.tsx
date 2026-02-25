import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

interface Combatant {
  id: number;
  name: string;
  initiative: number;
  hp: number;
  maxHp: number;
}

type Phase = 'setup' | 'combat';

export function EncounterDemo() {
  const [phase, setPhase] = useState<Phase>('setup');
  const [combatants, setCombatants] = useState<Combatant[]>([]);
  const [currentTurnIndex, setCurrentTurnIndex] = useState(0);
  const [round, setRound] = useState(1);
  const [nameInput, setNameInput] = useState('');

  const rollInitiative = () => Math.floor(Math.random() * 20) + 1;
  const rollHP = () => Math.floor(Math.random() * 50) + 30;

  const addCombatant = () => {
    if (!nameInput.trim()) return;
    
    const newCombatant: Combatant = {
      id: Date.now(),
      name: nameInput.trim(),
      initiative: rollInitiative(),
      hp: rollHP(),
      maxHp: rollHP(),
    };

    setCombatants(prev => [...prev, newCombatant].sort((a, b) => b.initiative - a.initiative));
    setNameInput('');
  };

  const startCombat = () => {
    if (combatants.length < 2) return;
    setPhase('combat');
    setCurrentTurnIndex(0);
    setRound(1);
  };

  const nextTurn = () => {
    if (currentTurnIndex === combatants.length - 1) {
      setCurrentTurnIndex(0);
      setRound(r => r + 1);
    } else {
      setCurrentTurnIndex(i => i + 1);
    }
  };

  const adjustHp = (id: number, delta: number) => {
    setCombatants(prev => prev.map(c => 
      c.id === id 
        ? { ...c, hp: Math.max(0, Math.min(c.maxHp, c.hp + delta)) }
        : c
    ));
  };

  const removeCombatant = (id: number) => {
    setCombatants(prev => {
      const newList = prev.filter(c => c.id !== id);
      if (newList.length < 2) {
        setPhase('setup');
        setCurrentTurnIndex(0);
      } else if (currentTurnIndex >= newList.length) {
        setCurrentTurnIndex(0);
      }
      return newList;
    });
  };

  const reset = () => {
    setCombatants([]);
    setPhase('setup');
    setCurrentTurnIndex(0);
    setRound(1);
    setNameInput('');
  };

  const currentCombatant = phase === 'combat' ? combatants[currentTurnIndex] : null;

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left: Description */}
          <div>
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight text-text mb-3">
                Initiative Vault
              </h2>
            </Reveal>
            <Reveal delayMs={80}>
              <p className="text-muted text-sm sm:text-base mb-6">
                A production D&D encounter tracker I'm building with React 19, TypeScript, tRPC, and PostgreSQL.
                Handles real-time combat state across multiple players with full CRUD operations, Supabase auth, and
                row-level security.
              </p>
            </Reveal>

            <Reveal delayMs={140}>
              <div className="mb-6">
                <h3 className="text-xs font-code text-accent uppercase tracking-wider mb-3">Production Features</h3>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>Full monster compendium with D&D 5e stat blocks</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>Persistent campaigns and multi-encounter sessions</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>Conditions, concentration tracking, status effects</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>Real-time sync across devices via WebSockets</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>Custom character creation with full ability scores</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://initiative-vault.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-accent hover:bg-accent/90 text-surface font-code text-sm font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2 shadow-glow"
                >
                  Try Live App →
                </a>
                <a
                  href="https://github.com/gelatinous-labs/initiative-vault"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-surface hover:bg-muted-bg text-text font-code text-sm font-semibold rounded-lg transition-colors border border-border inline-flex items-center justify-center gap-2"
                >
                  View Source
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Interactive Preview */}
          <Reveal delayMs={240}>
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="text-xs font-code text-accent/70 uppercase tracking-wider">Interactive Preview</span>
                <span className="text-xs text-muted/50">(Simplified demo)</span>
              </div>
              
              <div className="panel-card">
                {/* Header */}
                <div className="flex items-center justify-between w-full pb-3 border-b border-border">
                  <h3 className="text-sm font-code text-muted uppercase tracking-wider">
                    {phase === 'setup' ? 'Setup Encounter' : `Combat - Round ${round}`}
                  </h3>
                  {combatants.length > 0 && (
                    <button
                      onClick={reset}
                      className="px-2.5 py-1 bg-muted-bg hover:bg-destructive/20 text-muted hover:text-destructive text-xs font-code rounded transition-colors"
                    >
                      Reset
                    </button>
                  )}
                </div>

                {/* Setup Phase */}
                {phase === 'setup' && (
                  <div className="w-full space-y-4">
                    <div>
                      <label className="block text-xs font-code text-muted uppercase tracking-wider mb-2">
                        Add Combatant
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={nameInput}
                          onChange={(e) => setNameInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && addCombatant()}
                          placeholder="Character or monster name"
                          className="flex-1 px-3 py-2 bg-surface border border-border rounded-md text-text text-sm font-code placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                        />
                        <button
                          onClick={addCombatant}
                          className="px-4 py-2 bg-accent hover:bg-accent/90 text-surface text-sm font-code font-semibold rounded-md transition-colors whitespace-nowrap"
                        >
                          + Add
                        </button>
                      </div>
                      <p className="mt-1.5 text-xs text-muted/70">
                        Initiative will be rolled automatically (d20)
                      </p>
                    </div>

                    {/* Added Combatants List */}
                    {combatants.length > 0 && (
                      <div>
                        <div className="text-xs font-code text-muted uppercase tracking-wider mb-2">
                          Combatants ({combatants.length})
                        </div>
                        <div className="space-y-2">
                          {combatants.map((combatant) => (
                            <div
                              key={combatant.id}
                              className="flex items-center gap-3 px-3 py-2 bg-muted-bg rounded-md"
                            >
                              <div className="flex items-center justify-center w-8 h-8 bg-surface rounded text-accent font-code text-sm font-semibold">
                                {combatant.initiative}
                              </div>
                              <div className="flex-1 text-sm text-text truncate">{combatant.name}</div>
                              <button
                                onClick={() => removeCombatant(combatant.id)}
                                className="text-muted hover:text-destructive transition-colors text-sm"
                              >
                                ✕
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Start Combat Button */}
                    {combatants.length >= 2 && (
                      <button
                        onClick={startCombat}
                        className="w-full py-3 bg-accent hover:bg-accent/90 text-surface font-code text-sm font-semibold rounded-lg transition-colors"
                      >
                        Start Combat →
                      </button>
                    )}

                    {combatants.length === 1 && (
                      <p className="text-xs text-muted/70 text-center">
                        Add at least one more combatant to start combat
                      </p>
                    )}
                  </div>
                )}

                {/* Combat Phase */}
                {phase === 'combat' && currentCombatant && (
                  <div className="w-full space-y-4">
                    {/* Initiative Order */}
                    <div>
                      <div className="text-xs font-code text-muted uppercase tracking-wider mb-2">
                        Initiative Order
                      </div>
                      <div className="space-y-2">
                        {combatants.map((combatant, index) => (
                          <div
                            key={combatant.id}
                            className={`
                              flex items-center gap-3 px-3 py-2 rounded-md transition-all
                              ${
                                index === currentTurnIndex
                                  ? 'bg-accent/15 border-2 border-accent/60'
                                  : 'bg-muted-bg border-2 border-transparent'
                              }
                            `}
                          >
                            <div className={`
                              flex items-center justify-center w-8 h-8 rounded font-code text-sm font-semibold
                              ${index === currentTurnIndex ? 'bg-accent text-surface' : 'bg-surface text-accent'}
                            `}>
                              {combatant.initiative}
                            </div>
                            <div className="flex-1">
                              <div className={`text-sm truncate ${index === currentTurnIndex ? 'text-accent font-medium' : 'text-text'}`}>
                                {combatant.name}
                              </div>
                              <div className="text-xs font-code text-muted">
                                {combatant.hp}/{combatant.maxHp} HP
                              </div>
                            </div>
                            {index === currentTurnIndex && (
                              <div className="px-2 py-0.5 bg-accent text-surface text-[10px] font-code font-semibold rounded uppercase">
                                Active
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Current Turn Controls */}
                    <div className="pt-3 border-t border-border">
                      <div className="text-xs font-code text-muted uppercase tracking-wider mb-3">
                        {currentCombatant.name}'s Turn
                      </div>

                      {/* HP Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-code text-muted">Hit Points</span>
                          <span className="text-xs font-code text-text">
                            {currentCombatant.hp} / {currentCombatant.maxHp}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-surface rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-accent transition-all duration-300"
                            style={{ width: `${(currentCombatant.hp / currentCombatant.maxHp) * 100}%` }}
                          />
                        </div>
                      </div>

                      {/* HP Controls */}
                      <div className="grid grid-cols-4 gap-2 mb-3">
                        <button
                          onClick={() => adjustHp(currentCombatant.id, -10)}
                          className="h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-destructive/20 text-text hover:text-destructive transition-colors font-code text-sm font-semibold"
                        >
                          -10
                        </button>
                        <button
                          onClick={() => adjustHp(currentCombatant.id, -5)}
                          className="h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-destructive/20 text-text hover:text-destructive transition-colors font-code text-sm font-semibold"
                        >
                          -5
                        </button>
                        <button
                          onClick={() => adjustHp(currentCombatant.id, 5)}
                          className="h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-accent/20 text-text hover:text-accent transition-colors font-code text-sm font-semibold"
                        >
                          +5
                        </button>
                        <button
                          onClick={() => adjustHp(currentCombatant.id, 10)}
                          className="h-9 flex items-center justify-center rounded-md bg-muted-bg hover:bg-accent/20 text-text hover:text-accent transition-colors font-code text-sm font-semibold"
                        >
                          +10
                        </button>
                      </div>

                      {/* Next Turn / Remove */}
                      <div className="flex gap-2">
                        <button
                          onClick={nextTurn}
                          className="flex-1 py-2.5 bg-accent hover:bg-accent/90 text-surface font-code text-sm font-semibold rounded-md transition-colors"
                        >
                          {currentTurnIndex === combatants.length - 1 ? 'Next Round →' : 'Next Turn →'}
                        </button>
                        <button
                          onClick={() => removeCombatant(currentCombatant.id)}
                          className="px-3 py-2.5 bg-muted-bg hover:bg-destructive/20 text-muted hover:text-destructive font-code text-sm rounded-md transition-colors"
                          title="Remove combatant"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
