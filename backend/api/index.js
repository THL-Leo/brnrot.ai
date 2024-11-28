import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { cors } from 'hono/cors'

const app = new Hono().basePath('/api')

app.use('/*', cors({
  origin: ['http://localhost:3000', 'https://brnrotai.vercel.app/'], // Add your frontend domain
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Requested-With']
}));

app.get('/api', (c) => c.text('Hello, World!'));
app.get('/api/:name', (c) => c.text(`Hello, ${c.req.param("name")}!`));

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;