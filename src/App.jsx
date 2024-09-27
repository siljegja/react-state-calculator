import "./App.css"
import { useState } from "react"

function App() {
  const [display1, setDisplay1] = useState(0);
  const [display2, setDisplay2] = useState(0);
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(0);
  const [store, setStore] = useState();
  
  const updateDisplay1 = (number) => {
    if (display1 === 0 && number !== '.'){ 
      setDisplay1(number.toString())
    } else{
      if((number !== '.' || !display1.includes('.'))){
        setDisplay1(display1 + number.toString())
      }
    }
  }

  const updateDisplay2 = (number) => {
    if (display2 === 0 && number !== '.'){ 
      setDisplay2(number.toString())
    } else{
      if((number !== '.' || !display2.includes('.'))){
        setDisplay1(display2 + number.toString())
      }
    }
  }

  const handleOperator = (operator) => {
    setOperator(operator);
  }

  const handleStore = () => {
    setStore(result);
  }

  const handleCalculate = () => {
    switch (operator) {
      case('+'):
        setResult(eval(new String(display1 + display2)));
        break
      case('-'):
        setResult(eval(new String(display1 - display2)));
        break
      case('*'):
        setResult(eval(new String(display1 * display2)));
        break
      case('÷'):
        setResult(eval(new String(display1 / display2)));
        break
      default:
        setResult(0);
        break;
    }

  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display1}</p>
        <div className="numbers">
          <button onClick={() => {updateDisplay1(1)}}>1</button>
          <button onClick={() => {updateDisplay1(2)}}>2</button>
          <button onClick={() => {updateDisplay1(3)}}>3</button>
          <button onClick={() => {updateDisplay1(4)}}>4</button>
          <button onClick={() => {updateDisplay1(5)}}>5</button>
          <button onClick={() => {updateDisplay1(6)}}>6</button>
          <button onClick={() => {updateDisplay1(7)}}>7</button>
          <button onClick={() => {updateDisplay1(8)}}>8</button> 
          <button onClick={() => {updateDisplay1(9)}}>9</button>
          <button onClick={() => {updateDisplay1(0)}}>0</button>
          <button onClick={() => {updateDisplay1('.')}}>.</button>
          <button onClick={() => setDisplay1(0)}>Clear</button>
          <button onClick={() => {setDisplay1(store)}}>Recall</button>
        </div>
      </div>  

      <div className="panel">
        <p>{operator}</p>
        <div className="numbers">
          <button onClick={() => {handleOperator('+')}}>+</button>
          <button onClick={() => {handleOperator('-')}}>-</button>
          <button onClick={() => {handleOperator('*')}}>*</button>
          <button onClick={() => {handleOperator('÷')}}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{display2}</p>
        <div className="numbers">
          <button onClick={() => {updateDisplay2(1)}}>1</button>
          <button onClick={() => {updateDisplay2(2)}}>2</button>
          <button onClick={() => {updateDisplay2(3)}}>3</button>
          <button onClick={() => {updateDisplay2(4)}}>4</button>
          <button onClick={() => {updateDisplay2(5)}}>5</button>
          <button onClick={() => {updateDisplay2(6)}}>6</button>
          <button onClick={() => {updateDisplay2(7)}}>7</button>
          <button onClick={() => {updateDisplay2(8)}}>8</button> 
          <button onClick={() => {updateDisplay2(9)}}>9</button>
          <button onClick={() => {updateDisplay2(0)}}>0</button>
          <button onClick={() => {updateDisplay2('.')}}>.</button>
          <button onClick={() => setDisplay2(0)}>Clear</button>
          <button onClick={() => {setDisplay2(store)}}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => {handleCalculate(operator)}}>=</button>
          <button onClick={() => handleStore()}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
