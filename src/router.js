import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CompoIndex from './components';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' component={CompoIndex} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router; 
