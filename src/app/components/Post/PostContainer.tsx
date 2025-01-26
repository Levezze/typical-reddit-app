import React from 'react'
import { Post } from '../../../types/api'

interface PostContainerProps {
  post: Post;
};

const PostContainer: React.FC<PostContainerProps> = ({ post }) => {
  const { title, subreddit, thumbnail, permalink, author, ups } = post;
  return (
    <div className='post-container'>
      <div className='title-section'>
        <a href={`https://www.reddit.com${permalink}`} target='_blank'><h3>{title}</h3></a>
        <p className='sub-time'>{`r/${subreddit}, 7 hr. ago`}</p>
        <p className='author'>Author: {author}</p>
      </div>
      <div className='img-section'>
        <img src={thumbnail} />
      </div>
      <h4>Upvotes: {ups}</h4>
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