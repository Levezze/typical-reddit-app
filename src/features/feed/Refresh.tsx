import React from 'react'
import { RefreshIcon } from '../../app/components/icons/refreshIcon'

interface RefreshProps {
  refetch: () => void;
}

const Refresh:React.FC<RefreshProps> = ({ refetch }) => {
  return (
    <div className='feed-refresh' onClick={()=> refetch()}>
        <h3>REFRESH</h3>
        <RefreshIcon />
    </div>
  )
}

export default Refresh