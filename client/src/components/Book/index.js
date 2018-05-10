import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

import book from '../../theme/assets/bookFigure.png'
import './styles.css'

export default class Book extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    rating: PropTypes.number,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    id: PropTypes.string,
    idCurrentBook: PropTypes.string,
    idCurrentCollection: PropTypes.string,
    rateBook: PropTypes.func.isRequired,
    removeBook: PropTypes.func,
    deleteBook: PropTypes.func,
    classDeleteFromBookList: PropTypes.string,
    classDeleteFromCollection: PropTypes.string
  }

  constructor () {
    super()
    this.removeBook = this._removeBook.bind(this)
    this.onStarClick = this._onStarClick.bind(this)
    this.deleteBook = this._deleteBook.bind(this)
  }

  static defaultProps = {
    rating: 0
  }

  shouldComponentUpdate (nextProps) {
    return this.props.id === nextProps.idCurrentBook
  }

  _removeBook () {
    this.props.removeBook(this.props.idCurrentCollection, this.props.id)
  }

  _onStarClick (nextValue) {
    const book = {
      name: this.props.name,
      author: this.props.author,
      price: this.props.price,
      rating: nextValue
    }
    this.props.rateBook(this.props.id, book)
  }

  _deleteBook () {
    this.props.deleteBook(this.props.id)
  }

  render () {
    const { id, name, author, rating, price, classDeleteFromCollection, idCurrentBook, stars, classDeleteFromBookList } = this.props
    const ratingBook = (id === idCurrentBook) ? stars : rating

    return (
      <figure>
        <img src = { book } alt = 'BookImage' className = 'bookImage'/>
        <figcaption>{ name }</figcaption>
        <small>by { author }</small>
        <p className = 'price'>Price: <b>{ price } грн.</b></p>
        <div className = 'star-rating'>
          <StarRatingComponent
            name="rating"
            starCount = { 5 }
            value = { ratingBook }
            onStarClick = { this.onStarClick }
          />
        </div>
        <i className = {`fa fa-close ${classDeleteFromCollection}`} title = 'delete' onClick = { this.removeBook }/>
        <div className = {`hideImage ${classDeleteFromBookList}`}>
          <button className = 'btn btn-deleteBook' onClick = { this.deleteBook }>Delete book</button>
        </div>
      </figure>
    )
  }
}
