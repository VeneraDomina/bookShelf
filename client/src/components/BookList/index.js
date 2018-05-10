import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import Book from '../Book'

export default class BookList extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    idCurrentBook: PropTypes.string,
    idCurrentCollection: PropTypes.string,
    stars: PropTypes.number,
    rateBook: PropTypes.func.isRequired,
    removeBook: PropTypes.func,
    deleteBook: PropTypes.func,
    classDeleteFromCollection: PropTypes.string,
    classDeleteFromBookList: PropTypes.string
  }

  shouldComponentUpdate (nextProps) {
    if (this.props.bookList.length !== nextProps.bookList.length) {
      return true
    }
    if (this.props.idCurrentBook !== nextProps.idCurrentBook || (this.props.idCurrentBook === nextProps.idCurrentBook && this.props.stars !== nextProps.stars)) {
      return true
    }
    return false
  }

  render () {
    const { bookList, classDeleteFromCollection, removeBook, idCurrentCollection, rateBook, idCurrentBook, stars, classDeleteFromBookList, deleteBook } = this.props
    const bookListForRender = bookList.map(({ _id, name, author, rating, price }) => (
      <li key = { _id }>
        <Book
          id = { _id }
          name = { name }
          author = { author }
          rating = { rating }
          price = { price }
          stars = { stars }
          idCurrentCollection = { idCurrentCollection }
          idCurrentBook = { idCurrentBook }
          removeBook = { removeBook }
          deleteBook = { deleteBook }
          rateBook = { rateBook }
          classDeleteFromCollection = { classDeleteFromCollection }
          classDeleteFromBookList = { classDeleteFromBookList }
        />
      </li>
    ))

    return (
      <ul className = 'bookListNav'>
        { bookListForRender }
      </ul>
    )
  }
}
