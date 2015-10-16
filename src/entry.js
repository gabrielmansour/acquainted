'use strict';

var React = require('react');

require("./style.scss");

class HelloMessage extends React.Component {
  static defaultProps = {salutation: 'Ni Hao'};

  render() {
    return <div>{this.props.salutation}, {this.props.name}</div>;
  }
}

React.render(
  <HelloMessage name="Gabe" />,
  document.getElementById('container')
);
