import React, { useState } from "react";
import { Box, Typography, Checkbox, Stack, Button } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
// Add your image import. Adjust the path according to your project structure
import testImage from "./assets/degen.png"; // Change this to your image path
import chillguy from "./assets/chillguy.png";
import donpollo from "./assets/donpollo.png";

const questions = [
    "Have you had e-sex",
    "Have or are a Discord e kitten",
    "Played DRESS TO IMPRESS WITH MY BADDIES",
    "Do you watch Caseoh?",
    "chill guy",
    "Have you been to Seaside bakery?",
    "Do you know #womeninmalefields or #meninwomenfields?",
    "Do you want to go to a Diddy party",
    "Sticking out your gyatt for the rizzler",
    "Have you used gyatt to refer to someone’s ass",
    "Do you use type shit unironically?",
    "brat?",
    "Who is the purple man at mcdonald’s",
    "What happened in ohio",
    "What's at costco?",
    "Do you watch Duke Dennis?",
    "Are you a fan of Kai Cenat?",
    "Dafuq?",
    "Do you know Nara Smith?",
    "Who is Skibidi Toilet?",
    "Have you heard of Dexter Morgan?",
    "Do you yap a lot?",
    "Watched any Lookalike contest reels?",
    "Have you enjoyed Mukbang in your car?",
    "Do you know of the Pho Controversy?",
    "Know the 'We listen and don't judge' trend?",
    "Do you follow Nikocado Avocado's lore?",
    "Tried Grimace Shake?",
    "Are you a Sigma?",
    "Do you watch Andrew Tate?",
    "Don Pollo",
    "Listened to Thick of It unironically",
    "Ever watched Adin Ross?",
    "Have you seen Jake Paul?",
    "Do you watch Logan Paul?",
    "We listen and dont judge",
    "Are you into Nikocado avocado?",
    "Do you play League of Legends?",
    "Reached Diamond or higher in LoL?",
    "Bought a skin for an e-girl?",
    "Know all the Chris Chan lore?",
    "Are you a member of TPOT?",
    "Have you tried Lunchly?",
    "Have you been Gooning?",
    "Do you know Bing Chilling?",
    "Talked to chat as if you're streaming?",
    "Have you been mogged or mogged anyone?",
    "Are you a glizzy gobbler?",
    "Do you watch Nickeh30?",
    "Have you T-posed before?",
    "Have you fanum taxed or been fanum taxed?",
    "Do things The Ocky Way?",
    "Do you watch IShowSpeed?",
    "Hit the Griddy recently?",
    "Do you know the way?",
    "Are you the Sussy Imposter?",
    "Did you pray today?",
    "Bought the Fortnite Battle Pass?",
    "Do you know the I play Pokemon Go everyday meme?",
    "Are you a fan of the Smurf Cat?",
    "Play Valorant often?",
    "Meowed for heals or asked someone to?",
    "Do you watch Subway Surfer reels?",
    "Enjoy Minecraft Parkour reels?",
    "Seen Big Chungus?",
    "FE!N?",
    "Watched 'Lebron You are my sunshine'?",
    "Do you know the Morbin time?",
    "Ever said Damn Daniel?",
    "Know where the huzz at?",
    "Have you said What are Those?",
    "Seen the Bee movie?",
    "Do you know the OIIAIO cat?",
    "Have you said Holy Moly?",
    "Who is Livvy Dune?",
    "Recognize the Blue Tie Kid?",
    "Have you edged before?",
    "Are you an Edgelord?",
    "Do you mew?",
    "Used L + Ratio unironically?",
    "Do you have negative aura?",
    "Do you pass the vibe check?",
    "Ever tried looksmaxxing?",
    "Are you in your Winter Arc?",
    "Said 'On some chill shit' unironically?",
    "Used 'On God' or 'On Ja' before?",
    "Ever touched grass?",
    "Say 'bruh' daily?",
    "Do you have negative rizz?",
    "Have you glazed someone or been glazed?",
    "Say 'Sheesh' unironically?",
    "Ever said 'I like ya cut g' to a haircut?",
    "Participated in No Nut November?",
    "Are you zesty?",
    "Know Josh Hutcherson or his song 'Whistle'?",
    "Are you delulu?",
    "Listened to 'Kiki do you love me'?",
    "Used 'goofy ahh' or '___ ahh' unironically?",
    "Have you heard of Baby Gronk?",
    "Said 'Bussing' unironically?"
];

