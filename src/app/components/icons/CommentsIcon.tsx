import React from 'react'
import { svg } from '../../../types/svg'

const CommentsIcon:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
      className='comments-icon'
      xmlns="http://www.w3.org/2000/svg" 
      width={width} 
      height={height} 
      viewBox="0 0 20.023 20.023">
      <g id="Group_46" data-name="Group 46" transform="translate(-432.301 -592.794)">
        <path id="Icon_tdesign-arrow-down-rectangle" data-name="Icon tdesign-arrow-down-rectangle" d="M3,3H23.023V23.023H3ZM5,5V21.021H21.021V5Z" transform="translate(429.301 589.794)" fill="currentColor"/>
        <g id="Group_47" data-name="Group 47">
          <rect id="Rectangle_16" data-name="Rectangle 16" width="11" height="2" transform="translate(437 598)" fill="currentColor"/>
          <rect id="Rectangle_17" data-name="Rectangle 17" width="11" height="2" transform="translate(437 602)" fill="currentColor"/>
          <rect id="Rectangle_18" data-name="Rectangle 18" width="9" height="2" transform="translate(437 606)" fill="currentColor"/>
        </g>
      </g>
    </svg>
  )
};

export default CommentsIcon;

