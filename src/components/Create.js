import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.js';
import axios from 'axios';


export default class Create extends Component {
    // constructor() {
    //     super();
    // }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="createWrap">
                    <span> Name </span>
                    <input value=""/>
                    <br/>
                    <span> Price </span>
                    <input value="$0"/>
                    <br/>
                    <button> + Add to Inventory </button>
                </div>
            </div>
        )
    }
}