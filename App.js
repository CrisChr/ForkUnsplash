import React from 'react'
import { Header } from './src/components/Header'
import ContentCotainer  from './src/containers/ContentContainer'


export class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        <Header/>
        <ContentCotainer/>
      </div>
    )
  }
}
