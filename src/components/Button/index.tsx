import React from "react";
import { LayoutProps, SpaceProps } from "styled-system";

import { ButtonEl } from "./styles";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    LayoutProps,
    SpaceProps {
  loading?: boolean;
  color?: string;
  backgroundColor?: string;
  theme?: any;
}

const Button: React.FC<IButtonProps> = ({
  children,
  disabled = false,
  type = "submit",
  onClick = () => {},
  ...otherProps
}: IButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <ButtonEl
      disabled={disabled}
      type={type}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </ButtonEl>
  );
};

export default Button;
