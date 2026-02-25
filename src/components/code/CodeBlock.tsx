import { Fragment, useMemo } from 'react';
import { tokenizeTypeScriptLine, type Token } from './tokenizeTypeScript';

function tokenClass(t: Token['type']) {
  switch (t) {
    case 'keyword':
      return 'text-accent';
    case 'type':
      return 'text-[#93c5fd]';
    case 'string':
      return 'text-[#f0abfc]';
    case 'number':
      return 'text-[#fcd34d]';
    case 'comment':
      return 'text-muted/80';
    case 'punctuation':
      return 'text-text/75';
    case 'identifier':
      return 'text-text';
    case 'whitespace':
    default:
      return '';
  }
}

export function CodeBlock({
  filename,
  code,
  showLineNumbers = true,
  className
}: {
  filename: string;
  code: string;
  showLineNumbers?: boolean;
  className?: string;
}) {
  const lines = useMemo(() => {
    const trimmed = code.endsWith('\n') ? code.slice(0, -1) : code;
    return trimmed.split('\n');
  }, [code]);

  return (
    <div
      className={[
        'overflow-hidden rounded-lg border border-border/70 bg-surface/60',
        className
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex items-center gap-3 border-b border-border/70 bg-bg/35 px-4 py-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex-1">
          <div className="inline-flex items-center border border-border/70 bg-bg/45 px-2.5 py-1 font-code text-xs text-muted">
            {filename}
          </div>
        </div>
      </div>

      <div className="flex">
        {showLineNumbers ? (
          <div className="select-none border-r border-border/70 bg-bg/25 px-3 py-4 text-right font-code text-xs leading-relaxed text-muted/70">
            {lines.map((_, idx) => (
              <div key={idx}>{idx + 1}</div>
            ))}
          </div>
        ) : null}

        <pre className="flex-1 overflow-x-auto px-4 py-4 font-code text-sm leading-relaxed text-text">
          <code>
            {lines.map((line, lineIdx) => (
              <Fragment key={lineIdx}>
                {tokenizeTypeScriptLine(line).map((t, tokenIdx) => (
                  <span key={`${lineIdx}-${tokenIdx}`} className={tokenClass(t.type)}>
                    {t.value}
                  </span>
                ))}
                {lineIdx < lines.length - 1 ? '\n' : null}
              </Fragment>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

