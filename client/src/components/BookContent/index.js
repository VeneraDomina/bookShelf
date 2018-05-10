import React, { Component } from 'react'
import Popup from 'reactjs-popup'
import PropTypes from 'prop-types'

import './styles.css'
import BookList from '../BookList'

export default class BookContent extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    bookSearchName: PropTypes.string.isRequired,
    classDelete: PropTypes.string,
    removeBook: PropTypes.func,
    idCurrentCollection: PropTypes.string,
    rateBook: PropTypes.func.isRequired,
    idCurrentBook: PropTypes.string,
    stars: PropTypes.number,
    isCollectionOpen: PropTypes.bool,
    openPopupBook: PropTypes.func.isRequired,
    isPopupBookOpen: PropTypes.bool.isRequired,
    createBook: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.openPopupBook = this._openPopupBook.bind(this)
    this.handleOutsideClick = this._handleOutsideClick.bind(this)
    this.createBook = this._createBook.bind(this)
  }

  shouldComponentUpdate (nextProps) {
    return (this.props.isCollectionOpen !== nextProps.isCollectionOpen ||
      this.props.isPopupBookOpen !== nextProps.isPopupBookOpen ||
      this.props.bookList.length !== nextProps.bookList.length ||
      this.props.bookSearchName !== nextProps.bookSearchName ||
      ((this.props.idCurrentBook !== nextProps.idCurrentBook) || (this.props.idCurrentBook === nextProps.idCurrentBook && this.props.stars !== nextProps.stars)))
  }

  _openPopupBook () {
    if (!this.props.isPopupBookOpen) {
      document.addEventListener('click', this.handleOutsideClick, false)
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false)
    }

    this.props.openPopupBook(!this.props.isPopupBookOpen)
  }

  _handleOutsideClick (event) {
    if (this.node && this.node.contains(event.target)) {
      return
    }
    this._openPopupBook()
  }

  _createBook (event) {
    event.preventDefault()

    const newBook = {
      name: this.inputName.value,
      author: this.inputAutor.value,
      price: Number(this.inputPrice.value),
      rating: Number(this.inputRating.value)
    }

    this.props.createBook(newBook)
    this._openPopupBook()
  }

  render () {
    const { bookList, bookSearchName, rateBook, idCurrentBook, stars, isCollectionOpen, deleteBook, isPopupBookOpen } = this.props
    const classDeleteFromBookList = 'deleteBook'
    const classBookListColor = (isCollectionOpen) ? 'bookFolder' : 'bookFolder open'
    const contentStyle = {
      'width': '80%',
      'minWidth': '250px',
      'maxWidth': '400px',
      'padding': '30px 20px 10px',
      'alignItems': 'center',
      'textAlign': 'left'
    }
    const filtredBookList = bookList.filter((book) => (
      book.name.toLowerCase().includes(bookSearchName.toLowerCase())
    ))

    return (
      <section className = { classBookListColor }>
        <div className = 'folder'>
          <h2 className = 'bookListTitle'>All books</h2>
          <BookList
            bookList = { filtredBookList }
            rateBook = { rateBook }
            stars = { stars }
            idCurrentBook = { idCurrentBook }
            isCollectionOpen = { isCollectionOpen }
            classDeleteFromBookList = { classDeleteFromBookList }
            deleteBook = { deleteBook }
          />
          <button className = 'btn btn-newBook' onClick = { this.openPopupBook }>Create new book</button>
          <Popup
            className = 'popup popup-collection'
            position = 'bottom center'
            open = { isPopupBookOpen }
            contentStyle = { contentStyle }
            arrowStyle = {{ display: 'none' }}
          >
            <form className = 'popup-form' onSubmit = { this.createBook } ref = { node => { this.node = node }}>
              <div className = 'popupContent'>
                <label htmlFor = 'name'>Name:</label>
                <input type = 'text' name = 'name' placeholder = 'name' required ref = {(input) => { this.inputName = input }}/>
                <label htmlFor = 'author'>Author:</label>
                <input type = 'text' name = 'author' placeholder = 'author' required ref = {(input) => { this.inputAutor = input }}/>
                <label htmlFor = 'price'>Price:</label>
                <input type = 'number' name = 'price' required placeholder = '0' min = '0' ref = {(input) => { this.inputPrice = input }}/>
                <label htmlFor = 'rating'>Rating:</label>
                <input type = 'number' name = 'rating' placeholder = '0' min = '0' max = '5' ref = {(input) => { this.inputRating = input }}/>
              </div>
              <button type = 'submit' className = 'btn btn-newCollection'>Create</button>
            </form>
          </Popup>
        </div>
      </section>
    )
  }
}
