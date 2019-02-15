import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      totalClicks: 0
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let total = this.state.totalClicks + 1

    this.setState({
      totalClicks: total
    })
  }

  render() {
    return (
      <div>
        <Child onClick={this.handleClick} />
        <p>This button has been clicked {this.state.totalClicks} times!</p>
      </div>
    )
  }
}