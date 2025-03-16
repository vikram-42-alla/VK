const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
 },
 content: {
    type: String,
    required: true
 },
 createdAt: {
    type: Date,
    default: Date.now
 },
 updatedAt: {
    type: Date
 }
});

module.exports = noteSchema;