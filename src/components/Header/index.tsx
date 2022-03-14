import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished'
import { Container, Title } from './styles'
import { ThemeContext } from 'styled-components';

interface Props {
  toggleTheme(): void;
}


const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { COLORS, TITLE } = useContext(ThemeContext)

  return (
    <Container>
      <Title>
        Calculator
      </Title>
      <Switch
        onChange={toggleTheme}
        checked={TITLE == 'DARK'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={36}
        handleDiameter={20}
        offColor={shade(0.2, COLORS.HEADER_BAR)}
        onColor={COLORS.BACKGROUND}
      />
    </Container>
  )
}

export default Header;