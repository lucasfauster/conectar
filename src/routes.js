import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing/index';
import Pedidos from './pages/Pedidos/index';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/pedidos" component={Pedidos}/>
        </BrowserRouter>
    );
}

export default Routes;