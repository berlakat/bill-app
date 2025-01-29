import { useState } from 'react'
import b from './assets/bills.svg'
import './App.css'

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
          <a href="b"><img src={b} alt="logo"/><h1>billify</h1></a><br />
          Due now <br /> Paid
                  </div>
      </div>

      <div className="container">
        <h2>Welcome to your portal! <br /> 

        <div className="graph">
          <div className="bar" style={{ height: '70%' }}></div>
          <div className="bar" style={{ height: '50%' }}></div>
          <div className="bar" style={{ height: '80%' }}></div>
          <div className="bar" style={{ height: '40%' }}></div>
        </div>

        </h2>
        <b>Due now</b>

        <div className="checklist">
          <ul>
            <li className="task-item">
              <div className="task-content">
                <span className="task-name">Task 1</span>
                <span className="task-price">$100.00</span>
                <div className="task-caption">
                  <span>Due Date: <b>January 30, 2025</b></span>
                </div>
              </div>
              <button className="pay-now">Pay Now</button>
            </li>

            <li className="task-item">
              <div className="task-content">
                <span className="task-name">Task 2</span>
                <span className="task-price">$200.00</span>
                <div className="task-caption">
                  <span>Due Date: <b>February 5, 2025</b></span>
                </div>
              </div>
              <button className="pay-now">Pay Now</button>
            </li>

            <li className="task-item">
              <div className="task-content">
                <span className="task-name">Task 3</span>
                <span className="task-price">$150.00</span>
                <div className="task-caption">
                  <span>Due Date: <b>February 10, 2025</b></span>
                </div>
              </div>
              <button className="pay-now">Pay Now</button>
            </li>

          </ul>
        </div>
      </div>


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
--champagne: #f3dfc1ff;
--desert-sand: #ddbea8ff;
*/