import React from 'react';
import { useGetPostsFromSubredditsQuery } from '../../services/feedAPI';
import { useSelector } from 'react-redux';
import { Subreddit } from '../../types/api';
import { RootState } from '../../app/store/store';
import { parseFeedData } from '../../utils/parseResponseData';
import { PostsResponseData, Post } from '../../types/api';
import PostContainer from '../../app/components/Post/PostContainer';


const Feed: React.FC = () => {
  const subredditsArray: Subreddit[] = useSelector((state: RootState) => state.subreddits.selected);
  let subredditsNames: string[] = [];
  if (subredditsArray.length) {
    subredditsNames = subredditsArray.map(subreddit => subreddit.name);
  };
  const { data, error, isLoading } = useGetPostsFromSubredditsQuery(
    { subreddits: subredditsNames, sort: 'hot' }
  );
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
