import React, { Component } from 'react';

import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';
import GamePage from './pages/GamePage';
import HostPage from './pages/HostPage';

const SERVER_URL = "";
const socket = io.connect(SERVER_URL);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' render={(routerProps) => <HostPage {...routerProps} socket={socket} />} />
          <Route path='/game' render={(routerProps) => <GamePage {...routerProps} socket={socket} />} /> 
          <Route path='' render={(routerProps) => <NotFoundPage {...routerProps} socket={socket} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;