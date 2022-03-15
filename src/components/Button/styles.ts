import styled from "styled-components";


export const Container = styled.button`
  :hover{
    cursor:pointer;
  }
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 10px;
  border: none;
  height: 65px;
  width: 65px;
  margin-top: 10px;
  border-radius: 14px;
  color: ${props => props.theme.COLORS.TEXT};
  background-color: ${props => props.theme.COLORS.BACKGROUND};
  font-weight: 500;
  font-family: Roboto, sans-serif;
  font-size: 28px;
`