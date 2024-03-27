import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  state = { data: [] };
  
  componentDidMount() {
    this.getTestQuery();
  };
  
  getTestQuery() {
    fetch("http://localhost:3001/test_query")
      .then(data => data.json())
      .then(res => this.setState({ data: res }))
  };

  render() {
    const data = this.state.data.map((item) =>
      <li key={item.id}>{item.firstname} {item.lastname}</li>
    )
    return (
      <div className="App">
        <header className="App-header">
          <ol>{data}</ol>
            <img src={logo} className="App-logo" alt="logo" />
              <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer">
                    Learn React
                </a>
                <a
                className="App-link"
                href="http://localhost:3001"
                target="_blank"
                rel="noopener noreferrer">
                  Test the back end connection
                </a>
                <a
                className="App-link"
                href="http://localhost:3001/test_query"
                target="_blank"
                rel="noopener noreferrer">
                  Test a database query
                </a>
        </header>
      </div>
    );
  }

}

export default App;
