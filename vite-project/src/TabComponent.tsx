import { useState } from 'react';
import './tab.css';
import './App.css';

const TabComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('tab1'); // Track the selected tab

  // Function to change the selected tab
  const handleTabClick = (tab: string) => {
    setSelectedTab(tab); // Update selected tab
  };

  return (
    <div className="container">
      <div className="tab-container">
        <div
          className={`tab ${selectedTab === 'tab1' ? 'selected' : 'unselected'}`}
          id="tab1"
          onClick={() => handleTabClick('tab1')} // Use the function here
        >
          Tab 1
        </div>
        <div
          className={`tab ${selectedTab === 'tab2' ? 'selected' : 'unselected'}`}
          id="tab2"
          onClick={() => handleTabClick('tab2')} // Use the function here
        >
          Tab 2
        </div>
      </div>

      <div className="tab-content">
        {/* Conditionally render tab content based on the selectedTab state */}
        {selectedTab === 'tab1' && (
          <div id="tab1Content">
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
        )}
        {selectedTab === 'tab2' && (
          <div id="tab2Content">
            <p>Content for Tab 2</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
