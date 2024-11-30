import React, { useState } from "react";
import { Box, Typography, Checkbox, Stack, Button } from "@mui/material";
// Add your image import. Adjust the path according to your project structure
import testImage from "./assets/degen.png"; // Change this to your image path
const questions = [
    "E-sex",
    "Discord e kitten",
    "DRESS TO IMPRESS WITH MY BADDIES",
    "caseoh",
    "chill guy y",
    "Seaside bakery",
    "#womeninmalefields #meninwomenfields",
    "Diddy party",
    "sticking out ur gyatt for the rizzler",
    "used gyatt to refer to someone’s ass",
    "have you used type shit unironically",
    "brat?",
    "who was the purple man at mcdonald’s",
    "what happened in ohio",
    "Are you a chill guy?",
    "Whats at costco?",
    "Duke Dennis?",
    "Kai Cenat?",
    "Dafuq?",
    "Nara Smith?",
    "Skibidi?",
    "Dexter Morgan?",
    "Yaping?",
    "Lookalike contests?",
    "Mukbang in your car?",
    "Pho Controversy",
    "We listen and dont judge",
    "Nikocado avocado",
    "League of legend",
    "Have you tried Grimace Shake",
    "Are you a Sigma",
    "Andrew Tate?",
    "Listened to Thick of It unironically",
    "Adin Ross",
    "Jake Paul",
    "Logan Paul",
    "We listen and dont judge",
    "Nikocado avocado",
    "League of legend",
    "Have you tried Grimace Shake",
    "Are you a Sigma",
    "Andrew Tate?",
    "Listened to Thick of It unironically",
    "Adin Ross",
    "Jake Paul",
    "Logan Paul"
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
    console.log('use api', import.meta.env.VITE_USE_PRODUCTION_API)
    const handleSubmit = async (arr) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/roast`, {
                method: "POST",
                body: JSON.stringify({ questions: arr }),
                headers: {
                    "Content-type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.text();
            console.log(`received: ${data}`);
            setRoast(data);
            setSubmitted(true);
        } catch (error) {
            console.error("Error fetching API:", error);
        }
    };
    let markedTrue = new Set();

    return (
        <Box
            sx={{
                backgroundColor: "#fdf2c8",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                color: "#000",
                minHeight: "100vh", // Change to cover full viewport height and beyond
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
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                markedTrue.add(question);
                                            } else {
                                                markedTrue.delete(question);
                                            }
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
                                onClick={async () => {
                                    await handleSubmit(Array.from(markedTrue));
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
