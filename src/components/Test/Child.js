import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <input type="button" onClick={this.props.onClick} />
    )
  }
} 