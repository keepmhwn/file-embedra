import { OpenAI } from 'openai';

type Embedding = {
  chunk: string;
  embedding: number[];
};

type EmbeddingModel =
  | 'text-embedding-3-large'
  | 'text-embedding-3-small'
  | 'text-embedding-ada-002';

export const embed = async ({
  apiKey,
  chunks,
  model = 'text-embedding-ada-002',
}: {
  apiKey: string;
  chunks: string[];
  model?: EmbeddingModel;
}) => {
  const openai = new OpenAI({
    apiKey,
  });

  const embeddings: Embedding[] = [];
  try {
    for (const chunk of chunks) {
      const response = await openai.embeddings.create({
        model,
        input: chunk,
      });

      embeddings.push({ chunk, embedding: response.data[0].embedding });
    }
  } catch (e) {
    console.log('Embedding Error: ', e);
  }

  return embeddings;
};
