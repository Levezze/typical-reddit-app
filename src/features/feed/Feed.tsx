import React from 'react';
import { PostsResponseData, Post } from '../../types/api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { parseFeedData } from '../../utils/parseResponseData';
import PostContainer from '../../app/components/Post/PostContainer';

interface FeedProps {
  data: PostsResponseData | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

const Feed: React.FC<FeedProps> = ({ data, error, isLoading }) => {
  const parsedData: Post[] = data ? parseFeedData(data as PostsResponseData): [];
  console.log('Feed Data:', data)
  console.log('Feed Error:', error)

  return (
    <div>
      {
        isLoading ? <p>Loading...</p>
        :
        error ? <p>Select Subreddits to view your personalized feed.</p>
        :
        data ? parsedData.map(post => <PostContainer key={post.id} post={post} />)
        :
        <p>sets</p>
      }
    </div>
  )
}

export default Feed;
