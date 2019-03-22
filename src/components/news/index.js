import React, { Component } from 'react';
import '../../css/news.css';
class News extends Component {
    constructor(){
        super()
        this.state = {
            list: [1,2,3,4,5,6,7,8,9],
            add:false
        }
    }
    handleAddClass(){
        console.log(1)
        let bl = this.state.add;
        this.setState({
            add:!bl
        })
    }
    render(){
        return (
            <div className={['news',this.state.add?'active':''].join(" ")} >
                <div className="head"></div>
                <div className="list">
                    {this.state.list.map((item,index)=>{
                        return (
                            <div className="item" key={index} onClick={()=>this.handleAddClass()}></div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default News;
