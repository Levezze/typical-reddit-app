import express from 'express';
import axios from 'axios';
import subredditRouter from "./subreddits/index.js"

const router = express.Router()
const CLIENT_ID = 'yMSHBIADe0dj6H0d7stK5g';
const CLIENT_SECRET = 'buhFs8Y2ZJQvGY6SKrt1zs_v3wbB_g';
const REDIRECT_URI = 'http://localhost:5173/callback';


// GET TOKEN

router.get('/oauth/token', async (req, res) => {
  console.log("🔹 Received request to /api/oauth/token");
  console.log("🔹 Query Params:", req.query);
  const code = req.query.code; // Extract code from query parameters

  if (!code) {
    console.error('❌ Missing authorization code');
    return res.status(400).json({ error: 'Authorization code is required' });
  }

  try {
    // test
    console.log("🔹 Sending request to Reddit API for access token...");

    const response = await axios.post(
      'https://www.reddit.com/api/v1/access_token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Typical-Redd-App/0.1 (by u/Comfortable-Jury1660)',
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


// REVOKE TOKEN

router.post('/v1/revoke_token', async (req, res) => {
  console.log("🔹 Received request to /v1/revoke_token");
  console.log("🔹 Request Body:", req.body);
  const TOKEN = req.body.token; // Extract code from query parameters

  if (!TOKEN) {
    console.error('❌ Missing token');
    return res.status(400).json({ error: 'Token required' });
  }

  try {
    // test
    console.log("🔹 Sending request to revoke the token...");

    const response = await axios.post('https://www.reddit.com/api/v1/revoke_token',
      new URLSearchParams({
        token: TOKEN,
        token_type_hint: 'access_token',
      }).toString(),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Typical-Redd-App/0.1 (by u/Comfortable-Jury1660)',
        },
      }
    );

    console.log("✅ Successfully revoked token:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Failed to revoke token:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed revoke token' });
  }
});


// VOTE

router.post('/vote', async (req, res) => {
  console.log("🔹 Received request to /api/vote");
  console.log("🔹 Query Params:", req.query);
  const DIR = req.query.dir; // Extract code from query parameters
  const ID = req.query.id; // Extract code from query parameters
  const TOKEN = req.query.token; // Extract code from query parameters

  if (!DIR || !ID) {
    console.error('❌ Missing params dir/id');
    return res.status(400).json({ error: 'Direction and ID are required' });
  }

  try {
    // test
    console.log("🔹 Sending request to Reddit API to vote...");

    const response = await axios.post(
      'https://oauth.reddit.com/api/vote',
      new URLSearchParams({
        dir: DIR,
        id: ID,
      }).toString(),
    );

    console.log("✅ Successfully voted:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Failed to vote:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to vote' });
  }
});


// SUBREDDITS

router.use("/subreddits", subredditRouter);


// FEED -> GET POSTS

router.get('/r/:subreddits/:sort', async (req, res) => {
  const { subreddits, sort } = req.params;
  const queryParams = req.query;
  const queryString = new URLSearchParams(queryParams).toString();

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing access token' });
  };

  const url = `https://oauth.reddit.com/r/${subreddits}/${sort}?${queryString}&raw_json=1`;

  console.log(`Fetching posts from ${url} with token: ${token}`);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'typical-redd-app/0.1 (by u/Comfortable-Jury1660)',
      }
    });
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch posts' });
  }
});


// PROFILE INFORMATION

router.get('/v1/me', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Missing access token' });
  };

  const url = `https://oauth.reddit.com/api/v1/me`; // &raw_json=1

  console.log(`Fetching posts from ${url} with token: ${token}`);

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'User-Agent': 'Typical-Redd-App/0.1 (by u/Comfortable-Jury1660)',
      }
    });
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch posts:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;