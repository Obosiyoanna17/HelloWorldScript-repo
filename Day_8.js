// Create a new express.js app
const express = require('express');
const app = express();
// Set up a template engine
app.set('view engine', 'ejs');
// Define routes
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my home page!!!</h1>");
});
app.get('/about', (req, res) => {
    res.send('<h1>Learn about us here!!</h1>');
});
app.get('/contact', (req, res) => {
    res.render('<h1>This is the contact page!!</h1>');
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});