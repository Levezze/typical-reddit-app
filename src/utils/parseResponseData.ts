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
      permalink: post.permalink,
      subreddit: post.subreddit,
      ups: post.ups,
      thumbnail: imgUrl,
      is_video: post.is_video,
      media: post.media ?? null,
      preview: post.preview ?? null,
      id: post.id,
      created_utc: post.created_utc,
    };
  });
  return posts;
};
