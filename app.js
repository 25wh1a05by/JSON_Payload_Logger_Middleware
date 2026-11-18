const express = require('express');

const app = express();

// Parse incoming JSON data
app.use(express.json());

// Custom logging middleware
app.use((req, res, next) => {
    if (req.method === 'POST') {
        console.log('JSON Payload Keys:', Object.keys(req.body));
    }
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to JSON Payload Logger Server!');
});

// POST route
app.post('/feedback', (req, res) => {
    res.send('Feedback received successfully!');
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
