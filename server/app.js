const express = require('express')
const helmet = require('helmet')
const cors = require('cors');
const httpStatus = require('http-status');

const app = express();


// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
