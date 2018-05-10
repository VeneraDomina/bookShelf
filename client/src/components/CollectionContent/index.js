import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContentEditable from 'react-contenteditable'
import Alert from 'react-s-alert'

import './styles.css'
import BookList from '../BookList'
import Searcher from '../Searcher'

export default class CollectionContent extends Component {
  static propTypes = {
    idCurrentCollection: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    currentBookList: PropTypes.array,
    isCollectionOpen: PropTypes.bool.isRequired,
    searchBook: PropTypes.func.isRequired,
    editCollection: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired,
    bookSearchName: PropTypes.string.isRequired,
    removeBook: PropTypes.func.isRequired,
    rateBook: PropTypes.func.isRequired,
    idCurrentBook: PropTypes.string,
    stars: PropTypes.number,
    bookList: PropTypes.array.isRequired
  }

  constructor () {
    super()
    this.handlerChangeTitle = this._handlerChangeTitle.bind(this)
    this.handlerChangeDescription = this._handlerChangeDescription.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return (this.props.isCollectionOpen !== nextProps.isCollectionOpen ||
      this.props.title !== nextProps.title ||
      this.props.description !== nextProps.description ||
      this.props.currentBookList.length !== nextProps.currentBookList.length ||
      this.props.bookSearchName !== nextProps.bookSearchName ||
      (this.props.idCurrentBook !== nextProps.idCurrentBook || (this.props.idCurrentBook === nextProps.idCurrentBook && this.props.stars !== nextProps.stars)))
  }

  _handlerChangeTitle (event) {
    const data = {
      name: event.target.value,
      description: this.props.description
    }
    if (data.name.length > 0) {
      this.props.editCollection(this.props.idCurrentCollection, data)
    } else {
      Alert.warning('Title should have one and more letters', {
        timeout: 'none'
      })
    }
  }

  _handlerChangeDescription (event) {
    const data = {
      name: this.props.title,
      description: event.target.value
    }

    if (data.description.length > 0) {
      this.props.editCollection(this.props.idCurrentCollection, data)
    } else {
      Alert.warning('Description should have one and more letters', {
        timeout: 'none'
      })
    }
  }

  render () {
    const { idCurrentCollection, title, description, currentBookList, isCollectionOpen, searchBook, addBook, bookList, bookSearchName, removeBook, rateBook, idCurrentBook, stars } = this.props
    const collectionContentClass = (isCollectionOpen) ? 'collectionContent active' : 'collectionContent'
    const bookToAdd = bookList.filter((book) => (
      book.name.toLowerCase() === bookSearchName
    ))
    const classDeleteFromCollection = 'delete'

    return (
      <section className = { collectionContentClass }>
        <div className = 'folder'>
          <ContentEditable className = 'title'
            disabled = { false }
            html = { title }
            onChange = { this.handlerChangeTitle }
          />
          <ContentEditable className = 'description'
            disabled = { false }
            html = { description }
            onChange = { this.handlerChangeDescription }
          />
          <BookList
            bookList = { currentBookList }
            classDeleteFromCollection = { classDeleteFromCollection }
            removeBook = { removeBook }
            idCurrentCollection = { idCurrentCollection }
            rateBook = { rateBook }
            stars = { stars }
            idCurrentBook = { idCurrentBook }
          />
          <Searcher searchBook = { searchBook } addBook = { addBook } id = { idCurrentCollection } bookList = { bookToAdd } currentBooks = { currentBookList } />
        </div>
      </section>
    )
  }
}
