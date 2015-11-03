import React from 'react';
import Reflux from 'reflux';
import Card from '../components/card';
import {ButtonGroup, ButtonGroupItem } from '../components/button_group';

export default class Everyone extends React.Component {
  state = { people: require('../../data/people.json') };

  render() {
    var people = this.state.people.map(function(person, i){
      return <Card key={i} title={person.fmt_name} body={[person.title, person.fmt_headline]} image={person.image_url} url={person.linkedin_url} />;
    });
    return <div id="everyone">
      <span style={{float:'left'}}>Sort by:{' '}</span>
      <ButtonGroup>
        <ButtonGroupItem onClick={this._sortBy('id')} checked={true}>Date added</ButtonGroupItem>
        <ButtonGroupItem onClick={this._sortBy('fmt_name')}>Name</ButtonGroupItem>
        <ButtonGroupItem onClick={this._sortBy('title')}>Title</ButtonGroupItem>
      </ButtonGroup>

      <div id="people">{people}</div>
    </div>;
  }

  _sortBy (criteria) {
    return function(e) {
      var sorted = this.state.people.sort(function(a, b) {
        return a[criteria] < b[criteria] ? -1 : 1;
      });
      this.setState({people: sorted});
      return true;
    }.bind(this);
  }
}
