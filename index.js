const express = require('express');
let users = require('./users');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routers');

const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// CORS Handling
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));



// Log using Morgan
app.use(morgan('combined'), (req, res, next) => {
    next();
});
app.use(router)

// Error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(JSON.stringify({
        status: 'error',
        message: "terjadi kesalahan pada server."
    }));
});

// Routing 404 handling
app.use((req, res, next) => {
    res.status(404).send(JSON.stringify({
        status: 'error',
        message: "resource tidak ditemukan.",
    }));
});



app.listen(port, () => console.log(`Server is running at http://localhost:${port}.`));
