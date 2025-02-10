import { Link } from "react-router-dom";
import { useState } from "react";

type ContactButtonProps = {
  text: string;
};

export const ContactButton = ({ text } : ContactButtonProps) => {
  const [hover, setHover] = useState('');
  return (
    <Link 
      className={`contact-button ${hover}`}
      to="/contact"
      onMouseOver={()=>setHover('hover')}
      onMouseOut={()=>setHover('')}
      onTouchEnd={()=>setTimeout(()=>setHover(''), 300)}
    >
      {text.toUpperCase()}
    </Link>
  )
};