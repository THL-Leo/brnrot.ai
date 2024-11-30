import app from './app.js';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.BACKEND_PORT || 3010;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// For Vercel
export default app;
