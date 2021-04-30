import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import CalcComponent from './CalcComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'

export class IndexComponent extends Component {
    render() {
        return (
            <div className="Calc">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={CalcComponent} />
                        {/* <AuthenticiatedRoute path="/logout" component={LogoutComponent} /> */}
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )
    }
}