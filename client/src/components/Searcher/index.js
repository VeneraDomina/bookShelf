import React, { Component } from 'react'
import Alert from 'react-s-alert'

import PropTypes from 'prop-types'
import './styles.css'

export default class Searcher extends Component {
  static propTypes = {
    searchBook: PropTypes.func.isRequired,
    id: PropTypes.string,
    addBook: PropTypes.func.isRequired,
    bookList: PropTypes.array.isRequired,
    currentBooks: PropTypes.array
  }

  constructor () {
    super()
    this.searchBook = this._searchBook.bind(this)
    this.addBookToCollection = this._addBookToCollection.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return false
  }

  _searchBook () {
    this.props.searchBook(this.inputBook.value)
  }

  _addBookToCollection () {
    const book = {
      bookId: '',
      bookData: {
        _id: '',
        name: '',
        author: '',
        rating: null,
        price: null
      }
    }

    let presentBook = false
    if (this.props.bookList.length === 1) {
      for (let book = 0; book < this.props.currentBooks.length; book++) {
        if (this.props.bookList[0]._id === this.props.currentBooks[book]._id) {
          presentBook = true
          break
        }
      }
      book.bookId = this.props.bookList[0]._id
      book.bookData._id = this.props.bookList[0]._id
      book.bookData.name = this.props.bookList[0].name
      book.bookData.author = this.props.bookList[0].author
      book.bookData.rating = this.props.bookList[0].rating
      book.bookData.price = this.props.bookList[0].price

      if (!presentBook) {
        this.props.addBook(this.props.id, book)
      } else {
        Alert.warning('You have this book in your collection', {
          timeout: 5000
        })
      }
    } else {
      Alert.warning('Choose the only one book from the list', {
        timeout: 5000
      })
    }
    this.inputBook.value = ''
    this.props.searchBook(this.inputBook.value)
  }

  render () {
    return (
      <div className = 'searchFolder'>
        <input
          className = 'searchField'
          type = 'search'
          placeholder = 'Search book by name...'
          ref = { (input) => {
            this.inputBook = input
          } }
          onChange = { this.searchBook }
        />
        <button className = 'btn btn-addBook' onClick = { this.addBookToCollection }>Add</button>
      </div>
    )
  }
}
