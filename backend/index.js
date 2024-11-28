import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => c.text('Hello, World!'));
app.get('/roast', async (c) => {
  const body = await c.req.json();
  console.log(body)
  return c.text("pee");
});
export default app;
