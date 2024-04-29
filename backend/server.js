require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')  // Import CORS
const credentialRoutes = require('./routes/credentials')
const userRoutes = require('./routes/user')

// express app
const app = express();

// CORS configuration: Replace 'https://sentinelle-1.onrender.com' with your actual frontend URL
app.use(cors({
    origin: 'https://sentinelle-1.onrender.com', // This should be the URL of your frontend
    credentials: true  // Allows credentials such as cookies, authorization headers, etc.
}));

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/credentials', credentialRoutes);
app.use('/api/user', userRoutes);

// Root route to confirm server is running
app.get('/', (req, res) => {
    res.status(200).send('Backend is running!');
});

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB & listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });