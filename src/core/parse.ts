import * as fs from 'fs';
import removeMd from 'remove-markdown';

export const parseMarkdown = async (filePath: string): Promise<string> => {
  const dataBuffer = fs.readFileSync(filePath, 'utf-8');
  const plainText = removeMd(dataBuffer);
  return plainText;
};
