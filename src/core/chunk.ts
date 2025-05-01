import { encode, decode } from 'gpt-tokenizer';

export const chunk = ({
  text,
  maxTokens = 500,
  overlapTokens = 100,
}: {
  text: string;
  maxTokens?: number;
  overlapTokens?: number;
}) => {
  if (maxTokens < overlapTokens) {
    throw new Error('overlapTokens cannot be greater than maxTokens.');
  }

  const tokens = encode(text);
  const chunks: string[] = [];

  let start = 0;
  while (start < tokens.length) {
    const end = Math.min(start + maxTokens, tokens.length);
    const chunk = tokens.slice(start, end);
    chunks.push(decode(chunk));

    start += maxTokens - overlapTokens;
  }

  return chunks;
};
