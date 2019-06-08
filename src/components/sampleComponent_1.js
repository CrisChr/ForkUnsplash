import React from 'react'

export class App1 extends React.Component {
  constructor(props){
    super(props)
    // this.state = {
    //   count: 0
    // }
  }

  render(){
    return(
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>+</button>&nbsp; | &nbsp;
        <button onClick={this.props.decrement}>-</button>
      </div>
    )
  }
}



