const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// CORS middleware to enable cross-origin requests
app.use(cors());

// JSON parsing middleware for request body
app.use(bodyParser.json());

// URL-encoded parsing middleware for form data
app.use(bodyParser.urlencoded({ extended: true }));

// Routes, controllers, and other middleware should be defined after the middleware setups

// Sample route for testing
app.get("/", (req, res) => {
  res.send("Hello, Baby Store!");
});

// Start the server
app.listen(port, () => {
  console.log(`Baby-store application is listening on port ${port}`);
});
