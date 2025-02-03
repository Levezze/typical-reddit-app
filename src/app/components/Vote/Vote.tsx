import React, { useEffect, useState } from 'react';
import VoteButton from './VoteButton';

interface Props {
  ups: string;
  id: string;
  likes: null | boolean;
}

const Vote:React.FC<Props> = ({ ups, id, likes }) => {
  const [voted, setVoted] = useState(0);

  useEffect(()=> {
    if (likes === true) {
      setVoted(1);
    } else if (likes === false) {
      setVoted(-1);
    } else {
      setVoted(0);
    };
  },[likes]);

  const voteUpClass = `vote up ${voted === 1 ?
    'active' : ''}`;
  const voteDownClass = `vote down ${voted === -1 ?
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