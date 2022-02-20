import React, { Component } from 'react';

import axios from 'axios';
import Images from './Images';
import ErrorBoundary from './ErrorBoundary';
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'gg',
    };
  }
  apiUrl = `https://api.unsplash.com/photos/random/?client_id=NpzCe_cek_q1E4L6ntCx2kgwyuVBER6Qu1_dCi-OGDE`;

  componentDidMount() {
    axios
      .get(this.apiUrl)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            imageUrl: res.data.urls?.thumb,
          });
        }
      })
      .catch((err) => {
        console.log('$$$$', err, err.message, err.status);
      });
  }
  render() {
    return (
      <>
        <ErrorBoundary>
          <Images imageUrl={this.state.imageUrl} />
        </ErrorBoundary>
      </>
    );
  }
}

export default Gallery;
