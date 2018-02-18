import React,{Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header.js';
import axios from 'axios';

export default class Bin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            name: '',
            price: '',
            shelf: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`).then(res => {
            
            this.setState({
                name: res.data[0].name,
                price: res.data[0].price,
                shelf: res.data[0].shelf
            })
        })
    }

    render() {
        // var binName, binPrice
        if(this.state.edit === true) {
           var  binName = <input className="pValue" onChange={e=> this.nameChange(e.target.value)} value={this.state.name}></input>
            var binPrice = <input type="text" className="pValue" onChange={e => this.priceChange(e.target.value)} value={this.state.price}></input>
            var leftButton = <button onClick={_ => this.put()} className="btnGrey btnGreen">Save</button>
        } else {
            var binName = <p className="pValue">{this.state.name}</p>
            var binPrice = <p className="pValue">{this.state.price}</p>
            var leftButton = <button onClick={() => this.editBin()} className="btnGrey">Edit</button>
        }
        if (this.state.redirect) {
            return (
                <Redirect to={`/bins/${this.state.shelf}`} />
            )
        }
        return (
            <div>
                <Header/>
                <div className="binWrap">
                    <div className="clearfix"></div>
                    <div className="binContents">
                        <div className="left">
                            <img src="http://lorempixel.com/200/200/business/" alt="inventory"/>
                        </div>
                        <div className="right">
                            <div className="binData">
                                <p className="pTitle">Name</p>
                                {binName}
                                <p className="pTitle">Price</p>
                                {binPrice}
                            </div>
                            <div className="binButtons">
                                {leftButton}
                                <button onClick={() => this.deleteBin()}className="btnGrey">Delete</button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
    editBin() {
        this.setState({
            edit:true
        })  
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
    put() {
        let body = {
            name: this.state.name,
            price:this.state.price
        }
        axios.put(`http://localhost:3001/api/bin/${this.props.match.params.id}`, body)
        .then(res => {
            this.setState({
                redirect:true
            })
        }).catch(err => console.log(err))
    }
    deleteBin() {
        axios.delete(`http://localhost:3001/api/bin/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    redirect: true
                })
            }).catch(err => console.log(err))
    }
}