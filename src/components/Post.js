import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { Button } from '../components';

const css = {
  buttonAlign: {
    textAlign: 'right',
  },
};

export default class Post extends Component {
  render() {
    const returnTitle = (title) => <h1><b>{title}</b></h1>;

    return (
      <Panel header={returnTitle(this.props.header)} bsStyle="primary">
        {this.props.body}
        <div style={css.buttonAlign}>
          <Button text="Delete" />
          <Button text="Modify" />
        </div>
      </Panel>
    );
  }
}


Post.propTypes = {
  header: React.PropTypes.string,
  body: React.PropTypes.string,
};
