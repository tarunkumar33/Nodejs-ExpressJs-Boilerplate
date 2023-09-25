const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

// set security HTTP response headers
app.use(helmet());



export default app;