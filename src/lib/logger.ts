const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: "myapp" });

export default logger;