// const express = require('express');
// const bodyParser = require('body-parser');

// to use import => "type": "module", in package.json
import express from "express";
import bodyParser from "body-parser"; // take incoming post request bodies
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // gonna use json data in whole application
app.use("/users", userRoutes); // use /users + userRoutes

// Browsers can only make get request
app.get("/", (req, res) => {       // Home Page
    res.send("Welcome to Home Page!");  // Response to Client Side
});

app.listen(PORT, () => {    // listen for incoming requests
    console.log(`Server is running on http://localhost:${PORT}`);
})