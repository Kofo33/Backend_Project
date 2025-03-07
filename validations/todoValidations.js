// Importing Joi to be used for validation
const Joi = require('joi');

const taskSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    description: Joi.string().optional().allow('').max(500), //.optional() and .allow() allow a field to be missing and also allows empty strings.
    dueDate: Joi.date().greater('now').optional(), // The due date of the task is going to be in the future
    Ccmpleted: Joi.boolean().default(false).optional() // To choose whether it is completed or not and the default setting is not completed.
});

module.exports = taskSchema;