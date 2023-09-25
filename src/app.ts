const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// set security HTTP response headers
app.use(helmet());



// enable cross origin resource sharing
app.use(cors());

export default app;