import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActionsPage from './pages/ActionsPage';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/actions" exact component={ActionsPage}/>
            </Switch>
        </BrowserRouter>
    );
}