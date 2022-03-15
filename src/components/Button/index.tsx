import React from 'react'
import { Container } from './styles'

type Props = {
  onClick: (e: any) => void;
  value: number | null;
};

const Button: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Button