import React, { useState } from "react";
import { Box, Typography, Checkbox, Stack, Button } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
// Add your image import. Adjust the path according to your project structure
import testImage from "./assets/degen.png"; // Change this to your image path
import chillguy from "./assets/chillguy.png";

const questions = [
    "Have you had e-sex",
    "Have or are a Discord e kitten",
    "Played DRESS TO IMPRESS WITH MY BADDIES",
    "Have you watched Caseoh",
    "chill guy",
    "Have you been to Seaside bakery?",
    "#womeninmalefields #meninwomenfields",
    "Do you want to go to Diddy party",
    "Sticking out your gyatt for the rizzler",
    "Have you used gyatt to refer to someone’s ass",
    "Have you used type shit unironically",
    "brat?",
    "Who is the purple man at mcdonald’s",
    "What happened in ohio",
    "Are you a chill guy?",
    "What's at costco?",
    "Do you watch Duke Dennis?",
    "Do you watch Kai Cenat?",
    "Dafuq?",
    "Do you know Nara Smith?",
    "Who is Skibidi Toilet?",
    "Do you know Dexter Morgan?",
    "Do you yap a lot?",
    "Have you watched any Lookalike contest reels?",
    "Have you watched Mukbang in your car?",
    "Do you know of the Pho Controversy",
    "Do you know the We listen and don't judge trend",
    "Do you follow Nikocado Avocado's lore?",
    "Have you tried Grimace Shake",
    "Are you a Sigma",
    "Do you watch Andrew Tate?",
    "Listened to Thick of It unironically",
    "Do you watch Adin Ross",
    "Do you watch Jake Paul",
    "Do you watch Logan Paul",
    "We listen and dont judge",
    "Do you watch Nikocado avocado",
    "Do you play League of Legends",
    "Are you Diamond or higher",
    "Have you bought a skin for a egirl",
    "Do you know all the Chris Chan lore",
    "Are you a member of TPOT",
    "Have you tried Lunchly",
    "Have you been Gooning?",
    "Do you know Bing Chilling?",
    "Do you talk to chat?",
    "Have you been mogged or mogged anyone?",
    "Are you a glizzy gobbler?",
    "Do you watch Nickeh30?",
    "Have you T-posed before?",
    "Have you fanum taxed?",
    "Do you do things The Ocky Way?",
    "Do you watch IShowSpeed?",
    "Have you ever hit the Griddy?",
    "Do you know the way?",
    "Are you the Sussy Imposter?",
    "Did you pray today?",
    "Have you bought Fortnite Battle Pass?",
    "Do you play Pokemon Go everyday?",
    "Do you like the Smurf Cat?",
    "Do you play Valorant?",
    "Have you meowed for heals or asked someone to meow for heals?",
    "Do you watch Subway Surfer reels?",
    "Do you watch Minecraft Parkour reels?",
    "Have you seen Big Chungus?",
    "FE!N?",
];

const DegenPurityTest = () => {
    const [submitted, setSubmitted] = useState(false);
    const [roast, setRoast] = useState("");
    const [score, setScore] = useState(100);

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
            console.log(`received: ${data.res}`);
            setRoast(data);
            setScore(100 - arr.length);
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
                                    {question !== "chill guy" ?
                                    <Typography sx={{ fontSize: "1rem" }}>
                                        {question}
                                    </Typography> :
                                    <Box component={"img"} src={chillguy} sx={{width: "15rem"}}/>
                                    }
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
                <Box
                    sx={{
                        justifyContent: "center",
                        textAlign: "center"
                    }}
                >
                    <h1> {score} </h1>
                    <h2> {roast} </h2>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setScore(100);
                            setSubmitted(false);
                            setRoast('');
                        }}
                    >
                        <ReplayIcon />
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default DegenPurityTest;
