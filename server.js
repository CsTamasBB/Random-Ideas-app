const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;
const connectDB = require('./config/db');

connectDB();

const app = express();

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//cors
app.use(cors({
    origin: ['http://localhost:5000', 'http://localhost:3000'],
    credentials: true,
}));

app.get('/', (req, res) => {
    res.json( {message: "hello"});
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter)

app.listen(port, () => console.log("Server listening on port: " + port));