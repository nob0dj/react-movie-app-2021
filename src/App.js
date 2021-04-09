import './App.css';
import Potato from './Potato.js';

const arr = ['abc', 'corona', 'bottle'];



/**
 * component는 html을 반환하는 함수다.
 * prop을 이용하면 자식component에 data를 전달할 수 있다.
 * 
 * 
 */
function App() {
  return (
    <div className="App">
      {arr.map((name, i) => <Potato key={i} name={`${i + 1}. ${name} 😁`} />)}
    </div>
  );
}

export default App;
