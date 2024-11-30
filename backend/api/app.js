import express from 'express';
import { OpenAI } from 'openai';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// console.log(process.env);
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
app.get('/api', (req, res) => {
  console.log('/api hit')
  res.json('hello world');
  res.statusCode = 200;
});

app.post('/api/roast', async (req, res) => {
  console.log('/api/roast hit')
  try {
    const { questions } = req.body;

    if (!questions || questions.length == 0) {
      res.json({ res: "You are not skibidi" });
      return res.statusCode = 200;
    }

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
    throw new Error('api/roast error');
  }
})

export default app;
