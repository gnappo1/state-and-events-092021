import BookContainer from "./BookContainer";
import Header from "./Header";
import GenreList from "./GenreList";
import Form from "./Form";
import EditForm from "./EditForm";
import BookDetails from "./BookDetails";
import Navbar from "./Navbar";
import Counter from "./Counter";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { PureComponent } from 'react'

export default class App extends PureComponent {

  state = {
    cart: [],
    booksList: [],
    filteredList: [],
    genresList: []
  }

  fetchBooks = () => {
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(books => {
      this.setState({filteredList: books})
      this.setState({booksList: books})
    })
    .catch(err => alert(err))
  }

  fetchGenres = () => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:3000/genres")
        const genres = await resp.json()
        this.setState({genresList: genres})
      } catch (error) {
        const err = new Error(error)
        alert(err)
      }
    }
    fetchData()
  }

  componentDidMount() {
    this.fetchBooks()
    this.fetchGenres()
  }

  handleClick = e => {
    const selectedGenre = e.target.textContent.replaceAll("-", "").replaceAll(" ", "").toLowerCase()
    const filteredBooks = this.state.booksList.filter(book => book.genre === selectedGenre)
    this.setState({filteredList: filteredBooks})
  }

  handleSubmit = book => {
    const bookWithId = {...book, id: this.state.booksList.slice(-1)[0].id + 1}
    this.setState(currentState => {
      return {booksList: [...currentState.booksList, bookWithId]}
    })
  }

  handleDelete = ({title}) => {
    const newList = this.state.filteredList.filter(book => book.title !== title)
    this.setState({filteredList: newList})
    this.setState({booksList: newList})
  }

  addToCart = (book) => {
    if (!this.state.cart.find(el => el.title === book.title)) {
      this.setState(currentState => {
        return {cart: [...currentState.cart, book]}
      })
      alert(`${book.title} was successfully added to the cart!`)
    }
  }
  render() {
    
    return (
      <div className="App" style={{textAlign:"center"}}>
        <Router>
          <Navbar />
          <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
          <Switch>
  
            <Route path="/books/new">
              <Form handleNewBook={this.handleSubmit}/>
            </Route>
  
  
            <Route path="/books/:bookId/edit">
              <EditForm booksList={this.state.booksList} />
            </Route>
            
            <Route path="/books/:bookId">
              <BookDetails booksList={this.state.booksList} handleDelete={this.handleDelete} addToCart={this.addToCart}/>
            </Route>
  
            <Route path="/books">
              <div style={{display:"flex"}}>
                <GenreList handleClick={this.handleClick} genreList={this.state.genresList} />
              </div>
              <BookContainer handleDelete={this.handleDelete} addToCart={this.addToCart} booksList={this.state.filteredList} genresList={this.state.genresList}/>
            </Route>
  
            <Route path="/cart">
              <BookContainer handleDelete={this.handleDelete} addToCart={this.addToCart} booksList={this.state.cart} genreList={this.state.genresList}/> 
            </Route>
            
            <Route exact path="/">
              <Counter />
            </Route>
  
            <Route path="*">
              <h3>404 Page Not Found</h3>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}