import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import Body from './body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Header/>
        </div>
        <div className="page">
          <Body/>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
