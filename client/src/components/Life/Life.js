import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListContainer from './ListContainer';
import CategoryDetail from './sub/CategoryDetail';
import AddArticle from './sub/AddArticle';
import UpdateArticle from './sub/UpdateArticle';


export default class Life extends React.Component {
    render() {
        return (
            <Router basename="/life">
                <Switch>
                    <Route path="/" exact component={ListContainer}></Route>
                    <Route path="/detail" component={CategoryDetail}></Route>
                    <Route path="/addArticle" component={AddArticle}></Route>
                    <Route path="/updateArticle" component={UpdateArticle}></Route>
                    <Route component={ListContainer}></Route>
                </Switch>
            </Router>
        )
    }
}