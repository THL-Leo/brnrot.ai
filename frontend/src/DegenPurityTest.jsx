import React, { useState } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Stack,
  Button,
} from "@mui/material";
// Add your image import. Adjust the path according to your project structure
import testImage from "./assets/degen.png"; // Change this to your image path
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });
const questions = [
  "Held hands romantically?",
  "Been on a date?",
  "Been in a relationship?",
  "Danced without leaving room for Jesus?",
  "Kissed a non-family member?",
  "Kissed a non-family member on the lips?",
  "French kissed?",
  "French kissed in public?",
  "Kissed on the neck?",
  "Kissed horizontally?",
  "Given or received a hickey?",
  "Kissed or been kissed on the breast?",
  "Kissed someone below the belt?",
  "Kissed for more than two hours consecutively?",
  "Played a game involving stripping?",
  "Seen or been seen by another person in a sensual context?",
  "Masturbated?",
  "Masturbated to a picture or video?",
  "Masturbated while someone else was in the room?",
  "Been caught masturbating?",
  "Masturbated with an inanimate object?",
  "Seen or read pornographic material?",
];

const DegenPurityTest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [roast, setRoast] = useState('');
  
  const handleSubmit = async (questions) => {
    try {
      console.log(process.env.BACKEND_PORT)
      const res = await fetch(`http://localhost:${process.env.BACKEND_PORT}/api/roast`, {
        body: JSON.stringify({ questions: questions }),
        headers: new Headers({
          'Content-type': 'application/json',
        })
      });
      // const json = await res.json();
      console.log(res)
      // if (json.errors) {
      //   console.log(json.errors[0].message);
      //   throw new Error('DegenPurityTest.jsx: handleSubmit');
      // }
      
      // setRoast(res.res);
      // setSubmitted(true);
    } catch(e) {
      console.log('whattup gang shit went wrong')
      console.log(e);
    }
  }
  let markedTrue = new Set();

  return (
    <Box
      sx={{
        backgroundColor: "#fdf2c8",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        color: "#000",
        height: "100vh",
        width: "100vw",
        fontFamily: "'Comic Sans', monospace", // More retro looking font
        boxSizing: "border-box",
      }}
    >
      <Box
        component="img"
        sx={{
          width: "100%",
          maxWidth: 600,
          height: "auto",
          display: "block",
          margin: "0 auto",
          mb: 4,
        }}
        alt="Test image"
        src={testImage}
      />
      {!submitted ?
      <Box> 
        <Typography sx={{ textAlign: "center", mb: 4 }}>
          Click on every item you have done. MPS stands for Member of the
          Preferred Sex.
        </Typography>
        <Box sx={{ textAlign: "left", padding: "0 1rem" }}>
          <Stack spacing={0.5}>  {/* Reduced spacing between items */}
            {questions.map((question, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0,  // Remove gap
                }}
              >
                <Typography
                  sx={{
                    width: '24px',  // Fixed width instead of minWidth
                    fontSize: '1rem',
                    textAlign: 'right',  // Right align the numbers
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography>.</Typography>
                <Checkbox
                  onChange={() => {
                    _ = markedTrue.delete(question) ? _ : markedTrue.add(question); 
                  }}
                  sx={{
                    padding: '2px',  // Reduce checkbox padding
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.2rem',  // Smaller checkbox
                    }
                  }}
                />
                <Typography sx={{ fontSize: '1rem' }}>
                  {question}
                </Typography>
              </Box>
            ))}
            <Button
          sx={{
            borderRadius: "5",
            width: '3rem'
          }}
          variant="contained"
          onClick={() => {
            handleSubmit(Array.from(markedTrue))
          }}
        >
          Submit
        </Button>
          </Stack>
        </Box> 
      </Box>
        :
      <div>
        {roast}
      </div>
      }
    </Box> 
    );
};

export default DegenPurityTest;
