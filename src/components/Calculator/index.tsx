import React, { useState } from 'react';
import { ButtonType } from '../Button';
import { Container, Calculadora, Row, ButtonsContainer } from './styles'
import Button from '../Button'
import Display from '../Display'


const Calculator: React.FC = () => {
  const [number, setNumber] = useState(0)
  const [prevNumber, setPrevNumber] = useState(0)
  const [operation, setOperation] = useState('')


  const handleNumbers = (e: any) => {
    const input = e.target.value
    if (number == 0) {
      setNumber(input)
    } else {
      setNumber(number + input)
    }
  }

  const handleOperations = (e: any) => {
    const operationInput = e.target.value
    setOperation(operationInput)
    setPrevNumber(number)
    setNumber(0)
  }

  const calculate = (actualOperation: string) => {
    switch (actualOperation) {
      case '+': setNumber(parseInt(prevNumber.toString()) + parseInt(number.toString()))
        break
      case '-': setNumber(prevNumber - number)
        break
      case 'x': setNumber(prevNumber * number)
        break
      case '/':
        setNumber(prevNumber / number)
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
            <Button onClick={handleNumbers} value={7}> 7 </Button>
            <Button onClick={handleNumbers} value={8}> 8 </Button>
            <Button onClick={handleNumbers} value={9}> 9 </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => allClear()}> AC </Button>
          </Row>
          <Row>
            <Button onClick={handleNumbers} value={4}> 4 </Button>
            <Button onClick={handleNumbers} value={5}> 5 </Button>
            <Button onClick={handleNumbers} value={6}> 6 </Button>
            <Button buttonType={ButtonType.Operation} onClick={handleOperations} value={'/'}> / </Button>
          </Row>
          <Row>
            <Button onClick={handleNumbers} value={1}> 1 </Button>
            <Button onClick={handleNumbers} value={2}> 2 </Button>
            <Button onClick={handleNumbers} value={3}> 3 </Button>
            <Button buttonType={ButtonType.Operation} onClick={handleOperations} value={'+'}> + </Button>
          </Row>
          <Row>
            <Button buttonType={ButtonType.Operation} onClick={handleOperations} value={'-'}> - </Button>
            <Button onClick={handleNumbers} value={0}> 0 </Button>
            <Button buttonType={ButtonType.Operation} onClick={handleOperations} value={'x'}> x </Button>
            <Button buttonType={ButtonType.Operation} onClick={() => calculate(operation)}> = </Button>
          </Row>
        </ButtonsContainer>
      </Calculadora>
    </Container >
  )
}

export default Calculator;