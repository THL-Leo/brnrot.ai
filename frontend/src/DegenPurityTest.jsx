import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  Stack,
} from "@mui/material";
// Add your image import. Adjust the path according to your project structure
import testImage from "./assets/degen.png"; // Change this to your image path

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
  return (
    <Box
      sx={{
        backgroundColor: "#fdf2c8",
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
          maxWidth: 400,
          height: "auto",
          display: "block",
          margin: "0 auto",
          mb: 4,
        }}
        alt="Test image"
        src={testImage}
      />
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
        </Stack>
      </Box>
    </Box>
  );
};

export default DegenPurityTest;
