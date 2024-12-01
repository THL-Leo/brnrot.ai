import React from 'react';
// import APITest from './ApiTest';
import DegenPurityTest from "./DegenPurityTest";
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div>
      <DegenPurityTest />
      <Analytics />
    </div>
  );
}

export default App;
