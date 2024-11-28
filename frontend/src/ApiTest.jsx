import React, { useEffect, useState } from 'react';

const APITest = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend API
    fetch('http://localhost:3010/api')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        setMessage(data); // Set the fetched message
      })
      .catch((error) => {
        console.error('Error fetching API:', error);
        setMessage('Failed to connect to API.');
      });
  }, []);

  return (
    <div>
      <h2>API Test Component</h2>
      <p>Message from Backend: {message}</p>
    </div>
  );
};

export default APITest;
