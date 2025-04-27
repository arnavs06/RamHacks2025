const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enhanced CORS configuration
const allowedOrigins = [
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:5000',
  'http://127.0.0.1:5000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', cors());

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date() });
});

// POST endpoint for generating meal plans
app.post('/generate-meal', async (req, res) => {
  try {
    const requiredFields = ['age', 'weight', 'height', 'gender', 'activity', 'diet', 'budget'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `Missing required field: ${field}` });
      }
    }

    const prompt = `
You are a nutritionist AI. Based on the following user information, create a healthy and budget-friendly weekly meal plan:
- Age: ${req.body.age}
- Weight: ${req.body.weight} lbs
- Height: ${req.body.height} cm
- Gender: ${req.body.gender}
- Activity Level: ${req.body.activity}
- Diet Type: ${req.body.diet}
- Allergies: ${req.body.allergies || 'none'}
- Likes: ${req.body.likes || 'not specified'}
- Dislikes: ${req.body.dislikes || 'not specified'}
- Budget: $${req.body.budget} per week

Provide breakfast, lunch, and dinner suggestions for each day of the week. 
Format your response with clear headings for each day and separate meals with line breaks.
Include approximate costs for each day's meals to help stay within budget.
    `;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful meal planning assistant that provides detailed, practical meal plans." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('OpenAI API Error:', data);
      return res.status(502).json({ error: "AI service error", details: data.error?.message || "Unknown error from AI service" });
    }

    if (!data.choices?.[0]?.message?.content) {
      return res.status(502).json({ error: "Invalid response format from AI service" });
    }

    res.json({ mealPlan: data.choices[0].message.content });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: "Internal server error",
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\u2705 Server running on port ${PORT}`);
  console.log(`\ud83d\udd17 http://localhost:${PORT}`);
});
