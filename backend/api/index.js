import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { cors } from 'hono/cors';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
const app = new Hono();
// const client = new OpenAI({
//   apiKey: process.env['OPENAI_API_KEY']
// });
// console.log(process.env);
app.use('/*', cors({
  // origin: ['http://localhost:5173/', 'http://localhost:3000/', 'https://brnrotai.vercel.app/', 'https://brnrotai.vercel.app/*', 'https://brnrot-3uilhgqjo-thlleos-projects.vercel.app/', 'https://brnrotai-thl-leo-thlleos-projects.vercel.app/', 'https://brnrotai-thlleos-projects.vercel.app/'], // Add your frontend domain
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  exposeHeaders: ['Content-Length', 'X-Requested-With']
}));

app.get('/api', (c) => c.text('Hello, World!'));
app.get('/api/:name', (c) => c.text(`Hello, ${c.req.param("name")}!`));

app.get('/api/roast', async (c) => {
  const json = c.req.json();
  console.log(json);
  return c.text('u are dumb');

  // const roast = await client.chat.completions.create({
  //   model: 'gpt-4o-mini',
  //   messages: [{ role: 'user', content}]
  // })
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;