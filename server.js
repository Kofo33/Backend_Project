// Importing necessary modules and libraries
const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

//Connecting to MongoDB
require('dotenv').config(); // This loads environment variables (.process.env)
connectDB();

//Starting an Express App
const app = express();
app.use(express.json());

//Loads database connection, routes and controllers
app.use('/api/tasks', todoRoutes); //Uses the todo Routes

//Handling unknown routes
app.use((req, res, next) => {
    res.status(404).json({ error: "Route not found." })
});

//Global error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Oops!, Something went wrong" });
});

//Starting the server
const PORT = process.env.PORT || 6700;
app.listen(PORT, () => console.log(`Server is running successfully on Port ${PORT}`));