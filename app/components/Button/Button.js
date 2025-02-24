import React, { useState } from 'react';
import Link from 'next/link';
import './Button.css';

const Button = ({ href, children }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  const buttonContent = (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`button ${isPressed ? 'pressed' : ''}`}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <Link href={href}>
        <a className="link">{buttonContent}</a>
      </Link>
    );
  }

  return buttonContent;
};

export default Button;