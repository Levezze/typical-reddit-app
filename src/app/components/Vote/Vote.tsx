import React, { useEffect, useState } from 'react';
import VoteButton from './VoteButton';
import { formatNumber } from '../../../utils/helpers';

interface Props {
  ups: string;
  id: string;
  likes: null | boolean;
}

const Vote:React.FC<Props> = ({ ups, id, likes }) => {
  const [voted, setVoted] = useState(0);
  const [hover, setHover] = useState('');
  const [numberOfVotes, setNumberOfVotes] = useState(ups);

  useEffect(()=> {
    if (likes === true) {
      setVoted(1);
    } else if (likes === false) {
      setVoted(-1);
    } else {
      setVoted(0);
    };
  },[likes]);

  useEffect(()=> {
    setNumberOfVotes((parseInt(ups, 10) + voted).toString());
  },[ups, voted])
  
  const voteUpClass = `vote up ${voted === 1 ?
    'active' : ''}`;
  const voteDownClass = `vote down ${voted === -1 ?
    'active' : ''}`;
      
  const handleVote = (direction: number) => {
    console.log('vote',voted === direction ? 0 : direction);
    setTimeout(()=> voted === direction ?
     setVoted(0) : setVoted(direction), 100);
  };

  return (
    <div className='vote-container'>
      <div 
        className={`${voteUpClass} ${hover.includes('up') ? hover : ''}`}
        onClick={()=>handleVote(1)}
        onMouseOver={()=>setHover('hover up')}
        onMouseOut={()=>setHover('')}
        onTouchEnd={()=>setHover('')}
        >
        <VoteButton DIR={voted === 1 ? 0 : 1} ID={id} />
      </div>
      <p>{formatNumber(numberOfVotes)}</p>
      <div 
        className={`${voteDownClass} ${hover.includes('down') ? hover : ''}`}
        onClick={()=>handleVote(-1)}
        onMouseOver={()=>setHover('hover down')}
        onMouseOut={()=>setHover('')}
        onTouchEnd={()=>setHover('')}
        >
        <VoteButton DIR={voted === -1 ? 0 : -1} ID={id} />
      </div>
    </div>
  );
};

export default Vote;