import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Router, Route, Link } from "react-router-dom";
import history from '../history';

import Index from "../components/index/index"
import News from "../components/news/index"
// 设置根路由
const BasicExample = () => (
    // 根路由标签
    <Router history={history}>
        <div className="router" style={{height:'100%'}}>
            <Route exact path="/" component={Index} />
            <Route path="/news" component={News} />
        </div>
    </Router>
);

export default BasicExample;