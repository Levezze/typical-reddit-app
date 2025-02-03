import React from 'react'
import RefreshDoubleIcon from '../../../components/icons/RefreshDoubleIcon';

interface RefreshProps {
  refetch: () => void;
}

const Refresh:React.FC<RefreshProps> = ({ refetch }) => {
  return (
    <div className='feed-refresh' onClick={()=> refetch()}>
      <h3>REFRESH</h3>
      <div className='feed-icon'>
        <RefreshDoubleIcon />
      </div>
    </div>
  )
}

export default Refresh