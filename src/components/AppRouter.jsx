import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainContent from "./MainContent";
import Error from "../pages/Error";
import CreateTest from "../pages/CreateTest";
import FormCreateQuestions from "./forms/FormCreateQuestions";
import MyTestPage from "../pages/MyTestPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/main">
                <MainContent/>
            </Route>
            <Route path="/create-new-test">
                <CreateTest />
            </Route>
            <Route path="/error">
                <Error />
            </Route>
            <Route path="/question">
                <FormCreateQuestions />
            </Route>
            <Route path="/my-test-page">
                <MyTestPage />
            </Route>
            <Redirect to="/error" />
        </Switch>
    );
};

export default AppRouter;
