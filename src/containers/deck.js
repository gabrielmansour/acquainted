import React from 'react';
import Guess from '../components/guess';
import ScoreKeeper from '../components/score_keeper';
import sample from 'lodash/collection/sample';
import _delay from 'lodash/function/delay';
import _isEqual from 'lodash/lang/isEqual';

const PEOPLE = require('../../data/people.json').filter(p => p.image_url);

export default class Deck extends React.Component {
  state = { people: [], choices: [], currentPerson: null,  scores: { right: 0, wrong: 0} };

  componentWillMount() {
    this.deal();
  }

  deal() {
    let choices = sample(PEOPLE, 4);
    this.setState({
      people: PEOPLE,
      choices: choices,
      currentPerson: sample(choices),
      chosen: null
    });
  }

  render() {
    let choices = this.state.choices.map(function(person, i){
      return <Guess key={i} person={person} correctPerson={this.state.currentPerson} chosen={this.state.chosen} onClick={this._handleGuess} />;
    }, this);
    return <div id="flash-cards">
      <ScoreKeeper {...this.state.scores} />
      <h1>Who is {this.state.currentPerson && this.state.currentPerson.fmt_name}? <small>{this.state.currentPerson.title}</small></h1>

      <div id="people">{choices}</div>
    </div>;
  }

  _handleGuess = (person) => {
    return (e) => {
      let delay = 600;

      if ( _isEqual(this.state.currentPerson, person) ) {
        this.state.scores.right++;
      } else {
        this.state.scores.wrong++;
        delay = 1200;
      }
      this.setState({ chosen: person, scores: this.state.scores });

      _delay(this.deal.bind(this), delay);
    }
  }
}
