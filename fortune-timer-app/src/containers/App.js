import React from 'react';
import Layout from './Layout/Layout';
import NavBar from '../components/Timer-box/Timer--navigation';
import TimeNowPage from '../components/Timer-box/TimerNowPage';
import SetTimerPage from '../components/SetTimerPage';
import TimeMapPage from '../components/TimeMapPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Layout>
      <NavBar/>
      <Switch>
      <Route path="/" exact component={TimeNowPage}/>
      <Route path="/setTimer" component={SetTimerPage}/>
      <Route path="/timeMap" component={TimeMapPage}/>
    </Switch>
    </Layout>
    </Router> 
    
    );
}

export default App;
