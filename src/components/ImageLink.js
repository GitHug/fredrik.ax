import React, { Component } from 'react';

class ImageLink extends Component {
  render() {
    return (
      <a href={this.props.url} target={'_blank'}>
        <img src={this.props.image} alt={this.props.alt} />
      </a>
    );
  }
}

export default ImageLink;
