import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from './components/layout/Navbar';
import CreateProject from "./components/projects/CreateProject";
import ProjectDetail from "./components/projects/ProjectDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/projext/:id' component={ProjectDetail} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/createProject' component={CreateProject} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
