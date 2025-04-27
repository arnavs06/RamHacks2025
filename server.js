// server.js

const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow frontend connections
app.use(cors());
app.use(express.json());

// POST endpoint for generating meal plans
app.post('/generate-meal', async (req, res) => {
    const userData = req.body;

    const prompt = `
You are a nutritionist AI. Based on the following user information, create a healthy and budget-friendly weekly meal plan:
- Age: ${userData.age}
- Weight: ${userData.weight} lbs
- Height: ${userData.height} cm
- Gender: ${userData.gender}
- Activity Level: ${userData.activity}
- Diet Type: ${userData.diet}
- Allergies: ${userData.allergies}
- Likes: ${userData.likes}
- Dislikes: ${userData.dislikes}
- Budget: $${userData.budget} per week

Provide breakfast, lunch, and dinner suggestions for each day of the week.
`;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful meal planning assistant." },
                    { role: "user", content: prompt }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();

        // Error handling: Check if OpenAI responded correctly
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            console.error('Bad OpenAI Response:', data);
            return res.status(500).json({ error: "Invalid AI response format" });
        }

        // Success! Send back meal plan
        res.json({ mealPlan: data.choices[0].message.content });

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: "Failed to fetch meal plan from AI" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
