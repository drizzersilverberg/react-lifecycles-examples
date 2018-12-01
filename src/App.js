import React, { Component } from 'react';

class App extends Component {

  // method #1
  static displayName = "NewNamedApp" // the <App> tag will be changed and can be seen on React Devtools ...

  render() {
    return (
      <h1>
        Hello
      </h1>
    );
  }
}

// method #2
// App.displayName = "WhateverApp" // the <App> tag will be changed and can be seen on React Devtools ...

export default App;
