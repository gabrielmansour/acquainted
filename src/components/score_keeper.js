import React from 'react';

require('./refills_stats.scss');

export default class ScoreKeeper extends React.Component {
  render () {
    return <div className="stats">
      <ul>
        <li dangerouslySetInnerHTML={{__html: this.props.right+'<span>Right</span>'}}></li>
        <li dangerouslySetInnerHTML={{__html: this.props.wrong+'<span>Wrong</span>'}}></li>
      </ul>
    </div>;
  }
}
