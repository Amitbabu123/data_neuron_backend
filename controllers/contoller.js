// controller.js

const { validationResult } = require('express-validator');
const Students = require("../models/students");

let addCount = 0; // Counter for add requests
let updateCount = 0; // Counter for update requests

exports.getAllStudents = async (req, res) => {
    try {
        const allStudents = await Students.find();
        res.json(allStudents);
    } catch (error) {
        console.error("Error fetching all students:", error);
        res.status(500).json({ error: "Failed to fetch students" });
    }
};

exports.addStudent = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, Qualification, phone } = req.body;

        // Check if any value is missing
        if (!name || !email || !Qualification || !phone) {
            return res.status(400).json({ error: "Please enter all valid data" });
        }

        // Check if student with same email already exists
        const existingStudent = await Students.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ error: "Student with this email already exists" });
        }

        // Check if name contains only alphabets
        if (!/^[a-zA-Z\s]*$/.test(name)) {
            return res.status(400).json({ error: "Please enter a valid name" });
        }

        // Check if phone number has minimum 10 digits
        if (phone.length < 10) {
            return res.status(400).json({ error: "Phone number should have minimum 10 digits" });
        }

        const newStudent = new Students({ name, email, Qualification, phone });
        await newStudent.save();
        addCount++;
        res.status(201).json({ message: "Student added successfully" });
    } catch (error) {
        console.error("Error adding student:", error);
        res.status(500).json({ error: "Failed to add student" });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const id = req.params.id;
        await Students.findByIdAndDelete(id);
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error("Error deleting student:", error);
        res.status(500).json({ error: "Failed to delete student" });
    }
};

exports.updateStudent = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const id = req.params.id;
        const { name, email, Qualification, phone } = req.body;

        // Check if any value is missing
        if (!name || !email || !Qualification || !phone) {
            return res.status(400).json({ error: "Please enter all valid data" });
        }

        // Check if name contains only alphabets
        if (!/^[a-zA-Z\s]*$/.test(name)) {
            return res.status(400).json({ error: "Please enter a valid name" });
        }

        // Check if phone number has minimum 10 digits
        if (phone.length < 10) {
            return res.status(400).json({ error: "Phone number should have minimum 10 digits" });
        }

        await Students.findByIdAndUpdate(id, { name, email, Qualification, phone });
        updateCount++;
        res.json({ message: "Student updated successfully" });
    } catch (error) {
        console.error("Error updating student:", error);
        res.status(500).json({ error: "Failed to update student" });
    }
};

exports.getCount = (req, res) => {
    res.json({ addCount, updateCount });
};
