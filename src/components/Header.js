import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/style.css'
import { Navbar } from 'react-bootstrap'

export class Header extends React.Component {
  render(){
    return(
      <Navbar bg='light'>
        <Navbar.Brand>Fork Unsplash</Navbar.Brand>
      </Navbar>
    )
  }
}
