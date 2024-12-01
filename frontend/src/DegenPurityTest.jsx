import React, { useState } from "react";
import { Box, Typography, Checkbox, Stack, Button } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
// Add your image import. Adjust the path according to your project structure
import testImage from "./assets/degen.png"; // Change this to your image path
import chillguy from "./assets/chillguy.png";
import donpollo from "./assets/donpollo.png";
import johnpork from "./assets/johnpork.webp";

const questions = [
    "Are you unemployed?",
    "Just put the fries in the bag",
    "Are you delulu?",
    "Are you single?",
    "Have you had e-sex",
    "Have or are a Discord e kitten",
    "Played DRESS TO IMPRESS WITH MY BADDIES",
    "chill guy",
    "Have you been to Seaside bakery?",
    "Do you know #womeninmalefields or #meninwomenfields?",
    "Do you want to go to a Diddy party",
    "Sticking out your gyatt for the rizzler",
    "Have you used gyatt to refer to someone’s ass",
    "Do you use type shit unironically?",
    "Who is the purple man at mcdonald’s",
    "What happened in ohio",
    "What's at Costco?",
    "Do you watch Duke Dennis?",
    "Do you watch Kai Cenat?",    
    "Do you watch Adin Ross?",
    "Do you watch Caseoh?",
    "Do you watch Nickeh30?",
    "Do you watch IShowSpeed?",
    "Do you watch Andrew Tate?",
    "Are you a Sigma?",
    "Don Pollo",
    "Watches TikTok/Reels for over 8 hours a day?",
    "Have a streak with a friend on TikTok",
    "Do you know Nara Smith?",
    "Know of Skibidi Toilet?",
    "Do you watch Dexter Morgan edits unironically?",
    "Ever been called a Yapper",
    "Participated any Lookalike contest reels?",
    "Have you enjoyed Mukbang in your car videos?",
    "Do you know of the Pho Controversy?",
    "Do you know the 'We listen and We don't judge' trend?",
    "Do you follow Nikocado Avocado's lore?",
    "Tried Grimace Shake?",
    "Listened to Thick of It unironically",
    "Do you watch Jake Paul?",
    "Do you watch Logan Paul?",
    "Know the Backroom lore?",
    "Do you play League of Legends?",
    "Reached Diamond or higher in LoL?",
    "Bought a skin for an e-girl?",
    "Know all the Chris Chan lore?",
    "Are you a member of TPOT?",
    "Have you tried Lunchly?",
    "Have you ever Gooned?",
    "Let him ___?",
    "English or Spanish?",
    "Talked to chat as if you're streaming?",
    "Have you been mogged or mogged anyone?",
    "Have you T-posed before?",
    "Have you fanum taxed or been fanum taxed?",
    "Do things The Ocky Way?",
    "Ever hit the Griddy?",
    "Do you know the way?",
    "Are you the Sussy Imposter?",
    "Did you pray today?",
    "Are you a fan of the Smurf Cat?",
    "Play Valorant often?",
    "Are you into e-dating??",
    "Tried to get a Valorant egirl/eboy?",
    "Meowed for heals or asked someone to?",
    "Do you watch Subway Surfer reels?",
    "Enjoy Minecraft Parkour reels?",
    "FE!N?",
    "Watched 'Lebron You are my sunshine'?",
    "Do you know the Morbin time?",
    "Do you own a Stanley Cup?",
    "Know where the huzz at?",
    "Low-taper Fade?",
    "Listens to the Talk Tuah podcast?",
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
    "John Pork",
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
                                    ) : question === "John Pork" ? (
                                        <Box component={"img"} src={johnpork} sx={{width: "15rem"}}/>
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


