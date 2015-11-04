'use strict';

import React from 'react';
import { Router, Route } from 'react-router';
import SiteHeader from './common/site_header';

import Everyone from './containers/everyone';
import Deck from './containers/deck';


require("./style.scss");

class Main extends React.Component {
  componentWillMount () {
    if (!this.props.children) {
      window.location.hash = '/play';
     }
  }

  render() {
    return <div>
      <SiteHeader />
      {this.props.children}
    </div>;
  }
}

React.render(
  (
  <Router component={Main}>
    <Route path="/" name="home" component={Main}>
      <Route path="play" name="play" component={Deck} />
      <Route path="everyone" name="everyone" component={Everyone} />
    </Route>
  </Router>
  ), document.getElementById('container')
);
