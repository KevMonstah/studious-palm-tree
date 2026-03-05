import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Rating from './components/Rating'

//import './App.css'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
*/

const Counter = () => {

  // rather than init as a value, init as a function ...
  //const [count, setCount] = useState(3);
  const [count, setCount] = useState(() => {
    console.log('init count state ...');
    return 0;  // takes this as initial value
  });

  const increment = () => {
    //setCount(count + 2);  // really shoulnd't do it THIS way ... do it as follows ...
    setCount((prevCount) => {
      console.log(prevCount);  // note, log will show PREVIOS state, UI will show NEW state
      return prevCount + 2;
    })

  }

  // you COULD put the body of the increment function in what is used here by onClick, note
  // it has to be a () => ( ... )
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  )
}

const App = () => {
  const name = 'Kevin';

  return (
    <div>
      <h1>Hello {name}</h1>
      <Rating heading='How do you feel about React?' color='gold' />
      {/*
      <Rating heading='How do you feel about Angular?' />
      <Rating heading='How do you feel about Vue.js?' />
      <Rating color='blue' feedbackMessages={['Hate', 'Dislike', 'Meh', 'Like', 'Love']}/>
      */}
      <Counter />
    </div>
  );
}
 
export default App
