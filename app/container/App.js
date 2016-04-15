import React, { Component } from 'react';
import {
  HelloReact
} from '../components/';

import 'bootstrap/dist/css/bootstrap.css';
import './App.less';

class App extends Component {
  render(){
    return (
      <div className="text-center">
          <div>
            <HelloReact />
          </div>
      </div>
    );
  }
}

export default App;