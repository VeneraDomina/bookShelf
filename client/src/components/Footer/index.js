import React, { Component } from 'react'
import './styles.css'
import bookshelfLogo from '../../theme/assets/logo.png'

export default class Footer extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <footer>
        <img alt = 'Bookshelf' src = { bookshelfLogo } className = 'bookshelfLogo'/>
      </footer>
    )
  }
}
