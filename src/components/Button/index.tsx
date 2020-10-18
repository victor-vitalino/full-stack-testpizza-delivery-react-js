import React, { ButtonHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, children, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <button type="button" {...rest}>
      {children}
    </button>
  </Container>
);

export default Button;
