import React from 'react';

class ButtonGroup extends React.Component {
  render() {
    return (
        <div className="button-group">
          {this.props.children}
        </div>
    );
  }
}

class ButtonGroupItem extends React.Component {
  static defaultProps = {checked: false, onClick: function(){} };

  render() {
    return (<label>
      <input type="radio" name="button-group" value={this.props.children} checked={this.props.checked} onChange={this.props.onClick} />
      <span className="button-group-item">{this.props.children}</span>
    </label>);
  }
}

module.exports = { ButtonGroup, ButtonGroupItem };
