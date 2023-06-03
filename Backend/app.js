const express = require('express');
const app = express();

//Get PORT from config.
if(process.env !== 'PRODUCTION'){
    require('dotenv').config({
        path:"/configs/.env"
    })
}

module.exports = app