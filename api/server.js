import express from 'express';
import cors from 'cors';

import apiRouter from "./router/api.js"

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/healthcheck', async (req, res) => {
  return res.json({status: "best"})
});

app.get('/healthcheck', async (req, res) => {
  return res.json({status: "best"})
});

app.use("/api", apiRouter);

export default app;