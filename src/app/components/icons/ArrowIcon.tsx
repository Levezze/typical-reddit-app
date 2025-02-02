import React from 'react'
import { svg } from '../../../types/svg'

const ArrowIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
    className='arrow-icon'
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height}  
    viewBox="0 0 20.023 20.023"
    >
      <path 
        id="Icon_tdesign-arrow-down-rectangle" 
        data-name="Icon tdesign-arrow-down-rectangle" 
        d="M3,3H23.023V23.023H3ZM5,5V21.021H21.021V5Zm9.01,2.5V15.1l3-3,1.416,1.416-5.42,5.42-5.42-5.42L9.007,12.1l3,3V7.505Z" 
        transform="translate(23.023 23.023) rotate(180)" 
        fill="currentColor"
      />
    </svg>
  )
};

export default ArrowIcon;

