import React from "react";

type Props = {
  className?: string;
  buttonName: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

function Button({className, buttonName, handleClick, disabled}: Props) {
  return (
    <button 
      className={className} 
      onClick={handleClick}
      disabled={disabled}
    >
      {buttonName.toUpperCase()}
    </button>
  );
};

export default Button;