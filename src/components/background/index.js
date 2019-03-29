import React, { Component } from 'react';
import "../../css/back.css"

class Back extends Component {
    constructor(){
        super()
        this.state = {
            backs:[
                "https://img.zcool.cn/community/01ad915c8646d7a80120af9a2f6ca4.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/0192345995801d00000021297684c0.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/0198b95994115ca801215603d3d95c.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/017dec59d1deaaa8012044633bc9ff.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/0155b759bdf17aa80120753469cd5c.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/01f42159bdeec9a801212fb7211824.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/012eba5958601aa8012193a3d59567.jpg@1280w_1l_2o_100sh.jpg",
                "https://img.zcool.cn/community/012c98553e12590000002561b3c083.jpg@1280w_1l_2o_100sh.jpg",
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