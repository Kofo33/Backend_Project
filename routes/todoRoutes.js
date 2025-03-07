//Importing necessary libraries and modules
const express = require('express');
const router = express.Router();
const todoController = require("../controllers/todoController");

//Creates routes to GET, POST, PUT & DELETE Items from the database.
router.get('/', todoController.getItems);
router.get('/:id', todoController.getItemsbyId);
router.post('/', todoController.addItem);
router.put('/:id', todoController.updateId);
router.delete('/:id', todoController.deleteItem);

module.exports = router;