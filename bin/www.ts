import app from '../src/app';
import logger from '../src/utils/logger';

app.listen(process.env.PORT, () => {
  logger.info(`[Server]: Listening on port ${process.env.PORT}`);
});
