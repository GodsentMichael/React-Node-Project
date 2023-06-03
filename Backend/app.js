const express = require('express');
const app = express();
const ErrorHandler = require('./utils/ErrorHandler')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const user = require('./routes/user')
const cors = require("cors");

// Register middlewares
app.use(express.json());
app.use("/", express.static("uploads"));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));


//Get PORT from config.
if(process.env !== 'PRODUCTION'){
    require('dotenv').config({
        path:"/configs/.env"
    })
}

// Import Routes
app.use('/api/v1/user', user)


// Error Handling
app.use(ErrorHandler)
module.exports = app