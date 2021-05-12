import React from 'react';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import HeyArnoldDetailContainer from '../../containers/HeyArnoldDetailContainer';
import HeyArnoldGifContainer from '../../containers/HeyArnoldGifContainer';
import Header from '../header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header className="header" />
      <Switch>
        <Route exact path="/" component={HeyArnoldContainer} />
        <Route exact path="/random" component={HeyArnoldGifContainer} />
        <Route exact path="/:id" component={HeyArnoldDetailContainer} />
      </Switch>
    </Router>
  );
}
