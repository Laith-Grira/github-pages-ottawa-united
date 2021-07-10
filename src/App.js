import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/Webpages/Home/HomePage';
import TeamPage from './components/Webpages/Team/TeamPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hi everyone</h1>
        <div className="content">
          <Switch>
            <Route exact path="/"><HomePage /></Route>
            <Route exact path ="/team"><TeamPage /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
