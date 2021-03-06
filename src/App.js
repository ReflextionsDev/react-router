import './App.css';
import Navbar from './components/navbar';

import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';



export class App extends Component {
  render() {
    return (
      <div>
        <h1>React Router</h1>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
    )
  }
}

export default App