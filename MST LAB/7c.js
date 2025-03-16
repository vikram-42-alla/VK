const express = require('express');
const mongoose = require('mongoose');
const noteSchema = require('./notes'); 
const app = express();
mongoose.connect('your mongodb connection string', {
 useNewUrlParser: true,
 useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('MongoDB connection error:', err));

const port = 3000;
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
