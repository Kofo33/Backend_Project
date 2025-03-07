// Importing necessary modules and libraries
const express = require('express');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todoRoutes');

//Connecting to MongoDB
require('dotenv').config();
connectDB();

//Starting an Express App
const app = express();
app.use(express.json());

//Loads database connection, routes and controllers
app.use('/api/tasks', todoRoutes); //Uses the todo Routes

app.listen(6700, () => console.log('Server is running successfully on Port 6700'));