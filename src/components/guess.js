import React from 'react';
import classNames from 'classnames';
import _isEqual from 'lodash/lang/isEqual';

export default class Guess extends React.Component {
  static propTypes = {
    person: React.PropTypes.object.isRequired,
    correctPerson: React.PropTypes.object.isRequired,
    chosen: React.PropTypes.object,
    onClick: React.PropTypes.function
  };

  static defaultProps = {
    person: {},
    correctPerson: null,
    chosen: null,
    onClick: function () {}
  };

  render() {
    return (
      <div className={this._classNames()}>
        {this._image()}
        {this._answerText()}
      </div>
    )
  }

  _classNames(){
    return classNames({
      card: true,
      guess: true,
      guessed: this.props.chosen,
      actual: this.props.chosen && _isEqual(this.props.person, this.props.correctPerson) && !this._guessedRight(),
      right: this._guessedRight(),
      wrong: this._guessedWrong()
    });
  }

  _guessedRight() {
    return this.props.chosen && _isEqual(this.props.chosen, this.props.person) && _isEqual(this.props.chosen, this.props.correctPerson);
  }

  _guessedWrong() {
    return this.props.chosen && _isEqual(this.props.chosen, this.props.person) && !_isEqual(this.props.chosen, this.props.correctPerson);
  }

  _image () {
    return <div className="card-image">
      <img ref="img" src={this.props.person.image_url} alt={this.props.person.name}
           onError={this._handleImgError} onClick={this.props.onClick(this.props.person)} />
    </div>;
  }

  _answerText() {
    let message = [],
        title = this.props.person.title;
    title = title.replace(/ (at|@) <B>Influtitive<B>/).replace('&amp;', '&');

    if ( this.props.chosen ) {

      if (this._guessedWrong() ) {
        message = ['Nope!', `That's ${this.props.person.fmt_name}`, title];
      }

      return <div className="overlay">
        <p>{message[0]}</p>
        <p>{message[1]}</p>
        <p>{message[2]}</p>
      </div>;
    }
  }
}
