import React from 'react';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import HeyArnoldDetailContainer from '../../containers/HeyArnoldDetailContainer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HeyArnoldContainer} />
        <Route exact path="/:id" component={HeyArnoldDetailContainer} />
      </Switch>
    </Router>
  );
}
