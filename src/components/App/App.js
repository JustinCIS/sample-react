import React from 'react';
import './App.css';
import BaseComponent from '../BaseComponent.js';
import SwapiData from '../SwapiData/SwapiData.js';

class App extends BaseComponent {
    render() {
        return (
          <div className="App">
              <div className="content p-g">
                  <div className="p-g-6">&nbsp;</div>
                  <div className="mainheading p-g-6">
                      SWAPi React Sample
                      <br /><br />
                        <SwapiData></SwapiData>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
