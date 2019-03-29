import React, { Component } from 'react';
import '../../css/news.css';
import config from "../../config"

class News extends Component {
    constructor(){
        super()
        this.state = {
            init: [],
            list: [],
            title:'全部',
            add:false,
            now:-1,
            old:-1,
            cla1:'',
            cla2:'',
            nowInd:0,
            page:1,
            total:1,
            pageNumber:16
        }
    }
    handleAddClass(){
        let bl = this.state.add;
        this.setState({
            add:!bl
        })
    }
    componentWillMount(){
        // 每次进入页面渲染 用户获取ajax数据
        fetch("/app/project/list").then(res=>res.json()).then(res=>{
            if(res.code == 200){
                let db = res.data,arr = [],type = config.workType;
                db = [...db,...db,...db,...db]
                arr[0] = {text:"全部",value:db};
                for(let i in type){
                    arr[i-0+1] = {text:type[i].text,value:[]};
                }
                for(let i in db){
                    let ind = db[i].type - 0;
                    arr[ind].value.push(db[i])
                }
                this.setState({
                    init:arr,
                    list:this.handleFilterDate(arr[0].value),
                })
                setTimeout(() => {
                    this.setState({
                        add:true
                    })
                }, 100);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    // 数据分类
    handleFilterDate(db){
        let arr = [];
        for(let i in db){
            let ind = Math.floor(i/this.state.pageNumber);
            if(!arr[ind]){
                arr[ind] = [];
            }
            arr[ind].push(db[i])
        }
        return arr;
    }
    // 鼠标 滑动
    handleMouseEnter(i){
        let now = this.state.now;
        let sub = i - now;
        let cla1,cla2 ;
        switch(sub){
            case 1:
            cla1 = 'left'
            cla2 = 'right-out'
            break;
            case -1:
            cla1 = 'right'
            cla2 = 'left-out'
            break;
            case 4:
            cla1 = 'top'
            cla2 = 'bottom-out'
            break;
            case -4:
            cla1 = 'bottom'
            cla2 = 'top-out'
            break;
            default:
            cla1 = 'mid'
            cla2 = 'mid-out'
            break;
        }
        this.setState({
            cla1: cla1,
            cla2: cla2,
            old: now,
            now: i
        })
    }
    // 添加class
    handleReturnClass(i,j){
        let bl = this.state.page - 1 == j;
        return `${this.state.now == i && bl?this.state.cla1:''} ${this.state.old == i && bl?this.state.cla2:''}`;
    }
    // 切换类型
    handleSwitchNav(i){
        if(i == this.state.nowInd)return;
        let arr = this.state.list;
        this.setState({
            nowInd:i,
            now:-1,
            old:-1,
            title:this.state.init[i].text,
            page:1,
            total:Math.ceil(this.state.init[i].value.length/this.state.pageNumber),
            list:this.handleFilterDate(this.state.init[i].value)
        })
    }
    // 切换数据
    handleWheel(e){
        let page = this.state.page;
        if(e.nativeEvent.deltaY < 0){
            if(page == 1){
                return;
            }else{
                this.setState({
                    page:page - 1
                })
            }
        }else{
            if(page == this.state.total){
                return;
            }else{
                this.setState({
                    page:page + 1
                })
            }
        }
    }
    //
    handleSlide(){
        return `transform: translateY(${this.state.page * 100}%)`
    }
    componentWillUnmount(){//组件销毁
    }
    render(){
        return (
            <div className={['news',this.state.add?'active':''].join(" ")} onWheel={(e)=>this.handleWheel(e)}>
                <div className="head">
                    <div className="head-title"><span>{this.state.title}</span></div>
                    <div className="head-desc"></div>
                    <div className="head-navs">
                        {this.state.init.map((item,index)=>{
                            return (
                                <a href="javascript:" className="head-nav" key={index}
                                onClick={()=>{this.handleSwitchNav(index)}}><span>{item.text}</span></a>
                            )
                        })}
                        
                    </div>
                </div>
                <div className="list">
                    <div className="box">
                        <div className="list-box">
                            {this.state.list.map((x,y)=>{
                                return (
                                    <div className="item-box" key={y}>
                                        {x.map((item,index)=>{
                                            return (
                                                <a href={`/app/edit?id=${item.id}`} className={['item',this.handleReturnClass(index,y)].join(" ")}
                                                onMouseOver={()=>this.handleMouseEnter(index)} 
                                                key={index} 
                                                onClick={()=>this.handleAddClass()}>
                                                    <div className="item-img">
                                                        <img src={item.cover} alt=""/>
                                                    </div>
                                                    <div className="item-shade">
                                                        <span className="item-title">{item.title}</span>
                                                    </div>
                                                </a>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;
