import React, { Component } from 'react';
import './App.css';
import history from './history';

import Nav from "./components/nav/index";
import Back from "./components/background/index";
import BasicExample from './router/index';

class App extends Component {
  constructor(){
    super()
    this.state = {
      ind:0,//当前位置
      over:true,//是否开始动画
      direction:0,//动画方向
    }
    this.handleBgSwitch = this.handleBgSwitch.bind(this);
    this.handleOver = this.handleOver.bind(this);
  }
  handleBgSwitch(value,url) {
    if(value == this.state.ind || !this.state.over){
      return;
    }
    sessionStorage.setItem("nav",value)
    let l = value > this.state.ind ? -1 : value == this.state.ind? 0 : 1;
    this.setState({
      ind:value,
      over:false,
      direction:l
    })
    history.push(url)
  }
  handleOver(){
    this.setState({
      over:true
    })
  }
  componentWillMount(){
    // 每次进入页面渲染 用户获取ajax数据
    this.setState({
        ind:sessionStorage.getItem("nav")
    })
  }
  render() {
    return (
      <div className="App">
        <Back childBl={this.state.over} childDirection={this.state.direction} childInd={this.state.ind} childOver={this.handleOver}/>
        <Nav childInd={this.state.ind} childSwitch={this.handleBgSwitch} />
        <BasicExample />
      </div>
    );
  }
}

export default App;
