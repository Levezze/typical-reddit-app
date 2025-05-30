import React from 'react'
import { svg } from '../../../../types/svg'

const MobileAccountIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
      className='mobile-nav-account nav-icon'
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 16.029 15.962"
    >
      <g 
        id="Icon_iconamoon-profile-circle-light" 
        data-name="Icon iconamoon-profile-circle-light" 
        transform="translate(-3.705 -3.772)"
      >
        <path 
          id="Path_14" 
          data-name="Path 14" 
          d="M19.109,11.805a7.3,7.3,0,1,1-4.962-6.917,7.27,7.27,0,0,1,4.962,6.917Z" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="1.25"
        />
        <path 
          id="Path_15" 
          data-name="Path 15" 
          d="M13.734,11.607a1.015,1.015,0,0,1-1.014,1.014v1.217a2.232,2.232,0,0,0,2.232-2.232ZM12.72,12.621a1.015,1.015,0,0,1-1.014-1.014H10.488a2.232,2.232,0,0,0,2.232,2.232Zm-1.014-1.014a1.015,1.015,0,0,1,1.014-1.014V9.375a2.232,2.232,0,0,0-2.232,2.232Zm1.014-1.014a1.015,1.015,0,0,1,1.014,1.014h1.217A2.232,2.232,0,0,0,12.72,9.375Zm-5.546,8.2-.584-.174-.095.318.217.252Zm11.093,0,.463.4.216-.252-.095-.319Zm-7.981-1.709h4.87V15.868h-4.87Zm0-1.217a3.857,3.857,0,0,0-3.7,2.753l1.167.348a2.639,2.639,0,0,1,2.528-1.883Zm2.435,4.87A6.679,6.679,0,0,1,7.635,18.4l-.924.793a7.9,7.9,0,0,0,6.008,2.763Zm2.435-3.652a2.64,2.64,0,0,1,2.528,1.883l1.167-.347a3.857,3.857,0,0,0-3.7-2.753ZM17.8,18.4a6.679,6.679,0,0,1-5.085,2.339v1.217a7.9,7.9,0,0,0,6.008-2.763Z" 
          transform="translate(-0.916 -2.236)" 
          fill="currentColor"
        />
      </g>
    </svg>
  )
};

export default MobileAccountIcon;
