// Import the to_doModel to use
const todoList = require('../models/to_doModel');

//Fetching all the items on the list from the database
exports.getItems = async(req, res) => {
    try{
        const items = await todoList.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error getting items on the list.", error});
    }
};