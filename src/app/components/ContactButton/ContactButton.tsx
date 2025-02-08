import { Link } from "react-router-dom";

type ContactButtonProps = {
  text: string;
};

export const ContactButton = ({ text } : ContactButtonProps) => {
  return (
    <Link 
      className="contact-button"
      to="/contact"
    >
      {text.toUpperCase()}
    </Link>
  )
};