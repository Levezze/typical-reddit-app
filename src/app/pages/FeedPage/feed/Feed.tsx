import React, { useEffect, useRef } from 'react';
import { PostsResponseData, Post } from '../../../../types/api';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { parseFeedData } from '../../../../utils/parseResponseData';
import PostContainer from '../../../components/Post/PostContainer';
import BottomGradient from '../../../components/BottomGradient/BottomGradient';
import { feedColumns } from '../../../store/slices/feedSlice';
import { useSelector } from 'react-redux';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

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
  // console.log('Unparsed Feed Data:', data)
  console.log('Feed Data:', parsedData)
  // console.log('Feed Error:', error)

  return (
    <div className='feed-container'>
      <div>
        {
          isLoading ? 
          <div className='before-feed'>
            <p>Loading...</p>
          </div>
          :
          error ? 
          <div className='before-feed no-subs-selected'>
            <div className='before-feed-icon'>
              <ExclamationTriangleIcon />
            </div>
            <p>
              Select Subreddits to view your personalized feed.
            </p>
          </div>
          :
          data ? 
          <div className='feed-items' ref={feedItemRef}>
            {parsedData.map(post => <PostContainer key={post.id} post={post} />)}
          </div>
          :
          <p>sets</p>
        }
      </div>
      <BottomGradient />
    </div>
  )
}

export default Feed;
