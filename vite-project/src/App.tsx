import { useState } from 'react'
import b from './assets/bills.svg'
import './App.css'
import TabComponent from './tabComponent.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="right-corner">
        <span className="right-text">Home</span><span className="right-text">Help</span><span className="right-text">Profile</span>
        <div className="login-button">
          <button>Log-in</button>
        </div>
      </div>
      <div className="header">
        <div className="logo">
          <a href="b"><img src={b} alt="logo"/><h1>billify</h1></a>
          Whats due now? <br /> 
                  </div>
      </div>
       {/* Use the TabComponent here */}
       <TabComponent />



      {/* <h1>illify</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
/* colors (light):
--dark-purple: #160f29ff;
--caribbean-current: #246a73ff;
--dark-cyan: #368f8bff;
--champagne: #f3dfc1ff ;
--desert-sand: #001219ff;
*/