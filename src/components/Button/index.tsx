import React from 'react'
import { Container } from './styles'

export enum ButtonType {
  Number,
  Operation
}

type Props = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: ButtonType;
  value?: number | string
}

const Button: React.FC<Props> = ({ buttonType, children, onClick, value }) => {
  const styles: React.CSSProperties = {};

  if (buttonType === ButtonType.Operation) {
    styles.color = '#0D0D0D'
    styles.background = '#32c6c9'
  }


  return (
    <Container style={styles} onClick={onClick} value={value}>
      {children}
    </Container>
  );
}






export default Button