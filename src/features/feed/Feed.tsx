import React, { useEffect, useRef } from 'react';
import { PostsResponseData, Post } from '../../types/api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { parseFeedData } from '../../utils/parseResponseData';
import PostContainer from '../../app/components/Post/PostContainer';
import BottomGradient from '../../app/components/BottomGradient/BottomGradient';
import { feedColumns } from './feedSlice';
import { useSelector } from 'react-redux';

interface FeedProps {
  data: PostsResponseData | undefined;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
}

const Feed: React.FC<FeedProps> = ({ data, error, isLoading }) => {
  const columns = useSelector(feedColumns);
  const feedItemRef = useRef<HTMLDivElement>(null);

  console.log('column number:', columns)
  useEffect(()=>{
    if (feedItemRef.current) {
      feedItemRef.current.style.setProperty(
        "--feed-column-number",
        columns.toString()
      );
    }
  },[columns]);

  const parsedData: Post[] = data ? parseFeedData(data as PostsResponseData): [];
  console.log('Feed Data:', data)
  console.log('Feed Error:', error)

  return (
    <div className='feed-container'>
      <div className='feed-items' ref={feedItemRef}>
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
      <BottomGradient />
    </div>
  )
}

export default Feed;
