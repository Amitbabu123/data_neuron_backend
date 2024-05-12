// const express = require('express');
// const app = express();
// const cors = require('cors');


// // Enable CORS for all routes
// app.use(cors());

// const port = 3000;
// const mongoose = require('mongoose');
// const routes = require('./routes/routes');

// // Connect to MongoDB
// mongoose.connect("mongodb+srv://amitkumar823906:bn0vOYY3MhTvl8cw@crud-operation.ntdrccp.mongodb.net/?retryWrites=true&w=majority&appName=crud-operation")
//     .then(() => console.log("Connected to MongoDB"))
//     .catch(err => console.error("Failed to connect to MongoDB:", err));

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Routes
// app.use('/', routes);

// // Start the server
// app.listen(port, () => {
//     console.log(`Server listening at http://localhost:${port}`);
// });

// index.js

// index.js

require('dotenv').config(); // Add this line to load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.DATABASE; // Retrieve MongoDB URI from environment variable

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB:", err));

// Routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
