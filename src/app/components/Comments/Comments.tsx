import CommentsIcon from '../icons/CommentsIcon';

type Props = {
  num_comments: number | null | undefined | string,
};

const Comments = ({ num_comments }: Props) => {
  return (
    <div className='comments-container'>
      <CommentsIcon />
      <p>
      {num_comments ? num_comments.toString() : '0'}
      </p>
    </div>
  )
}

export default Comments;