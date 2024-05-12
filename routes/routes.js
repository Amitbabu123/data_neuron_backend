// const express = require('express');
// const router = express.Router();
// const controller = require('../controllers/contoller');
// const { body } = require('express-validator');

// // Route to add new student data
// router.post('/add', [
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
//     body('Qualification').optional().isString().withMessage('Qualification must be a string'),
//     body('phone').optional().isNumeric().withMessage('Phone must be a number'),
// ], controller.addStudent);

// // Route to update existing student data
// router.put('/update/:id', [
//     body('name').notEmpty().withMessage('Name is required'),
//     body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
//     body('Qualification').optional().isString().withMessage('Qualification must be a string'),
//     body('phone').optional().isNumeric().withMessage('Phone must be a number'),
// ], controller.updateStudent);
// // all students details routes
// router.get('/students', controller.getAllStudents);
// // Route to get the count of add and update requests
// router.get('/count', controller.getCount);
// router.delete('/delete/:id', controller.deleteStudent); 


// module.exports = router;


// routes.js

const express = require('express');
const router = express.Router();
const controller = require('../controllers/contoller');
const { body } = require('express-validator');

// Route to add new student data
router.post('/add', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('Qualification').optional().isString().withMessage('Qualification must be a string'),
    body('phone').optional().isNumeric().withMessage('Phone must be a number'),
], controller.addStudent);

// Route to update existing student data
router.put('/update/:id', [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email address'),
    body('Qualification').optional().isString().withMessage('Qualification must be a string'),
    body('phone').optional().isNumeric().withMessage('Phone must be a number'),
], controller.updateStudent);

// Route to delete a student record
router.delete('/delete/:id', controller.deleteStudent);

// Route to get all students
router.get('/students', controller.getAllStudents);

// Route to get the count of add and update requests
router.get('/count', controller.getCount);

module.exports = router;
