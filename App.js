import React from 'react'
import { Header } from './src/components/Header'
import { Content } from './src/components/Content'


export class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}
