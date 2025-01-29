import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors({ origin: '*' }));

app.get('/api/oauth/token', async (req, res) => {
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

app.get('/subreddits/popular', async (req, res) => {
  console.log('Received request to /subreddits/popular');  // Check if the endpoint is being hit

  try {
    const response = await axios.get("https://www.reddit.com/subreddits/popular.json?&raw_json=1$limit=10");
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch popular subreddits:', error.message);
    res.status(500).json({ error: 'Failed to fetch popular subreddits' });
  }
});

app.get('/subreddits/search.json', async (req, res) => {
  const query = req.query.q;
  const limit = req.query.limit || 10;
  const sort = req.query.sort || 'relevance';

  console.log(`Searching for subreddits with query: ${query}`);

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' })
  };

  try {
    const response = await axios.get(`https://www.reddit.com/subreddits/search.json?q=${encodeURIComponent(query)}&raw_json=1&limit=${limit}&sort=${sort}`);
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    res.json(response.data);
  } catch (error) {
    console.error('Failed to fetch subreddits:', error.message);
    res.status(500).json({ error: 'Failed to fetch subreddits' });
  }
});

app.get('/r/:subreddits/:sort', async (req, res) => {
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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
