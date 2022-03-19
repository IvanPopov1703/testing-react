import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainContent from "./MainContent";
import About from "../pages/About";
import Error from "../pages/Error";
import CreateTest from "../pages/CreateTest";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/main">
                <MainContent/>
            </Route>
            <Route path="/about">
                <About text={"TTT"}/>
            </Route>
            <Route path="/create-new-test">
                <CreateTest />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Redirect to="/error" />
        </Switch>
    );
};

export default AppRouter;
