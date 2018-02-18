import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header.js';
import axios from 'axios';


export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            price: 0,
            shelf: this.props.match.params.id.split("")[0],
            number: this.props.match.params.id.split("")[1],
            redirect: false

        }
    }
    post = () => {
        let body = {
            name: this.state.name,
            price: this.state.price,
            shelf: this.state.shelf,
            number: this.state.number
        }
        axios.post(`http://localhost:3001/api/bin/${this.props.match.params.id}`, body)
            .then((res) => {
                this.setState({
                    redirect: true
                })
            }).catch((err) => console.log(err))
    }


    render() {
        if(this.state.redirect) {
            return (
                <Redirect to={`/bins/${this.state.shelf}`} />
            )
        }
        return (
            <div>
                <Header></Header>
                <div className="createWrap">
                    <span> Name </span>
                    <input onChange={e => this.nameChange(e.target.value)} placeholder=""/>
                    <br/>
                    <span> Price </span>
                    <input onChange={e => this.priceChange(e.target.value)} placeholder="$0"/>
                    <br/>
                    <button onClick={_ => this.post()}> + Add to Inventory </button>
                </div>
            </div>
        )
    }
    nameChange(val) {
        this.setState({
            name: val
        })
    }
    priceChange(val) {
        this.setState({
            price: val
        })
    }
}
