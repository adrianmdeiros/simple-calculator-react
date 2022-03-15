import styled from "styled-components";


export const Container = styled.div`
  height: 60px;
  background: ${props => props.theme.COLORS.HEADER_BAR};
  color: ${props => props.theme.COLORS.TEXT};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`
export const Title = styled.h1`
  color: #DEEFE7;
`