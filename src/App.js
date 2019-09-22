import React, { Component } from 'react';

import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

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
          <Route exact path='/landing' component={LandingPage} />
          <Route path='/' component={NotFoundPage}  />
        </Switch>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
