import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
      <a href={this.props.url} target={'_blank'}>
        {this.props.content}
      </a>
    );
  }
}

export default Link;
