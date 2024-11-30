import app from './app.js';

// For local development

const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// For Vercel
export default app;
