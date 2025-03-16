const express = require('express');
const app = express();

const requestLogger = (req, res, next) => {
 console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
 next();
};

app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);

app.post('/notes', (req, res, next) => {
 if (!req.body.content) {
    return next(new Error('Note content is required'));
 }
 res.send('Note created successfully!');
});

app.get('/', (req, res) => {
 res.send('GET request to homepage');
});

app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).send(`Custom Error: ${err.message}`);
});

const port = 3000;
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
