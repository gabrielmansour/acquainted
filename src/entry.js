'use strict';

import React from 'react';
import Card from './components/card';

require("./style.scss");

class HelloMessage extends React.Component {
  static defaultProps = {salutation: 'Ni Hao'};

  render() {
    return <div>{this.props.salutation}, {this.props.name}
    <Card />
    </div>;
  }
}

React.render(
  <HelloMessage name="Gabe" />,
  document.getElementById('container')
);
