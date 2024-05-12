const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true, 
        unique: true 
    },
    Qualification: {
        type: String 
    },
    phone: {
        type: Number 
    }
});

module.exports = mongoose.model("Students", studentsSchema);
