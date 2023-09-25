const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// set security HTTP response headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cross origin resource sharing
app.use(cors());

export default app;