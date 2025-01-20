import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors({ origin: '*' }));

app.get('/subreddits/popular', async (req, res) => {
  console.log('Received request to /subreddits/popular');  // Check if the endpoint is being hit

  try {
    const response = await axios.get("https://www.reddit.com/subreddits/popular.json?limit=20");
    
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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
