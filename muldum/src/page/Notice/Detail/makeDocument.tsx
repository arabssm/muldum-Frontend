import type { JSX } from '@emotion/react/jsx-runtime';
import type { ReactNode } from 'react';

export default function makeDocument(text: string = ''): JSX.Element | null {
const tagPatterns: { pattern: RegExp; component: (content: ReactNode) => ReactNode }[] = [
  {
    pattern: /<제목1>\n?([\s\S]*?)\n?<\/제목1>/,
    component: content => <h1>{content}</h1>,
  },
  {
    pattern: /<제목2>\n?([\s\S]*?)\n?<\/제목2>/,
    component: content => <h2>{content}</h2>,
  },
  {
    pattern: /<제목3>\n?([\s\S]*?)\n?<\/제목3>/,
    component: content => <h3>{content}</h3>,
  },
  {
    pattern: /<제목4>\n?([\s\S]*?)\n?<\/제목4>/,
    component: content => <h4>{content}</h4>,
  },
  {
    pattern: /<강조>\n?([\s\S]*?)\n?<\/강조>/,
    component: content => <strong>{content}</strong>,
  },
];

function parseText(input: string): ReactNode {
  if (!input) return null;

  let earliestMatch: RegExpMatchArray | null = null;
  let matchComponent: ((content: ReactNode) => ReactNode) | null = null;

  for (const { pattern, component } of tagPatterns) {
    const match = input.match(pattern);
    if (match && (!earliestMatch || match.index! < earliestMatch.index!)) {
      earliestMatch = match;
      matchComponent = component;
    }
  }

  if (!earliestMatch || !matchComponent) {
    return input;
  }

  const [fullMatch, inner] = earliestMatch;
  const before = input.slice(0, earliestMatch.index);
  const after = input.slice(earliestMatch.index! + fullMatch.length);

  return (
    <>
      {before && parseText(before)}
      {matchComponent(parseText(inner))}
      {after && parseText(after)}
    </>
  );
}

return <>{parseText(text)}</>;
}