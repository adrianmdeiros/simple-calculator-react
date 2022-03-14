import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${props => props.theme.COLORS.BACKGROUND};
`

export const Content = styled.div`
  width: 360px;
  height: 500px;
  border-radius: 24px;
  background-color: ${props => props.theme.COLORS.CALCULATOR};
  box-shadow:
  0.7px 0.7px 0.6px rgba(0, 0, 0, 0.038),
  1.5px 1.4px 1.2px rgba(0, 0, 0, 0.041),
  2.4px 2.3px 2px rgba(0, 0, 0, 0.039),
  3.5px 3.3px 3px rgba(0, 0, 0, 0.035),
  4.8px 4.5px 4.3px rgba(0, 0, 0, 0.03),
  6.6px 6.2px 6.3px rgba(0, 0, 0, 0.025),
  9.1px 8.5px 9.3px rgba(0, 0, 0, 0.021),
  13px 12.2px 13.9px rgba(0, 0, 0, 0.019),
  20.8px 19.6px 22.1px rgba(0, 0, 0, 0.022),
  49px 46px 53px rgba(0, 0, 0, 0.06)
;
`