import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Router, Route, Link } from "react-router-dom";
import history from '../history';

import Index from "../components/index/index"
import News from "../components/news/index"
import Work from "../components/work/index"
// 设置根路由
const BasicExample = () => (
    // 根路由标签
    <Router history={history}>
        <div className="router" style={{height:'100%'}}>
            <Route exact path="/" component={Index} />
            <Route path="/news" component={News} />
            <Route path="/work" component={Work} />
        </div>
    </Router>
);

export default BasicExample;