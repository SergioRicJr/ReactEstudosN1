import Button from "./components/button";
import Input from "./components/input";
import { Container, Content, Row } from "./styles";
import { useState } from "react";
//displaygrid seria muito melhor do q
//essas linhas feitas no react -- "Row"

function App() {

  //vai ter um estado antigo e um novo estado
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('')

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => { //funcao para concatenar valores no visor
    //prev é o numero/string anterior
    setCurrentNumber(prev => `${prev === '0'? '':prev}${number}`)
  }

  const handleSumNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation("+")
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleMinusNumbers = () => {
    if(firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0')
      setOperation("-")
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum));
      setOperation('')
    }
  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break
        case '-':
          handleMinusNumbers()
          break
        
        default:
          break;
      }
    }

  }

  return (
    <Container>
        <Content>
            <Input value={currentNumber}></Input>
            <Row>
              <Button lable={"x"}></Button>
              <Button lable={"/"}></Button>
              <Button lable={"C"} onClick={()=>handleClear()}></Button>
              <Button lable={"X"}></Button>
            </Row>
            <Row>
              <Button lable={1} onClick={()=>handleAddNumber('1')}></Button>
              <Button lable={2} onClick={()=>handleAddNumber('2')}></Button>
              <Button lable={3} onClick={()=>handleAddNumber('3')}></Button>
              {/* por ser uma função sem parametro da pra passar assim*/}
              <Button lable={"+"} onClick={handleSumNumbers}></Button>
            </Row>
            <Row>
              <Button lable={4} onClick={()=>handleAddNumber('4')}></Button>
              <Button lable={5} onClick={()=>handleAddNumber('5')}></Button>
              <Button lable={6} onClick={()=>handleAddNumber('6')}></Button>
              <Button lable={"-"} onClick={handleMinusNumbers}></Button>
            </Row>
            <Row>
              <Button lable={7} onClick={()=>handleAddNumber('7')}></Button>
              <Button lable={8} onClick={()=>handleAddNumber('8')}></Button>
              <Button lable={9} onClick={()=>handleAddNumber('9')}></Button>
              <Button lable={"="} onClick={handleEquals}></Button>
            </Row>
        </Content>
    </Container>
  );
}

export default App;
