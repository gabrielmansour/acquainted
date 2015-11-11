import React from 'react';
import textilize from 'textile-js';

export default class Colophon extends React.Component {
  render() {
    let content = textilize(require('./colophon.txt'));
    return <article className="type-system-slab" dangerouslySetInnerHTML={{__html: content}} />;
  }
}
