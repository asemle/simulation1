import React, { Component } from 'react';
import './index.css';

import Routes from './components/Routes.js'

export default class App extends Component {
  render() {
    return (
      <div className="shelfieWrap">
        {Routes}
      </div>

    )
  }
}
