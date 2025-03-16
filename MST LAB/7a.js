const express = require('express');
const app = express();
const trailRoutes = require('./route'); 
app.use('/', trailRoutes); 
const port = 3000;
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});