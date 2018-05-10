import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Alert from 'react-s-alert'

import { fetchCollections, deleteCollection } from '../actions/fetchCollectionActions'
import { openCollection, hideCollection, editCollection, addBook, removeBook, openPopup, createCollection } from '../actions/showCollectionAction'
import { fetchBooks, rateBook, deleteBook, openPopupBook, createBook } from '../actions/fetchBookActions'
import { searchBook } from '../actions/searchAction'
import Header from '../components/Header'
import CollectionList from '../components/CollectionList'
import CollectionContent from '../components/CollectionContent'
import BookContent from '../components/BookContent'
import Footer from '../components/Footer'
import './App.css'
import './react-s-alert.css'
import './alert-stackslide.css'

class App extends Component {
  static propTypes = {
    bookList: PropTypes.array.isRequired,
    idCurrentBook: PropTypes.string,
    stars: PropTypes.number,
    bookSearchName: PropTypes.string.isRequired,
    idCurrentCollection: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    currentBookList: PropTypes.array,
    isCollectionOpen: PropTypes.bool.isRequired,
    collectionList: PropTypes.array.isRequired,
    fetchCollections: PropTypes.func.isRequired,
    fetchBooks: PropTypes.func.isRequired,
    openCollection: PropTypes.func.isRequired,
    hideCollection: PropTypes.func.isRequired,
    searchBook: PropTypes.func.isRequired,
    editCollection: PropTypes.func.isRequired,
    addBook: PropTypes.func.isRequired,
    removeBook: PropTypes.func.isRequired,
    rateBook: PropTypes.func.isRequired,
    isPopupOpen: PropTypes.bool.isRequired,
    openPopup: PropTypes.func.isRequired,
    createCollection: PropTypes.func.isRequired,
    deleteCollection: PropTypes.func.isRequired,
    deleteBook: PropTypes.func.isRequired,
    openPopupBook: PropTypes.func.isRequired,
    isPopupBookOpen: PropTypes.bool.isRequired,
    createBook: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.fetchCollections()
    this.props.fetchBooks()
  }

  render () {
    const { bookList, idCurrentBook, stars, bookSearchName, idCurrentCollection, title, description, currentBookList, isCollectionOpen, collectionList, openCollection, hideCollection, searchBook, editCollection, addBook, removeBook, rateBook, isPopupOpen, openPopup, createCollection, deleteCollection, deleteBook, openPopupBook, isPopupBookOpen, createBook } = this.props
    return (
      <section>
        <Header/>
        <CollectionList
          collectionList = { collectionList }
          openCollection = { openCollection }
          idCurrentCollection = { idCurrentCollection }
          hideCollection = { hideCollection }
          createCollection = { createCollection }
          isPopupOpen = { isPopupOpen }
          openPopup = { openPopup }
          deleteCollection = { deleteCollection }
        />
        <CollectionContent
          idCurrentCollection = { idCurrentCollection }
          title = { title }
          description = { description }
          currentBookList = { currentBookList }
          isCollectionOpen = { isCollectionOpen }
          searchBook = { searchBook }
          editCollection = { editCollection }
          addBook = { addBook }
          bookList = { bookList }
          bookSearchName = { bookSearchName }
          removeBook = { removeBook }
          rateBook = { rateBook }
          stars = { stars }
          idCurrentBook = { idCurrentBook }
        />
        <BookContent
          bookList = { bookList }
          bookSearchName = { bookSearchName }
          rateBook = { rateBook }
          stars = { stars }
          idCurrentBook = { idCurrentBook }
          isCollectionOpen = { isCollectionOpen }
          deleteBook = { deleteBook }
          openPopupBook = { openPopupBook }
          isPopupBookOpen = { isPopupBookOpen }
          createBook = { createBook }
        />
        <Footer/>
        <Alert stack = {{limit: 2}} effect = 'stackslide' position = 'top'/>
      </section>
    )
  }
}

const mapStatetoProps = (state) => ({
  bookList: state.bookReducer.bookList,
  idCurrentBook: state.bookReducer.idCurrentBook,
  stars: state.bookReducer.stars,
  bookSearchName: state.searchReducer.bookName,
  idCurrentCollection: state.currentCollectionReducer.currentId,
  title: state.currentCollectionReducer.title,
  description: state.currentCollectionReducer.description,
  currentBookList: state.currentCollectionReducer.currentBookList,
  isCollectionOpen: state.currentCollectionReducer.isCollectionOpen,
  collectionList: state.collectionReducer.collectionList,
  isPopupOpen: state.currentCollectionReducer.isPopupOpen,
  isPopupBookOpen: state.bookReducer.isPopupOpen
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => {
    dispatch(fetchCollections())
  },
  fetchBooks: () => {
    dispatch(fetchBooks())
  },
  openCollection: (id) => {
    dispatch(openCollection(id))
  },
  hideCollection: () => {
    dispatch(hideCollection())
  },
  searchBook: (bookName) => {
    dispatch(searchBook(bookName))
  },
  editCollection: (id, data) => {
    dispatch(editCollection(id, data))
  },
  addBook: (id, book) => {
    dispatch(addBook(id, book))
  },
  removeBook: (idCollection, idBook) => {
    dispatch(removeBook(idCollection, idBook))
  },
  rateBook: (id, book) => {
    dispatch(rateBook(id, book))
  },
  openPopup: (isOpen) => {
    dispatch(openPopup(isOpen))
  },
  createCollection: (collection) => {
    dispatch(createCollection(collection))
  },
  deleteCollection: (id) => {
    dispatch(deleteCollection(id))
  },
  deleteBook: (id) => {
    dispatch(deleteBook(id))
  },
  openPopupBook: (isOpen) => {
    dispatch(openPopupBook(isOpen))
  },
  createBook: (book) => {
    dispatch(createBook(book))
  }
})

export default connect(mapStatetoProps, mapDispatchToProps)(App)
