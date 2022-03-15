import React, { useState } from 'react';
import { Container, Calculadora, Row, ButtonsContainer } from './styles'
import Button from '../Button'
import Display from '../Display'



const Calculator: React.FC = () => {
  const [number, setNumber] = useState(0)

  const handleNumbers = (e: any) => {
    setNumber(e.target.value)
  }







  return (
    <Container>
      <Calculadora>
        <Display>
          {number}
        </Display>
        <ButtonsContainer>
          <Row>
            <Button onClick={handleNumbers} value={7}> 7 </Button>
            <Button onClick={() => handleNumbers} value={8}> 8 </Button>
            <Button onClick={() => handleNumbers} value={9}> 9 </Button>
            <Button onClick={() => handleNumbers} value={0}> AC </Button>
          </Row>
          <Row>
            <Button onClick={() => handleNumbers} value={4}   > 4 </Button>
            <Button onClick={() => handleNumbers} value={5}   > 5 </Button>
            <Button onClick={() => handleNumbers} value={6}   > 6 </Button>
            <Button onClick={() => handleNumbers} value={null}> / </Button>
          </Row>
          <Row>
            <Button onClick={() => handleNumbers} value={1}   > 1 </Button>
            <Button onClick={() => handleNumbers} value={2}   > 2 </Button>
            <Button onClick={() => handleNumbers} value={3}   > 3 </Button>
            <Button onClick={() => handleNumbers} value={null}> + </Button>
          </Row>
          <Row>
            <Button onClick={() => handleNumbers} value={null}> - </Button>
            <Button onClick={() => handleNumbers} value={0}   > 0 </Button>
            <Button onClick={() => handleNumbers} value={null}> x </Button>
            <Button onClick={() => handleNumbers} value={null}> = </Button>
          </Row>
        </ButtonsContainer>
      </Calculadora>
    </Container >
  )
}

export default Calculator;