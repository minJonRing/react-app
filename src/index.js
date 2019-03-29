import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider , connect } from "react-redux"
import { createStore , applyMiddleware } from "redux"
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
// import store from "./redux/store/index";
import {increment,decrement} from './redux/action/index'
import './index.css';

import App from './App';
// import App from './aa';
// import reducer from './redux/reducer';

import * as serviceWorker from './serviceWorker';

const init = {
    num:100,
    arr:[]
}
const add = {
    type:"add",
    payload:{
        i:1
    }
}
const arr = {
    type:"arr",
    payload:{
        arr:[1]
    }
}
function handleAdd(state,action){
    const { payload } = action;
    return {
        ...state,
        num:state.num += payload.i
    }
}
function handleArr(state,action){
    const { payload } = action;
    return {
        ...state,
        arr:[...state.arr,...payload.arr]
    }
}
const reducer = (state = init,action)=>{
    const { type , payload } = action;
    switch (type){
        case 'add':
        return handleAdd(state,action);
        case 'arr':
        return handleArr(state,action);
        default:
        return state;
    }
}
const logger = createLogger();
const store = createStore(reducer,applyMiddleware(thunk,logger));

store.subscribe(()=>{
    // console.log(store.getState())
})

store.dispatch(add)

const requestPosts = (num = 2) => {
    return {type:'add',payload:{i:num}}
}
const awaitPost = num => (dispatch , getState)=>{
    dispatch(requestPosts())
    return setTimeout(() => {
        dispatch(requestPosts(num))
    }, 1000);
}

const mapStateToProps = (state,ownProps)=>{
    return {
        init:{
            num:100,
            arr:[]
        }
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        onClick : ()=>{
            dispatch({
                type:"add",
                payload:{
                    i:99
                }
            })
        }
    }
}
store.dispatch(awaitPost(3))
// store.dispatch(arr)

let Aa = connect(mapStateToProps,mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Aa />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
