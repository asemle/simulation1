import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Bin from './Bin.js';

export default class Shelf extends Component {
    constructor() {
        super();
        this.state = {
            shelves: []
        }
    }
    componentDidMount() {
        axios.get
    }

    render() {
        return (
        <div>
            <Header></Header>
            <Link to="/bins/A">heyheyyy</Link>
        </div>
    )
}
}
