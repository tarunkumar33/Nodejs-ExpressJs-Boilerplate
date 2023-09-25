import app from './app';
import logger from './lib/logger';

const server = app.listen(3000, () => {
  logger.info(`Listening to port ${3000}`);
});

const unexpectedErrorHandler = (error:Error) => {
  logger.info(error);
  process.exit(1);
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
