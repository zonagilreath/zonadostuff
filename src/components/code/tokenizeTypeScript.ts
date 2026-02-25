export type TokenType =
  | 'whitespace'
  | 'punctuation'
  | 'identifier'
  | 'keyword'
  | 'type'
  | 'number'
  | 'string'
  | 'comment';

export type Token = { type: TokenType; value: string };

const KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'import',
  'from',
  'export',
  'default',
  'type',
  'interface',
  'extends',
  'implements',
  'new',
  'if',
  'else',
  'for',
  'while',
  'switch',
  'case',
  'break',
  'continue',
  'try',
  'catch',
  'finally',
  'throw',
  'true',
  'false',
  'null',
  'undefined',
  'as',
  'in',
  'of'
]);

const BUILTIN_TYPES = new Set([
  'string',
  'number',
  'boolean',
  'unknown',
  'any',
  'never',
  'void',
  'object',
  'Record',
  'Partial',
  'Pick',
  'Omit',
  'Date'
]);

function isWhitespace(ch: string) {
  return ch === ' ' || ch === '\t';
}

function isDigit(ch: string) {
  return ch >= '0' && ch <= '9';
}

function isIdentStart(ch: string) {
  return (
    (ch >= 'a' && ch <= 'z') ||
    (ch >= 'A' && ch <= 'Z') ||
    ch === '_' ||
    ch === '$'
  );
}

function isIdentPart(ch: string) {
  return isIdentStart(ch) || isDigit(ch);
}

export function tokenizeTypeScriptLine(line: string): Token[] {
  const out: Token[] = [];
  let i = 0;

  const push = (type: TokenType, value: string) => {
    if (value.length) out.push({ type, value });
  };

  while (i < line.length) {
    const ch = line[i]!;
    const next = line[i + 1];

    // Line comment
    if (ch === '/' && next === '/') {
      push('comment', line.slice(i));
      break;
    }

    // Whitespace
    if (isWhitespace(ch)) {
      let j = i + 1;
      while (j < line.length && isWhitespace(line[j]!)) j++;
      push('whitespace', line.slice(i, j));
      i = j;
      continue;
    }

    // Strings
    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      let j = i + 1;
      while (j < line.length) {
        const c = line[j]!;
        if (c === '\\') {
          j += 2;
          continue;
        }
        if (c === quote) {
          j++;
          break;
        }
        j++;
      }
      push('string', line.slice(i, j));
      i = j;
      continue;
    }

    // Numbers
    if (isDigit(ch)) {
      let j = i + 1;
      while (j < line.length && (isDigit(line[j]!) || line[j] === '.')) j++;
      push('number', line.slice(i, j));
      i = j;
      continue;
    }

    // Identifiers, keywords, types
    if (isIdentStart(ch)) {
      let j = i + 1;
      while (j < line.length && isIdentPart(line[j]!)) j++;
      const word = line.slice(i, j);

      if (KEYWORDS.has(word)) push('keyword', word);
      else if (BUILTIN_TYPES.has(word) || (word[0] >= 'A' && word[0] <= 'Z')) push('type', word);
      else push('identifier', word);

      i = j;
      continue;
    }

    // Punctuation
    push('punctuation', ch);
    i++;
  }

  return out;
}

