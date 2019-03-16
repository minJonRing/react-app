import React, { Component } from 'react';
import "../../css/nav.css"
class Nav extends Component {
    constructor(){
        super();
        this.state = {
            nav:new Array(10).fill({url:"",name:"2019"}),
            nowIndex:0,
        }
    }
    handleReturnOpacity(i){
        let abs = Math.abs(i - this.state.nowIndex);
        let opacity  = abs?abs:1;
        return {'opacity':opacity/Math.pow(3,abs)};
    }
    handleReturnTranslateY(){
        return {transform:`matrix(1, 0, 0, 1, 0, ${ 144 - (this.state.nowIndex*47)})`}
    }
    handleSetNowIndex(i){
        this.setState({
            nowIndex:i
        })
    }
    render(){
        return (
            <div className="nav">
                <div className="nav-show-box">
                    <div className="list" style={this.handleReturnTranslateY()}>
                        {this.state.nav.map((item,index)=>{
                            return (<span className="item" 
                            style={this.handleReturnOpacity(index)} 
                            key={index}
                            onClick={()=>this.handleSetNowIndex(index)}>{item.name}</span>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
