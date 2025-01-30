import express from 'express';
import cors from 'cors';
import axios from 'axios';

import apiRouter from "./router/api.js"

const app = express();

app.use(cors({ origin: '*' }));

app.get('/api/healthcheck', async (req, res) => {
  return res.json({status: "best"})
});

app.get('/healthcheck', async (req, res) => {
  return res.json({status: "best"})
});

app.use("/api", apiRouter)
app.use("/popular", apiRouter)
app.use("/subreddits", apiRouter)

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
