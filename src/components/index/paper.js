import React, { Component } from 'react';
import '../../css/paper.css';
import img from "./img/bg.jpg";
class Paper extends Component {
    constructor(){
        super();
        this.state = {
            list:new Array(6).fill({num:2,title:"22",img:img}),
            isMOuse:false,//是否滑动
            sx:0,
            mx:0,//初始距离
            st:0,//初始时间
            direction:"",//滑动方向
            listActive:false,//是否添加class
            translate:0,//滑动距离
            translateInd:0,//当前索引
            winW:window.innerWidth
        }
    }
    handleMouseDown=(e)=>{
        e.persist();
        this.setState({
            sx:e.pageX,
            mx:e.pageX,
            st:Date.now(),
            isMOuse:true,
            listActive:false
        })
    }
    handleMouseMove=(e)=>{
        e.persist();
        if(this.state.isMOuse){
            let x = e.pageX; //当前鼠标位置
            let sub = (x - this.state.mx) > 0 ? "right" : "left"; //滑动方向
            let tran = this.state.translate + (x - this.state.mx)*.8*100/this.state.winW; //滑动距离
            if(this.state.direction != sub){ //判断是否修改方向
                this.setState({
                    direction: sub
                })
            }
            this.setState({  //更新 初始距离 和 滑动距离
                mx:e.pageX,
                translate:tran
            })
        }
    }
    handleMouseUp=(e)=>{
        let slide = this.state.translateInd;
        let x = e.pageX;
        let et = Date.now();
        let item = document.querySelector(".list-box .item");
        let w = item.clientWidth/2 + 
        this.setState({
            direction:" ",
            isMOuse:false,
            listActive:true
        })
        if( Math.abs(x - this.state.sx) > 200 || (et - this.state.st) < 300 ){
            slide = (x - this.state.sx) > 0 ? slide - 1 : slide + 1;
            slide = slide < 0 ? 0:slide;
            slide = slide > this.state.list.length - 1?this.state.list.length - 1:slide;
        }
        this.setState({
            translateInd:slide,
            translate:-(110*slide)
        })
    }
    handleReturnTranslateX(){
        return {transform:`translateX(${this.state.translate}%)`}
    }
    render(){
        return (
            <div className="paper">
                <div className="list-box" 
                onMouseDown={this.handleMouseDown}
                onMouseMove={this.handleMouseMove}
                onMouseUp={this.handleMouseUp}>
                    <div className={['list',this.state.direction,this.state.listActive?'animate':''].join(' ')} 
                    style={this.handleReturnTranslateX()}>
                        {this.state.list.map((item,index)=>{
                            return(<Item obj={ item } key={index} />)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

class Item extends Component {
    constructor(){
        super();
    }
    render(){
        return (
            <div className="item">
                <div className="item-tip">
                    <h3>{this.props.obj.num}</h3>
                    <h2>{this.props.obj.title}</h2>
                </div>
                <div className="item-box">
                    <img draggable="false" src={this.props.obj.img} alt=""/>
                </div>
            </div>
        )
    }
}
export default Paper;
