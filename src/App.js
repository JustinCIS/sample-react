import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                <img src={"https://justincis.github.io/sample-react/static/media/logo.3fb01b76.png"} className="App-logo" alt="logo" />
                <h1 className="App-title">
                    Welcome to My React Portfolio <br />
                    (More to come...)
                </h1>
        </header>
        <br/>
        <div align="center">
            <img className="logo-size" src="https://justincis.github.io/sampleNg/CLI-App/assets/images/jo-logo-icon.png" align="middle" />
        </div>
      </div>
    );
  }
}

export default App;
