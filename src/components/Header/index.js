import React, { Component } from 'react';

import './styles.css';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <span>{this.props.title}</span>
      </header>
    );
  }
}
