import React, { Component } from 'react';
import "../../css/back.css"

class Back extends Component {
    constructor(){
        super()
        this.state = {
            backs:[
                "http://www.hzsinq.com/images/web/index/1.png",
                "http://www.hzsinq.com/images/web/index/2.png",
                "http://www.hzsinq.com/images/web/index/3.png",
                "http://www.hzsinq.com/images/web/index/4.png",
                "http://www.hzsinq.com/images/web/index/1.png",
                "http://www.hzsinq.com/images/web/index/2.png",
                "http://www.hzsinq.com/images/web/index/3.png",
                "http://www.hzsinq.com/images/web/index/4.png",
                ],
            ind:0
        }
    }
    componentWillMount(){
        // 每次进入页面渲染 用户获取ajax数据
        this.setState({
            ind:sessionStorage.getItem("nav")
        })
    }
    handleReturnInd(i){
        let j = this.props.childDirection == 0?'':this.props.childDirection == 1?0:2;
        let ind = this.state.ind;
        let url = this.state.backs[ind-1+i];
        if(j == i){
            url = this.state.backs[this.props.childInd];
        }
        return url;
    }
    handleReturnClass(){
        if(!this.props.childBl){
            setTimeout(() => {
                // 动画完成
                this.props.childOver();
                // 赋值当前索引 渲染图片
                this.setState({
                    ind:this.props.childInd
                })
            }, 800);
        }
        return this.props.childDirection == 0?'':this.props.childDirection == 1?'direction-right':'direction-left';
    }
    render(){
        return (
            <div className={['background',!this.props.childBl?'active':'',this.handleReturnClass()].join(' ')}>
                <img className="back-img back-1" src={this.handleReturnInd(0)} alt=""/>
                <img className="back-img back-2" src={this.handleReturnInd(1)} alt=""/>
                <img className="back-img back-3" src={this.handleReturnInd(2)} alt=""/>
            </div>
        )
    }
}

export default Back;