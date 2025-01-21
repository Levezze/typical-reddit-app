import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors({ origin: '*' }));

app.get('/subreddits/popular', async (req, res) => {
  console.log('Received request to /subreddits/popular');  // Check if the endpoint is being hit

  try {
    const response = await axios.get("https://www.reddit.com/subreddits/popular.json?limit=10");
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    const dataJSON = response.data; 
    res.json(dataJSON);
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
    const response = await axios.get(`https://www.reddit.com/subreddits/search.json?q=${encodeURIComponent(query)}&limit=${limit}&sort=${sort}`);
    
    if (response.status < 200 || response.status >= 300) {
      throw new Error(`Reddit API error: ${response.statusText}`)
    }

    const dataJSON = response.data; 
    res.json(dataJSON);
  } catch (error) {
    console.error('Failed to fetch subreddits:', error.message);
    res.status(500).json({ error: 'Failed to fetch subreddits' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
