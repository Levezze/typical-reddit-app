import React from 'react'
import { svg } from '../../../../types/svg'

const MobileContactIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
      className='mobile-nav-contact nav-icon'
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 17.357 12.071"
    >
      <path 
        id="Path_16" 
        data-name="Path 16" 
        d="M18.272,6H3.085A1.048,1.048,0,0,0,2,7.006v10.06a1.048,1.048,0,0,0,1.085,1.006H18.272a1.048,1.048,0,0,0,1.085-1.006V7.006A1.048,1.048,0,0,0,18.272,6Zm-.835,11.065H3.985l3.8-3.642L7,12.725,3.085,16.482V7.77l6.742,6.222a1.146,1.146,0,0,0,1.53,0l6.916-6.378v8.8l-3.992-3.7-.765.709ZM3.8,7.006h13.6l-6.8,6.272Z" 
        transform="translate(-2 -6)" 
        fill="currentColor"
      />
    </svg>
  )
};

export default MobileContactIcon;
