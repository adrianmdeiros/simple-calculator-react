import React, { useState } from 'react';
import { ButtonType } from '../Button';
import { Container, Calculadora, Row, ButtonsContainer } from './styles'
import Button from '../Button'
import Display from '../Display'


const Calculator: React.FC = () => {
  const [number, setNumber] = useState(0)
  const [operation, setOperation] = useState('')
  const prevValue = number

  const handleNumbers = (actualNumber: number) => {
    const newValue = prevValue * 10 + actualNumber
    setNumber(newValue)
  }

  const handleOperations = (operation: string) => {
    setOperation(operation)
    setNumber(0)
  }

  const calculate = (actualDisplayValue: number, actualOperation: string) => {
    switch (actualOperation) {
      case '+': setNumber(prevValue + actualDisplayValue)
        break
      case '-': setNumber(prevValue - actualDisplayValue)
        break
      case 'x': setNumber(prevValue * actualDisplayValue)
        break
      case '/': setNumber(actualDisplayValue / prevValue)
        break
    }
  }

  const allClear = () => {
    setNumber(0);
    setOperation('')
  }


  return (
    <Container>
      <Calculadora>
        <Display>
          {number}
        </Display>
        <ButtonsContainer>
          <Row>
            <Button onClick={() => handleNumbers(7)}> 7 </Button>
            <Button onClick={() => handleNumbers(8)}> 8 </Button>
            <Button onClick={() => handleNumbers(9)}> 9 </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => allClear()}> AC </Button>
          </Row>
          <Row>
            <Button onClick={() => handleNumbers(4)}> 4 </Button>
            <Button onClick={() => handleNumbers(5)}> 5 </Button>
            <Button onClick={() => handleNumbers(6)}> 6 </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => handleOperations('/')}> / </Button>
          </Row>
          <Row>
            <Button onClick={() => handleNumbers(1)}> 1 </Button>
            <Button onClick={() => handleNumbers(2)}> 2 </Button>
            <Button onClick={() => handleNumbers(3)}> 3 </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => handleOperations('+')}> + </Button>
          </Row>
          <Row>
            <Button buttonType={ButtonType.Operation} onClick={() => handleOperations('-')}> - </Button>
            <Button onClick={() => handleNumbers(0)}> 0 </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => handleOperations('x')}> x </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => calculate(number, operation)}> = </Button>
          </Row>
        </ButtonsContainer>
      </Calculadora>
    </Container >
  )
}

export default Calculator;