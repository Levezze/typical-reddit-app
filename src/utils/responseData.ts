import { Subreddit } from "../types/api";
import { ResponseData } from "../types/api";

export const responseData = (response: ResponseData): Subreddit[] => {
  const subreddits = response.data.children.map(child => {
    const subreddit = child.data;
    const imgUrl = subreddit.icon_img?.includes('http') ? subreddit.icon_img : undefined;
    return {
      name: subreddit.display_name,
      title: subreddit.title,
      subscribers: subreddit.subscribers || 0,
      description: subreddit.public_description || 'No description available',
      icon_img: imgUrl,
      id: subreddit.id,
    };
  });
  return subreddits;
};
