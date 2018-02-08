import React, { Component } from 'react';
import './index.scss';
import './normalize.min.css';

export default class Root extends Component {

  render() {

    return (
      <div className="root _block">
        {this.props.children}
      </div>
    )
  }
}