import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 14px;
  background: ${props => props.theme.COLORS.BACKGROUND};
  color: ${props => props.theme.COLORS.TEXT};
  padding:  10px;
  width: 100%;
  height: 65px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  font-size: 28px;
`