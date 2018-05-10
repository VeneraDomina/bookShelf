import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'

import Collection from '../../components/Collection'
import './styles.css'

export default class CollectionList extends Component {
  static propTypes = {
    collectionList: PropTypes.array.isRequired,
    openCollection: PropTypes.func.isRequired,
    idCurrentCollection: PropTypes.string.isRequired,
    hideCollection: PropTypes.func.isRequired,
    openPopup: PropTypes.func.isRequired,
    isPopupOpen: PropTypes.bool.isRequired,
    createCollection: PropTypes.func.isRequired,
    deleteCollection: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.openPopup = this._openPopup.bind(this)
    this.createCollection = this._createCollection.bind(this)
    this.handleOutsideClick = this._handleOutsideClick.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.collectionList.length !== nextProps.collectionList.length ||
      this.props.idCurrentCollection !== nextProps.idCurrentCollection ||
      this.props.isPopupOpen !== nextProps.isPopupOpen) {
      return true
    }

    for (let i = 0; i < this.props.collectionList.length; i++) {
      if (this.props.collectionList[i].name !== nextProps.collectionList[i].name) {
        return true
      }
    }

    return false
  }

  _openPopup () {
    if (!this.props.isPopupOpen) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.props.openPopup(!this.props.isPopupOpen)
  }

  _handleOutsideClick (event) {
    if (this.node && this.node.contains(event.target)) {
      return
    }
    this._openPopup()
  }

  _createCollection (event) {
    event.preventDefault()

    const newCollection = {
      name: this.inputName.value,
      description: this.inputDescription.value
    }

    this.props.createCollection(newCollection)
    this._openPopup()
  }

  render () {
    const { collectionList, openCollection, idCurrentCollection, hideCollection, isPopupOpen, deleteCollection } = this.props
    const collectionsListForRender = collectionList.map(
      ({ name, _id, description }) => (
        <li key = { _id }><Collection
          id = { _id }
          name = { name }
          description = { description }
          openCollection = { openCollection }
          hideCollection = { hideCollection }
          idCurrentCollection = { idCurrentCollection }
          deleteCollection = { deleteCollection }
        /></li>
      ))

    const contentStyle = {
      'width': '80%',
      'minWidth': '250px',
      'maxWidth': '600px',
      'padding': '30px 20px 10px',
      'alignItems': 'center'
    }

    return (
      <section className = 'collectionList'>
        <ul className = 'collectionList-nav'>
          {collectionsListForRender}
        </ul>
        <button className = 'btn btn-newCollection' onClick = { this.openPopup }>Create new collection</button>
        <Popup
          className = 'popup popup-collection'
          position = 'bottom center'
          open = { isPopupOpen }
          contentStyle = { contentStyle }
          arrowStyle = {{ display: 'none' }}
        >
          <form className = 'popup-form' onSubmit = { this.createCollection } ref={node => { this.node = node }}>
            <div className = 'popupContent'>
              <label htmlFor = 'name'>Name:</label>
              <input type = 'text' name = 'name' placeholder = 'collection name' required ref = {(input) => { this.inputName = input }}/>
              <label htmlFor = 'description'>Description:</label>
              <textarea name = 'description' placeholder = 'collection description' rows = '4' required ref = {(input) => { this.inputDescription = input }}/>
            </div>
            <button type = 'submit' className = 'btn btn-createCollection'>Create</button>
          </form>
        </Popup>
      </section>
    )
  }
}
