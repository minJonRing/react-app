import React, { Component } from 'react';
import '../../css/index.css';
import bg from "./img/bg.jpg";
import Nav from "./nav"
import Paper from "./paper"

class Index extends Component {
    constructor(){
        super();
        this.state = {
            id : 1
        }
    }
    render(){
        return (
            <div className="index">
                <div className="bg">
                    <img className="bg" alt=""/>
                </div>
                <Nav/>
                <Paper/>
            </div>
        )
    }
}

export default Index;