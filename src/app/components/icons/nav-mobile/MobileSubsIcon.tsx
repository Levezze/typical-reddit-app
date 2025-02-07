import React from 'react'
import { svg } from '../../../../types/svg'

const MobileSubsIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
      className='mobile-nav-subs nav-icon'
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 15 15.001"
    >
      <g 
        id="Icon_box-search-alt" 
        data-name="Icon box-search-alt" 
        transform="translate(-3 -3)"
      >
        <path 
          id="Path_18" 
          data-name="Path 18" 
          d="M9.415,15.829a6.375,6.375,0,0,0,3.926-1.353L16.866,18,18,16.867l-3.525-3.525a6.407,6.407,0,1,0-5.06,2.487Zm0-11.226A4.811,4.811,0,1,1,4.6,9.415,4.816,4.816,0,0,1,9.415,4.6Z" 
          fill="currentColor"
        />
        <path 
          id="Path_19" 
          data-name="Path 19" 
          d="M14.056,11.038a1.548,1.548,0,0,1,.457,1.1h1.555a3.092,3.092,0,0,0-.913-2.2,3.179,3.179,0,0,0-4.394,0l1.1,1.1A1.589,1.589,0,0,1,14.056,11.038Z" 
          transform="translate(-3.54 -2.793)" 
          fill="currentColor"
        />
      </g>
    </svg>
  )
};

export default MobileSubsIcon;
