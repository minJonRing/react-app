import React, { Component } from 'react';
import "../../css/nav.css"
class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            nav:[
                {index:0,url:"/",name:"首页"},
                {index:1,url:"/news",name:"新闻"},
                {index:2,url:"/",name:"产品"},
                {index:3,url:"/",name:"媒体"},
                {index:4,url:"/",name:"动画"},
                {index:5,url:"/",name:"漫画"},
                {index:6,url:"/",name:"音乐"},
                {index:7,url:"/",name:"电影"},
            ]
        }
    }
    handleReturnOpacity(i){
        let abs = Math.abs(i - this.props.childInd);
        let opacity  = abs?abs:1;
        return {'opacity':opacity/Math.pow(3,abs)};
    }
    handleReturnTranslateY(){
        return {transform:`matrix(1, 0, 0, 1, 0, ${ 144 - (this.props.childInd * 47)})`}
    }
    render(){
        return (
            <div className="nav">
                <div className="nav-show-box">
                    <div className="list" style={this.handleReturnTranslateY()}>
                        {this.state.nav.map((item,index)=>{
                            return (<span  to="/news" className="item" 
                            style={this.handleReturnOpacity(index)} 
                            key={index}
                            onClick={()=>this.props.childSwitch(index,item.url)} >{item.name}</span>)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;
