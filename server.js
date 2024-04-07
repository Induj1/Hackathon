const express = require('express'); // Import the Express module

const app = express(); // Create an Express application

app.get('/api/hello', (req, res) => { // Define an endpoint
    res.json({ message: 'Hello, world!' }); // Send a JSON response
});

const PORT = process.env.PORT || 3000; // Specify the port number
app.listen(PORT, () => { // Start the server
    console.log(Server is running on port ${PORT});
});