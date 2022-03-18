import React from 'react'
import { Container } from './styles'

export enum ButtonType {
  Number,
  Operation
}

type Props = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: ButtonType;
}

const Button: React.FC<Props> = ({ buttonType, children, onClick }) => {
  const styles: React.CSSProperties = {};

  if (buttonType === ButtonType.Operation) {
    styles.color = '#0D0D0D'
    styles.background = '#32c6c9'
  }


  return (
    <Container style={styles} onClick={onClick}>
      {children}
    </Container>
  );
}






export default Button