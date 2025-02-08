import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import RefreshDoubleIcon from '../../../../components/icons/RefreshDoubleIcon';

interface RefreshProps {
  refetch: () => void;
}

const Refresh:React.FC<RefreshProps> = ({ refetch }) => {
  const [activeRefresh, setActiveRefresh] = useState<string | null>(null);
	const viewType = useSelector((state: RootState) => state.view.viewSize);

  const handleTouch = (item: string) => {
    setActiveRefresh(item);
    setTimeout(()=> {
      setActiveRefresh(null);
    }, 500);
  };
		
  
  return (
    <div 
      className='feed-refresh' 
      
      onClick={()=> refetch()}
      onTouchStart={()=> handleTouch('refresh-icon')}
    >
      {viewType === 2 ? <></> : <h3>REFRESH</h3>}
      <div 
        className='feed-icon' 
      >
        <RefreshDoubleIcon 
          className={
            `refresh-icon ${activeRefresh === 'refresh-icon' ? 'feed-touch-animation' : ''}`
          }
        />
      </div>
    </div>
  )
}

export default Refresh