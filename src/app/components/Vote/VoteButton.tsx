import ArrowIcon from '../icons/ArrowIcon';
import { useVoteMutation } from '../../store/middleware/voteAPI';
import { VotePayload } from '../../../types/api'

const VoteButton:React.FC<VotePayload> = ({ DIR, ID }) => {
  const [vote] = useVoteMutation();

  const handleVote = () => {
    vote({ ID: ID, DIR: DIR});
  };

  return (
    <div 
      className='vote-btn'
      onClick={handleVote}>
        <ArrowIcon />
    </div>
  )
}

export default VoteButton;