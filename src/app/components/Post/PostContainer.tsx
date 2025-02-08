import React from 'react'
import TimeAgo from '../../pages/FeedPage/feed/TimeAgo';
import { Post } from '../../../types/api'
import { useSelector } from 'react-redux';
import { feedMedia } from '../../store/slices/feedSlice';
import Vote from '../Vote/Vote';
import Comments from '../Comments/Comments';
import { formatNumber } from '../../../utils/helpers';

interface PostContainerProps {
  post: Post;
};

const PostContainer: React.FC<PostContainerProps> = ({ post }) => {
  const { 
    title, 
    subreddit, 
    thumbnail, 
    is_video, 
    media, 
    preview, 
    permalink, 
    author, 
    ups,
    created_utc,
    num_comments,
    likes,
    id,
  } = post;

  const displayMedia = useSelector(feedMedia);
  const videoDisplay = is_video ?
  media?.reddit_video?.fallback_url.split("?")[0] :
  undefined;
  const imageDisplay = preview?.images?.[0]?.source?.url ||
    thumbnail;

  return (
    <div className='post container'>
      <div className='title-section'>
        <a href={`https://www.reddit.com${permalink}`} target='_blank'>
          <h2>{title}</h2>
        </a>
        <p className='sub-name'>{`r/${subreddit}, `}
        <i>{<TimeAgo createdTime={created_utc}/>}h ago</i></p>
        <p className='author'>Author: {author}</p>
      </div>
      <div className='img-section'>
        {
        displayMedia ?
          is_video ? (
            <video
              controls
              loop
              src={videoDisplay}
              onMouseOver={(e)=>e.currentTarget.play()}
              onMouseOut={(e)=>e.currentTarget.pause()}
              onTouchStart={(e)=> e.currentTarget.paused 
                ? e.currentTarget.play() 
                : e.currentTarget.pause()}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            imageDisplay && (
              <img
                src={imageDisplay}
                alt={title}
                className="post-image"
              />
            )
          ): null
        }
      </div>
      <div className="votes-comments">
        <Vote ups={ups.toString()} id={id} likes={likes} />
        <a href={`https://www.reddit.com${permalink}`} target='_blank'>
          <Comments 
            num_comments={num_comments ? formatNumber(num_comments) : num_comments} 
          />
        </a>
      </div>
    </div>
  )
}

export default PostContainer;