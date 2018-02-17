import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
