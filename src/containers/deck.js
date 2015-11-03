import React from 'react';
import Guess from '../components/guess';
import sample from 'lodash/collection/sample';

window.React = React;

export default class Deck extends React.Component {
  state = { people: [] };

  componentWillMount () {
    this.setState({people: require('../../data/people.json').filter(p => p.image_url) });
  }

  render() {
    let people = sample(this.state.people, 4),
        currentPerson = sample(people),
        guesses = people.map(function(person, i){
          return <Guess key={i} person={person} onClick={this._handleGuess} chosen={this._isChosenCorrectly(person)} />;
        }, this);
    return <div id="flash-cards">
      <h1>Who is {currentPerson.fmt_name}?</h1>

      <div id="people">{guesses}</div>
    </div>;
  }

  _handleGuess = (person) => {
    return (e) => {
      this.setState({chosen: person});
    }
  }

  _isChosenCorrectly (person) {
    return false;
  }
}
