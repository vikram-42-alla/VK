const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
 res.send('Welcome to AdventureTrails!');
});

router.get('/trails', (req, res) => {
 res.json({ message: 'List of all adventure trails will be here' });
});

router.get('/trails/:trailId', (req, res) => {
 const trailId = req.params.trailId;
 res.send(`Details for trail ID: ${trailId}`);
});

router.get('/search', (req, res) => {
 const location = req.query.location;
 const activity = req.query.activity;
 res.send(`Search results for location: ${location}, activity: ${activity}`);

});
module.exports = router;