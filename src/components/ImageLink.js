import React, { Component } from 'react';

class ImageLink extends Component {
  render() {
    return (
      <a href={this.props.url} target={'_blank'}>
        abc
      </a>
    );
  }
}

export default ImageLink;
