import "./App.css"
import Login from "./components/login"
import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Nav />
        </div>
        <div className="page">
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/login/check">
            <h1>check</h1>
          </Route>
        </div>
      </div>
    </Router>
  )
}

export default App
