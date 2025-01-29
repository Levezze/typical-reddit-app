import React from 'react'
import VoteArrow from '../icons/VoteArrow';

interface Props {
  ups: number;
}

const VotePost:React.FC<Props> = ({ ups }) => {
  return (
    <div>
      <div className='vote up'><VoteArrow /></div>
      <p>{ups}</p>
      <div className='vote down'><VoteArrow /></div>
    </div>
  )
}

export default VotePost;