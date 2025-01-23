import { ResponseData, PostsResponseData, Subreddit, Post } from "../types/api";

export const parseSearchData = (response: ResponseData): Subreddit[] => {
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

export const parseFeedData = (response: PostsResponseData): Post[] => {
  const posts = response.data.children.map(child => {
    const post = child.data;
    const imgUrl = post.thumbnail?.includes('http') ? post.thumbnail : undefined;
    return {
      author: post.author,
      title: post.title,
      url: post.url,
      subreddit: post.subreddit,
      ups: post.ups,
      thumbnail: imgUrl,
      id: post.id,
      media: post.media,
    };
  });
  return posts;
};
