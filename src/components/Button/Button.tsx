import { FC } from "react";
import { StyledButton } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
  children?: any;
  reverse?: boolean;
}

export const Button: FC<ButtonProps> = ({ title, children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {title}
      {children}
    </StyledButton>
  );
};
