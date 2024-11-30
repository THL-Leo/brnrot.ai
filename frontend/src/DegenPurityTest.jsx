import React, { useState } from "react";
import { Box, Typography, Checkbox, Stack, Button } from "@mui/material";
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
    const [submitted, setSubmitted] = useState(false);
    const [roast, setRoast] = useState("");

    // const handleSubmit = async (questions) => {
    //   try {
    //     const res = await fetch(`/api/roast`, {
    //       method: 'POST',
    //       body: JSON.stringify({ questions: questions }),
    //       headers: {
    //         'Content-type': 'application/json',
    //       }
    //     });
    //     console.log(res)
    //   } catch(e) {
    //     console.log('whattup gang shit went wrong')
    //     console.log(e);
    //   }
    // }
    const handleSubmit = () => {
        fetch(`/api/roast`, {
            method: "POST",
            body: JSON.stringify({ questions: questions }),
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then((data) => {
                console.log(`received: ${data}`);
            })
            .catch((error) => {
                console.error("Error fetching API:", error);
            });
    };
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
            {!submitted ? (
                <Box>
                    <Typography sx={{ textAlign: "center", mb: 4 }}>
                        Click on every item you have done. MPS stands for Member
                        of the Preferred Sex.
                    </Typography>
                    <Box sx={{ textAlign: "left", padding: "0 1rem" }}>
                        <Stack spacing={0.5}>
                            {" "}
                            {/* Reduced spacing between items */}
                            {questions.map((question, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 0, // Remove gap
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            width: "24px", // Fixed width instead of minWidth
                                            fontSize: "1rem",
                                            textAlign: "right", // Right align the numbers
                                        }}
                                    >
                                        {index + 1}
                                    </Typography>
                                    <Typography>.</Typography>
                                    <Checkbox
                                        onChange={() => {
                                            _ = markedTrue.delete(question)
                                                ? _
                                                : markedTrue.add(question);
                                        }}
                                        sx={{
                                            padding: "2px", // Reduce checkbox padding
                                            "& .MuiSvgIcon-root": {
                                                fontSize: "1.2rem", // Smaller checkbox
                                            },
                                        }}
                                    />
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        {question}
                                    </Typography>
                                </Box>
                            ))}
                            <Button
                                sx={{
                                    borderRadius: "5",
                                    width: "3rem",
                                }}
                                variant="contained"
                                onClick={() => {
                                    handleSubmit(Array.from(markedTrue));
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            ) : (
                <div>{roast}</div>
            )}
        </Box>
    );
};

export default DegenPurityTest;
