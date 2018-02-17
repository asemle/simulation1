
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="shelves">
                    <Link to="/bins/A" className='links'>
                        <span className="shelfSpan">Shelf A</span>
                    </Link>
                    <Link to="/bins/B" className='links'>
                        <span className="shelfSpan">Shelf B</span>
                    </Link>
                    <Link to="/bins/C" className='links'>
                        <span className="shelfSpan">Shelf C</span>
                    </Link>
                    <Link to="/bins/D" className='links'>
                        <span className="shelfSpan">Shelf D</span>
                    </Link>
                </div>
            </div>
            
        );
    }
}