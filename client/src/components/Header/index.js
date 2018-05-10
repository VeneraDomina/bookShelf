import React, { Component } from 'react'
import './styles.css'
import bookshelfLogo from '../../theme/assets/logo.png'

export default class Header extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <header>
        <img alt = 'Bookshelf'
          src = { bookshelfLogo }
          className = 'bookshelfLogo'
        />
      </header>
    )
  }
}
