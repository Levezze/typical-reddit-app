import React from 'react'
import RefreshIcon from '../../../components/icons/RefreshIcon';

interface RefreshProps {
  refetch: () => void;
}

const Refresh:React.FC<RefreshProps> = ({ refetch }) => {
  return (
    <div className='feed-refresh' onClick={()=> refetch()}>
      <h3>REFRESH</h3>
      <div className='feed-icon'>
        <RefreshIcon />
      </div>
    </div>
  )
}

export default Refresh