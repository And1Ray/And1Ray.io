import React, { Component } from 'react';
import './App.css';

import styled from 'styled-components';

import AddBtn from './components/AddBtn';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <AddBtn />
      </div>
    );
  }
}

export default App;
