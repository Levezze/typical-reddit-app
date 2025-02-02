import React, { useState } from 'react';
import VoteButton from './VoteButton';

interface Props {
  ups: string;
  id: string;
}

const Vote:React.FC<Props> = ({ ups, id }) => {
  const [voted, setVoted] = useState(0);
  const tempDataLike = null;

  const voteUpClass = `vote up ${voted === 1 || tempDataLike ?
    'active' : ''}`;
  const voteDownClass = `vote down ${voted === -1 || tempDataLike ?
    'active' : ''}`;

  const handleVote = (direction: number) => {11111
    console.log('vote',voted === direction ? 0 : direction);
    setTimeout(()=> voted === direction ? setVoted(0) : setVoted(direction), 100);
  };

  return (
    <div className='vote-container'>
      <div 
        className={voteUpClass}
        onClick={()=>handleVote(1)}
        >
        <VoteButton DIR={voted === 1 ? 0 : 1} ID={id} />
      </div>
      <p>{ups}</p>
      <div 
        className={voteDownClass}
        onClick={()=>handleVote(-1)}
        >
        <VoteButton DIR={voted === -1 ? 0 : -1} ID={id} />
      </div>
    </div>
  );
};

export default Vote;