const DegenPurityTest = () => {
    const [submitted, setSubmitted] = useState(false);
    const [roast, setRoast] = useState("");
    const [score, setScore] = useState(100);
    // const [checkedItems, setCheckedItems] = useState(new Set());

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
                minWidth: "100vw",
                fontFamily: "'Comic Sans', monospace", // More retro looking font
                boxSizing: "border-box",
            }}
            id= { Math.random() <= 0.6 ? "background" : Math.random() <= 0.85 ? "background2" : "background1" }
        >
            <Box
                component="img"
                sx={{
                    width: "100%",
                    maxWidth: 800,
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
                    <Typography sx={{ textAlign: "center", mb: 2, fontStyle: 'italic', fontSize: '1.2rem' }}>
                        Welcome to the Degen Purity Test. This test will determine how much of a degenerate you are.
                    </Typography>
                    <Typography sx={{ textAlign: "center", mb: 2, fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Caution: If you score less than 50, you might need to seek professional help.
                    </Typography>
                    <Typography sx={{ textAlign: "center", mb: 2, fontSize: '1.2rem' }}>
                        Click on every item you know. You already have negative aura by even starting this test.
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
                                            width: "35px", // Increased width to fit three digits
                                            fontSize: "1.2rem",
                                            textAlign: "right", // Right align the numbers
                                            // paddingRight: "0.5rem", // Add some space between number and checkbox
                                        }}
                                    >
                                        {index + 1 + '.'}
                                    </Typography>
                                    <Checkbox
                                        // checked={markedTrue.has(question)}
                                        onChange={(event) => {
                                            if (event.target.checked) {
                                                markedTrue.add(question);
                                            } else {
                                                markedTrue.delete(question);
                                            }

                                        }}
                                        sx={{
                                            padding: "2px", // Reduce checkbox padding
                                            fontSize: "1.2rem", // Smaller checkbox
                                        }}
                                    />
                                    {question === "chill guy" ? (
                                        <Box component={"img"} src={chillguy} sx={{width: "15rem"}}/>
                                    ) : question === "Don Pollo" ? (
                                        <Box component={"img"} src={donpollo} sx={{width: "15rem"}}/>
                                    ) : (
                                        <Typography sx={{ fontSize: "1.2rem" }}>
                                            {question}
                                        </Typography>
                                    )}
                                </Box>
                            ))}
                            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'left' }}>
                                <Button
                                    sx={{
                                        borderRadius: "5",
                                        width: "5rem",
                                        mt: 1,
                                        mb: 2,
                                    }}
                                    variant="contained"
                                    onClick={async () => {
                                        await handleSubmit(Array.from(markedTrue));
                                    }}
                                >
                                    Submit
                                </Button>
                                <Button
                                    sx={{
                                        borderRadius: "5",
                                        width: "5rem",
                                        mt: 1,
                                        mb: 2,
                                    }}
                                    onClick={() => {
                                        // setCheckedItems(new Set());
                                        markedTrue.clear();
                                    }}
                                    variant="contained"
                                >
                                    Clear
                                </Button>
                            </Box>
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
                    {score >= 91 && score <= 100 && (
                        <h3>Test maker&apos;s notes: You&apos;re basically a saint. Touch some grass though.</h3>
                    )}
                    {score >= 71 && score <= 90 && (
                        <h3>Test maker&apos;s notes: Slightly contaminated by the internet, but still salvageable.</h3>
                    )}
                    {score >= 51 && score <= 70 && (
                        <h3>Test maker&apos;s notes: You&apos;re definitely spending too much time online.</h3>
                    )}
                    {score >= 31 && score <= 50 && (
                        <h3>Test maker&apos;s notes: Serious degen behavior detected. Seek grass immediately.</h3>
                    )}
                    {score >= 11 && score <= 30 && (
                        <h3>Test maker&apos;s notes: Critical levels of degeneration. Professional help recommended.</h3>
                    )}
                    {score >= 0 && score <= 10 && (
                        <h3>Test maker&apos;s notes: Maximum degen achieved. Please delete your internet connection.</h3>
                    )}
                    <Button
                        variant="contained"
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


