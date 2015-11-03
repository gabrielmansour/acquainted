import React from 'react';

export default class Card extends React.Component {
  static defaultProps = {  image: null,
                           title: null,
                           body: null,
                           url: null
                        };

  componentDidUpdate () {
    React.findDOMNode(this.refs.img).className = '';
  }

  render () {
    return (
      <div className="card">
        <div className="card-image">
          <img ref="img" src={this.props.image} alt={this.props.title} onError={this._handleImgError} />
        </div>
        <div className="card-header">
          {this.props.title}
          {' '}
          {this._linkedin()}
        </div>
        <div className="card-copy">
          <p>{this._formattedBody()}</p>
        </div>
      </div>
    )
  }

  _formattedBody () {
    if (this.props.body && this.props.body.length == 2) {
      var first  = this.props.body[0].replace('&amp;', '&'),
          second = this.props.body[0].replace(/ (at|@) <B>Influtitive<B>/).replace('&amp;', '&');
      if (first == second) {
        return first;
      } else {
        return [first, second];
      }
    }

    return this.props.body;
  }

  _handleImgError (e) {
    e.target.src = '';
    e.target.className = 'error';
  }

  _linkedin () {
    if (this.props.url) {
      return <span className="badges" style={{float: 'right'}}><a href={this.props.url} className="badge notice">in</a></span>;
    }
  }
}
