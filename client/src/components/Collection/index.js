import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import book from '../../theme/assets/book.png'

export default class Collection extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    openCollection: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    idCurrentCollection: PropTypes.string.isRequired,
    hideCollection: PropTypes.func.isRequired,
    deleteCollection: PropTypes.func.isRequired
  }
  constructor () {
    super()
    this.openCollection = this._openCollection.bind(this)
    this.deleteCollection = this._deleteCollection.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return !(this.props.name === nextProps.name)
  }

  _openCollection () {
    (this.props.idCurrentCollection === this.props.id)
      ? this.props.hideCollection()
      : this.props.openCollection(this.props.id)
  }

  _deleteCollection (event) {
    event.stopPropagation()
    this.props.deleteCollection(this.props.id)
  }

  render () {
    const { name } = this.props

    return (
      <button className = 'collection' onClick = { this.openCollection }>
        <img src = { book } alt = 'book' className = 'icon'/>
        <p>{ name }</p>
        <i className = 'fa fa-close' title = 'delete' onClick = { this.deleteCollection }/>
      </button>
    )
  }
}
