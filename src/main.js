'use strict';

import React from 'react';
import Reflux from 'reflux';
import { Router, Route, Link } from 'react-router';
import Card from './components/card';
import {ButtonGroup, ButtonGroupItem } from './components/button_group';
import SiteHeader from './common/site_header';

require("./style.scss");

class Main extends React.Component {
  state = { people: require('../data/people.json') };

  render() {
    return <div>
      <SiteHeader />
      {this.props.children}
    </div>;
  }
}

class Questions extends React.Component {
  render () {
    return <div>
      <h2>Who is <strong>This Person</strong>?</h2>
      <Card /><Card /><Card /><Card />
    </div>
  }
}

class Everyone extends React.Component {
  state = { people: require('../data/people.json') };

  render() {
    var people = this.state.people.map(function(person, i){
      return <Card key={i} title={person.fmt_name} body={[person.title, person.fmt_headline]} image={person.image_url} />;
    });
    return <div id="everyone">
      <ButtonGroup>
        Sort by:{' '}
        <ButtonGroupItem checked={true}>Date added</ButtonGroupItem>
        <ButtonGroupItem onClick={this._sortBy('name')}>Name</ButtonGroupItem>
        <ButtonGroupItem>Item 3</ButtonGroupItem>
        <ButtonGroupItem>Item 4</ButtonGroupItem>
      </ButtonGroup>

      <div id="people">{people}</div>
    </div>;
  }

  _sortBy (criteria) {
    this.state.people.sort(function(a, b) {
      return b.name;
    });
  }
}

React.render(
  (
  <Router component={Main}>
    <Route path="/" name="home" component={Main}>
      <Route path="" name="home" component={Questions} />
      <Route path="everyone" name="everyone" component={Everyone} />
    </Route>
  </Router>
  ), document.getElementById('container')
);
