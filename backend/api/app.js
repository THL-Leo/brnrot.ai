import express from 'express';
import dotenv from 'dotenv';
import { OpenAI } from 'openai';
import cors from 'cors';

dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// console.log(process.env);
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get('/api', (res) => {
  res.json('hello world');
  res.statusCode = 200;
});

app.get('/api/roast', async (req, res) => {
  try {
    const { questions } = req.body;

    const roast = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{
        role: 'user', content: `Given that a person has said true to these following questions: 
        ${questions}, come up with a creative roast of the person`
      }]
    });

    // console.log(roast.choices[0].message.content);
    res.json({ res: roast.choices[0].message.content });
  } catch (e) {
    console.log(e);
  }
})

export default app;
