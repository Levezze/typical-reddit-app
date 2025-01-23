import React from 'react'
import { Post } from '../../../types/api'

interface PostContainerProps {
  post: Post;
};

const PostContainer: React.FC<PostContainerProps> = ({ post }) => {
  const { title, thumbnail } = post;
  return (
    <div className='post-container'>
      <h3>{title}</h3>
      <img src={thumbnail} />
    </div>
  )
}

export default PostContainer;