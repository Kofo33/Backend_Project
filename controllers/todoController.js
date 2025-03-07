// Import the to_doModel to use
const todoList = require('../models/to_doModel');
const taskSchema = require('../validations/todoValidations');

//Fetching all the items on the list from the database
exports.getItems = async (req, res) => {
    try {
        const items = await todoList.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error getting items on the list.", error });
    }
};

//Fetching the items by Id from the database using the GET Request
exports.getItemsbyId = async (req, res) => {
    try {
        const item = await todoList.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Item not found" });
        res.json(item);
    } catch (error) {
        res.status(500).json({ message: "Error fetching item", error });
    }
};

//Adding an item to the database using the POST method
exports.addItem = async (req, res) => {
    //Validating the user's input before saving to the database
    const { error, value } = taskSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
    try {
        const newItem = new todoList(value); //Using the validated data
        await newItem.save();
        res.status(201).json({ message: "Item added successfully", item: newItem })
    } catch (error) {
        res.status(500).json({ message: "Error adding an item", error });
    }
};

//Updating an item using PUT Method
exports.updateId = async (req, res) => {
    //Validating the updates before applying them
    const { error, value } = taskSchema.validate(req.body, { allowUnknown: true }); //allowUnknown: true, lets the user update only the necessary fields instead of needing the full object.
    if (error) return res.status(400).json({ message: error.details[0].message });
    try {
        const updatedItem = await todoList.findByIdAndUpdate(req.params.id, value, { new: true });
        if (!updatedItem) return res.status(404).json({ message: "Item not found" });
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Error updating Item', error });
    }
};

//Deleting information from the database using DELETE Request
exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await todoList.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: "Item not found" });
        res.json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting item", error });
    }
};