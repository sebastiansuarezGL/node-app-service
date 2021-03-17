import mongoose from 'mongoose';
import logger from '../utils/logger';

function init() {
  mongoose.connection.on('error', (error) => {
    logger.error(`[Mongoose]: Error connecting to the db ${error}`);
  });

  mongoose.connection.once('open', () => {
    logger.info('[Mongoose]: DB connection established');
  });
  if (process.env.MONGO_CONNECTION_STRING) {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } else {
    logger.error('[Mongoose]: MongoDB string connection not found');
  }
}

export default init;
