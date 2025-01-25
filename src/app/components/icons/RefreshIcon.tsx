import React from 'react'
import { svg } from '../../../types/svg'

export const RefreshIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
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
        <path 
          fill="currentColor"
          d="M20.25,3.4V11.25H12.4l3.467-3.467A5.648,5.648,0,0,0,12,6.25a5.75,5.75,0,1,0,5.414,7.667l.059-.167h2.58l-.081.312A8.248,8.248,0,1,1,17.647,6ZM17.65,6.7l-.177-.177A7.751,7.751,0,1,0,19.4,14.25H17.824A6.247,6.247,0,1,1,12,5.75,6.158,6.158,0,0,1,16.4,7.6l.175.177L13.6,10.75H19.75V4.6Z" 
          transform="translate(1209.995 216)" 
        />
      </g>
    </svg>
  )
};
