import React, { useEffect, useState } from 'react';

const APITest = () => {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState(''); 

  useEffect(() => {
    // Fetch data from the backend API
    fetch('https://brnrotai-backend.vercel.app/api')
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
    fetch('https://brnrotai-backend.vercel.app/api/John')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((data) => {
      setMessage2(data); // Set the fetched message
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
      <p>Message from Backend: {message2}</p>
    </div>
  );
};

export default APITest;
