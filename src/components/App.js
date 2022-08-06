import React, { Component, useState } from "react";
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoMatch from "./NoMatch";
import LocationDisplay from "./LocationDisplay";



class App extends Component {
    render() {

        return (
            <>

                <Router>
                    <div id="main">
                        {/* Do not remove the main div */}
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about'}>About</Link></li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path='/about' component={About} />
                            <Route path='*' component={NoMatch} />
                        </Switch>
                        <LocationDisplay />
                    </div>

                </Router>

            </>
        )
    }
}


export default App;
