import React from 'react';
import VoteButton from './VoteButton';

interface Props {
  ups: number;
  id: string;
}

const Vote:React.FC<Props> = ({ ups, id }) => {
  return (
    <div>
      <div className='vote up'><VoteButton DIR={1} ID={id} /></div>
      <p>{ups}</p>
      <div className='vote down'><VoteButton  DIR={-1} ID={id} /></div>
    </div>
  )
}

export default Vote;