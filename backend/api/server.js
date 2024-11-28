import app from './app.js';

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3010;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// For Vercel
export default app;