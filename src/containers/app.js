import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>React starter kit
      {this.props.children}
      </div>
    );
  }
}
