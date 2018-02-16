import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Header from './components/Header'
import Routes from './components/Routes.js'

export default class App extends Component {
  render() {
    return (
      <div className="shelfieWrap">
        <Header></Header>
        {Routes}
      </div>

    )
  }
}
