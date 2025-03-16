const mongoose = require('mongoose');
const noteSchema=require("./notes")
const Note = mongoose.model('Notes', noteSchema);


const express = require('express');

const app = express();

mongoose.connect('mongodb+srv://Vikramdb:Vikram1636@cluster0.unuid.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(data=>console.log("MONGODB connected Successfully"))
.catch(error=>console.error(error))
console.log("Note Model:", Note);

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});