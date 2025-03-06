//Importing necessary libraries and modules
const express = require('express');
const router = express.Router();
const todoController = require("../controllers/todoController");

//Creates routes to GET, POST, PUT & DELETE Items from the database.
router.get('/api', todoController.getItems);
router.get('/api/:id', todoController.getItemsbyId);
router.post('/api', todoController.addItem);
router.put('/api/:id', todoController.updateId);
router.delete('/api/:id', todoController.deleteItem);

module.exports = router;