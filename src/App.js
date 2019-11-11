import React, { Component } from 'react';
import copy from "copy-to-clipboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      textToCopy: "Copy to Clipboard Demo!",
      btnText: "Copy to Clipboard"
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      textToCopy: e.target.value,
      btnText: "Copy to Clipboard"
    });
  }

  handleCopy() {
    copy(this.state.textToCopy);
    this.setState({ btnText: "Copied!" });
  }

  render() {
    const { textToCopy, btnText } = this.state;
    return (
      <div>
        <h4>Clue Mediator - Copy to Clipboard</h4>
        <textarea value={textToCopy} onChange={this.handleInputChange} />
        <br />
        <br />
        <button onClick={this.handleCopy} disabled={btnText === "Copied!"}>
          {btnText}
        </button>
      </div>
    );
  }
}

export default App;
