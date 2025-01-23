import React from 'react'
import { Post } from '../../../types/api'

interface PostContainerProps {
  post: Post;
};

const PostContainer: React.FC<PostContainerProps> = ({ post }) => {
  const { title, subreddit, thumbnail, permalink, author, ups } = post;
  return (
    <div className='post-container'>
      <a href={`https://www.reddit.com${permalink}`} target='_blank'><h3>{title}</h3></a>
      <img src={thumbnail} />
      <h4>Upvotes: {ups}</h4>
      <p>Author: {author}</p>
      <p>{`Sub: ${subreddit}`}</p>
    </div>
  )
}

export default PostContainer;


// export interface Post {
//   author: string;
//   title: string;
//   url: string;
//   subreddit: string;
//   ups: number;
//   thumbnail: string | undefined;
//   id: string;
// };