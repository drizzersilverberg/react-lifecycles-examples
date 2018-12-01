import React, { Component } from 'react';

class App extends Component {

  static displayName = "NewNamedApp" // the <App> tag will be changed and can be seen on React Devtools ...

  // method #1
  state = {
    ourInitialState: "golden"
  }

  constructor(props) {
    super(props)

    // method #2
    /*this.state = {
      whateverValue: "we want"
    }*/

    /* NOTE: Don't use this.setState() inside constructor */
  }

  render() {
    console.log(this.state)
    return (
      <h1>
        Hello
      </h1>
    );
  }
}

export default App;
