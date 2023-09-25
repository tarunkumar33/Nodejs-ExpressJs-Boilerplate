import ApiError from "./utils/ApiError";
import { errorConverter, errorHandler } from "./middlewares/error";

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const httpStatus = require("http-status");

const app = express();

// set security HTTP response headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cross origin resource sharing
app.use(cors());

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

export default app;