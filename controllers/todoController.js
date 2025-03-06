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

//Fetching the items by Id from the database using the GET Request
exports.getItemsbyId = async (req,res) => {
    try {
        const item = await todoList.findById(req.params.id);
        if(!item) return res.status(404).json({message: "Item not found"});
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: "Error fetching item"});
    }
};

//Adding an item to the database using the POST method
exports.addItem = async(req, res) => {
    try {
        const {Title, Description, Status, Timestamps} = req.body;
        const newItem = new todoList({Title, Description, Status, Timestamps});
        await newItem.save();
        res.status(201).json({ message: "Item added successfully"})
    } catch (error) {
        res.status(500).json({message: "Error adding an item"});
    }
};

// 
exports.updateId = async(req, res) => {
    try {
        const updatedItem = await todoList.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!updatedItem) return res.status(404).json({ message: "Item not found"});
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({message : 'Error updating Item'})
    }
}