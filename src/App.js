import React, { Component } from 'react';

class App extends Component {

  static displayName = "NewNamedApp" // the <App> tag will be changed and can be seen on React Devtools ...

  // method #1
  static defaultProps = {
    someImportArray: []
  }

  render() {
    console.log(this.props)
    return (
      <h1>
        Hello
      </h1>
    );
  }
}

// method #2
/*App.defaultProps = {
  someImportArray: []
}*/

export default App;
