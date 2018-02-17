import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';
import axios from 'axios';

export default class Bin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            name: '',
            price: '',
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`).then(res => {
            
            this.setState({
                name: res.data[0].name,
                price: res.data[0].price
            })
        })
    }

    render() {
        var right = "";
        if (this.state.edit) {
            let right = <div className="right">
                <div className="binData">

                </div>
                <div className="binButtons">

                </div>
            </div>
        } else {
        let right = <div className="right">
            <div className="binData">
                <p className="pTitle">Name</p>
                <p className="pValue">{this.state.name}</p>
                <p className="pTitle">Price</p>
                <p className="pValue">{this.state.price}</p>
            </div>
            <div className="binButtons">
                <button onClick={() => this.editBin()}className="btnGrey">Edit</button>
                <button className="btnGrey">Delete</button>
            </div>
        </div>
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
                        {right}
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
}