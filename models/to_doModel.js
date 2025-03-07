//Importing Mongoose 
const mongoose = require('mongoose');

// Creating a new Schema for the database
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: { type: Boolean, default: false },
}, { timestamps: true }); // This adds createdAt and updatedAt field to the list

// Creates a To-Do List model that lets me interact with the database
const todoList = mongoose.model('todoList', todoSchema);

//Exporting the model
module.exports = todoList;