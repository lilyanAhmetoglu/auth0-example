import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Auth 0 Example app from Lily</p>
          <button onClick={() => this.props.auth.login()}> Login </button>
        </header>
      </div>
    );
  }
}
