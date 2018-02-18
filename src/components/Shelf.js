import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

export default class Shelf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bins: [],
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/api/shelves/${this.props.match.params.id}`).then((res) => {
            this.setState({
                bins: res.data.sort((a,b) => a.number > b.number)
            })
        })
    }

    render() {
        const bins = <div className="shelves">
            {this.state.bins.map((bin, i) => {
            if (bin.name && bin.price) {
                return (
                    <Link className={'links binLink'} to={`/bin/${bin.shelf}${bin.number}`} key={i}>
                    <span className="shelfSpan">Bin {bin.number}</span>
                </Link>
                )
            } else {
                return (
                    <Link className='links empty' to={`/create/${bin.shelf}${bin.number}`} key={i}>
                    <span className="shelfSpan"><strong>+</strong> Add Inventory to bin</span>
                </Link>
                )
            }
        })
        }</div>
        return (
        <div>
            <Header></Header>
            {bins}
        </div>
    )
}
}
