import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import Home from './components/Pages/home';
import About from "./components/Pages/about"
import Skills from "./components/Pages/My_skills"
import Contact from "./components/Pages/contact"
import Portfolio from "./components/Pages/portfolio"
import Control from "./components/Control/control"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

export default function App() {
    return (
        <div className="content" >
                <Router>
                            <Control/>
                    <Switch>
                        <div className="control_content">
                            <Route path="/" exact><Home/></Route>
                            <Route path="/about" exact><About/></Route>
                            <Route path="/skills" exact><Skills/></Route>
                            <Route path="/portfolio" exact><Portfolio/></Route>
                            <Route path="/contact" exact><Contact/></Route>
                        </div>
                    </Switch>
                </Router>
        </div>
        )
}
