import React, { Component } from 'react';
import { Button as BsButton } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Button extends Component {
  render() {
    const fa = () => {
      if (this.props.faName) {
        return (
          <FontAwesome style={{ paddingRight: 5 }} name={this.props.faName} />
        );
      }
      return '';
    };
    return (
      <BsButton
        bsStyle={this.props.bsStyle ? this.props.bsStyle : 'default'}
      >
        { fa() }
        { this.props.text ? this.props.text : 'Button Text' }
      </BsButton>
    );
  }
}

Button.propTypes = {
  faName: React.PropTypes.string,
  bsStyle: React.PropTypes.string,
  text: React.PropTypes.string,
};
