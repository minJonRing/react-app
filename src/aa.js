import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
      console.log(this.props)
    } 
    render() {
      const { a, b } = this.props;
      return (
        <div className="App">
          <h2>当月工资为{this.props.tiger}</h2>
          <button onClick={a}>升职加薪</button>
          <button onClick={b}>迟到罚款</button>
        </div>
      );
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
      tiger: state
    }
  }
  //需要触发什么行为
  function mapDispatchToProps(dispatch) {
    return {
      a: () => dispatch({ type: '涨工资' }),
      b: () => dispatch({ type: '扣工资' })
    }
  }
  
  export default App = connect(mapStateToProps, mapDispatchToProps)(App)