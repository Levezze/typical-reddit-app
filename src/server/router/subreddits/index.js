import express from 'express';
import axios from 'axios';
const router = express.Router()

router.get(['/popular', '/popular.json'], async (_req, res) => {
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

router.get('/search.json', async (req, res) => {
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

export default router;