import express from 'express';
import cors from 'cors';
import { mongoose } from './middlewares';
import router from './modules';

const app = express();

mongoose();

app.use(express.json());
app.use(cors());

app.use('/health', (_, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
  });
});

app.use(router);

export default app;
