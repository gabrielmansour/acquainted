import React from 'react';

export default class Card extends React.Component {
  static defaultProps = {  image: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/mountains.png',
                    title: 'Fun Card',
                    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident.',
                    url: null
                 };

  render () {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.image} alt={this.props.title} onError={this._handleImgError} />
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
    if (this.props.body.length == 2) {
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
