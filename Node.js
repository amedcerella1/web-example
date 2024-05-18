const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample route
app.get('/api/artworks', (req, res) => {
    const artworks = [
        { id: 1, title: 'Abstract 1', description: 'A beautiful abstract piece', price: 200 },
        { id: 2, title: 'Abstract 2', description: 'A stunning abstract artwork', price: 300 }
    ];
    res.json(artworks);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
