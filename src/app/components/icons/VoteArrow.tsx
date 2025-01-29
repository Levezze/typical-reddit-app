import React from 'react'
import { svg } from '../../../types/svg'

const VoteArrow:React.FC<svg> = ({ width = '16px', height = '16px' }) => {
  return (
    <svg 
    className='vote-arrow'
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 15.386 17.081"
    >
      <path 
        fill="currentColor"
        d="M12.613,17.6V10.761H16.19l-5.5-6.871L5.2,10.761H8.774V17.6h3.839m.645,1.5H8.129a.855.855,0,0,1-.855-.855V12.261H3.855a.856.856,0,0,1-.668-1.389l6.839-8.548a.884.884,0,0,1,1.335,0L18.2,10.872a.856.856,0,0,1-.668,1.389H14.113v5.984A.855.855,0,0,1,13.258,19.1Z" 
        transform="translate(-3.001 -2.019)" 
      />
    </svg>
  )
};

export default VoteArrow;
// <svg xmlns="http://www.w3.org/2000/svg" width="15.386" height="17.081" viewBox="0 0 15.386 17.081"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M12.613,17.6V10.761H16.19l-5.5-6.871L5.2,10.761H8.774V17.6h3.839m.645,1.5H8.129a.855.855,0,0,1-.855-.855V12.261H3.855a.856.856,0,0,1-.668-1.389l6.839-8.548a.884.884,0,0,1,1.335,0L18.2,10.872a.856.856,0,0,1-.668,1.389H14.113v5.984A.855.855,0,0,1,13.258,19.1Z" transform="translate(-3.001 -2.019)"/></svg>