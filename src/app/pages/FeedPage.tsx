import React from 'react';
import Feed from '../../features/feed/Feed';

const FeedPage: React.FC = () => {
  return (
    <>
      <div className='feed-control'>
        <div className='feed-sort'>sort</div>
        <div className='feed-refresh'>refresh</div>
      </div>
      <Feed />
    </>
  )
};

export default FeedPage;