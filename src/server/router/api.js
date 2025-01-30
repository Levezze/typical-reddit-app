import express from 'express';
import axios from 'axios';
import subredditRouter from "./subreddits/index.js"

const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}
router.use(timeLog)

/*
// define the home page route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})
*/

router.get('/oauth/token', async (req, res) => {
  console.log("🔹 Received request to /api/oauth/token");
  console.log("🔹 Query Params:", req.query);
  const code = req.query.code; // Extract code from query parameters

  if (!code) {
    console.error('❌ Missing authorization code');
    return res.status(400).json({ error: 'Authorization code is required' });
  }

  try {
    const response = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:5173/callback',
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${Buffer.from('yMSHBIADe0dj6H0d7stK5g:buhFs8Y2ZJQvGY6SKrt1zs_v3wbB_g').toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log("✅ Successfully retrieved access token from Reddit:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Failed to fetch access token:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
});

router.use("/subreddits", subredditRouter);

router.get('/r/:subreddits/:sort', async (req, res) => {
  const { subreddits, sort } = req.params;
  const queryParams = req.query;
  const queryString = new URLSearchParams(queryParams).toString();

  const url = `https://www.reddit.com/r/${subreddits}/${sort}?${queryString}&raw_json=1`;

  console.log(`Fetching posts from ${url}`);

  try {
    const response = await axios.get(url);
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;