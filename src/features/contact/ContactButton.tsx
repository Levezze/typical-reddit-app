type ContactButtonProps = {
  text: string;
};

export const ContactButton = ({ text } : ContactButtonProps) => {
  return (
    <button className="contact-button">{text.toUpperCase()}</button>
  )
};
