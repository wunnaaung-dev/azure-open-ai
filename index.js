const express = require('express');
const cors = require('cors');
const serverless = require('serverless-http');
const generateReply = require('./src/service/chat.service');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        const reply = await generateReply(message); // ✅ await async function
        res.status(200).json({ reply });
    } catch (error) {
        console.error("Error from Azure OpenAI:", error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.post('/api/test', (req, res) => {
    res.send({
        reply: "Hello! You've successfully reached the test route. This confirms that your POST request is working properly and the server is responding as expected."
    });
});

// Local development only
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = serverless(app); 
