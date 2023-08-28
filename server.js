const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mengizinkan permintaan lintas domain (CORS)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Menangani permintaan formulir kontak
app.post('/submit-contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    res.status(200).json({ message: 'Message received successfully.' });
});

// Mulai server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
