import React from 'react';

export default class Guess extends React.Component {
  static defaultProps = {
    person: {},
    onClick: function () {}
  };

  render () {
    return (
      <div className="card">
        {this._image()}
        {this._name()}
        {this._formattedBody()}
      </div>
    )
  }

  _image () {
    return <div className="card-image">
      <img ref="img" src={this.props.person.image_url} alt={this.props.person.name}
           onError={this._handleImgError} onClick={this.props.onClick(this.props.person)} />
    </div>;
  }

  _name () {
    if (this.props.chosen) {
      return <div className="card-header">
        {this.props.person.title}
      </div>;
    }
  }

  _formattedBody () {
    var text = this.props.person.body;
    if (text && text.length == 2) {
      var first  = text[0].replace('&amp;', '&'),
        second = text[0].replace(/ (at|@) <B>Influtitive<B>/).replace('&amp;', '&');
      if (first == second) {
        text = first;
      } else {
        text = [first, second];
      }
    }

    if (this.props.chosen) {
      return <div className="card-copy"><p>text</p></div>;
    }
  }
}
