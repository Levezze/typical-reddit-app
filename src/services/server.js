import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors({ origin: '*' }));

app.get('/subreddits/popular', async (req, res) => {
  console.log('Received request to /subreddits/popular');  // Check if the endpoint is being hit

  try {
    // const response = await axios.get('https://www.reddit.com/r/all/top.json?limit=25');
    const response = await axios.get('https://www.reddit.com/subreddits/popular.json?limit=20');

    console.log("Raw data from Reddit:", response.data);  // Log raw data to check its structure

    const subreddits = response.data.data.children.map(child => {
      const subreddit = child.data;
      return {
        name: subreddit.display_name,
        title: subreddit.title,
        subscribers: subreddit.subscribers || 0,
        description: subreddit.public_description || 'No description available',
        icon_img: subreddit.icon_img || 'No image available',
        id: subreddit.id,
      };
    });

    console.log("Transformed subreddits:", subreddits);  // Log the transformed data
    
    res.json(subreddits);
  } catch (error) {
    console.error('Failed to fetch popular subreddits:', error.message);
    res.status(500).json({ error: 'Failed to fetch popular subreddits' });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
