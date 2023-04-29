import path from 'path';
import express from 'express';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { createServer } from 'vite';

const port = process.env.PORT || 3333;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
app.use(vite.middlewares);

app.use('*', async (req, res, next) => {
  const url = req.originalUrl;
  try {
    let template = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
    template = await vite.transformIndexHtml(url, template);

    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const pattern = template.split('<!--ssr-body-->');

    const { pipe } = await render(url, {
      onShellReady() {
        res.write(pattern[0]);
        pipe(res);
      },
      onAllReady() {
        res.write(pattern[1]);
        res.end();
      },
    });
  } catch (error) {
    vite.ssrFixStacktrace(error);
    next(error);
  }
});

app.listen(port, () => {
  console.log(`listening on https://localhost:${port}`);
});
