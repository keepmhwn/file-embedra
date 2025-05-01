# File Embedra

This library includes the following features for Retrieval-Augmented Generation (RAG):

## 1. Parsing

The library currently supports parsing files with the following extensions. It reads the file and returns the text.

- `markdown`: `parseMarkdown()`

## 2. Chunking

The parsed text is processed into chunks using the `chunk()` function. Here’s how to use it:

```javascript
import { chunk } from 'file-embedra';

const chunks = chunk({
  text,
  maxTokens: 500,
  overlapTokens: 100,
});
```

- Options
  - `text`: The text to be chunked
  - `maxTokens`: The size of each chunk (default: 500)
  - `overlapTokens`: The sliding window size (default: 100; cannot exceed `maxTokens`)

## 3. Embedding

This functionality uses OpenAI to create embeddings. You need to provide your OpenAI `apiKey` to make the request.

```javascript
const embeddings = await embed({
  apiKey: 'your-openai-api-key',
  chunks: ['a', 'b'],
  model: 'text-embedding-ada-002',
});
```

- Options
  - `apiKey`: Your OpenAI API Key
  - `chunks`: An array of strings to be embedded
  - `model`: The embedding model to use
    - `text-embedding-ada-002` (default)
    - `text-embedding-3-large`
    - `text-embedding-3-small`

## LICENSE

[MIT License](https://github.com/keepmhwn/file-embedra/blob/main/LICENSE)
