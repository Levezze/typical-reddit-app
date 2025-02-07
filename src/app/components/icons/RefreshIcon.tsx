import React from 'react'
import { svg } from '../../../types/svg'

const RefreshIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
    className='refresh-icon'
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 16.49 16.854"
    >
      <g transform="translate(-1213.755 -219.396)">
        <path 
          fill="currentColor"
          d="M17.65,6.35A8,8,0,1,0,19.73,14H17.65A6,6,0,1,1,12,6a5.915,5.915,0,0,1,4.22,1.78L13,11h7V4Z" 
          transform="translate(1209.995 216)" 
        />
      </g>
    </svg>
  )
};

export default RefreshIcon;
