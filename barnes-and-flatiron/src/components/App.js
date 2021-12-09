import BookContainer from "./BookContainer";
import Header from "./Header";
import GenreList from "./GenreList";
import Form from "./Form";
import EditForm from "./EditForm";
import BookDetails from "./BookDetails";
import Navbar from "./Navbar";
import Counter from "./Counter";
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
  const [cart, setCart] = useState([])
  const [booksList, setBooks] = useState([])
  const [filteredList, filterBooks] = useState(booksList)
  const [genresList, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/books")
    .then(resp => resp.json())
    .then(books => {
      setBooks(books)
      filterBooks(books)
    })
    .catch(err => alert(err))
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const resp = await fetch("http://localhost:3000/genres")
        const genres = await resp.json()
        setGenres(genres)
      } catch (error) {
        const err = new Error(error)
        alert(err)
      }
    }
    fetchData();
  }, [])

  const handleClick = e => {
    const selectedGenre = e.target.textContent.replaceAll("-", "").replaceAll(" ", "").toLowerCase()
    const filteredBooks = booksList.filter(book => book.genre === selectedGenre)
    filterBooks(filteredBooks)
  }

  const handleSubmit = book => {
    const bookWithId = {...book, id: booksList.slice(-1)[0].id + 1}
    setBooks(currentBooks => [...currentBooks, bookWithId])
  }

  const handleDelete = ({title}) => {
    const newList = filteredList.filter(book => book.title !== title)
    filterBooks(newList)
    setBooks(newList)
  }

  const addToCart = (book) => {
    if (!cart.find(el => el.title === book.title)) {
      setCart(currentCart => [...currentCart, book])
      alert(`${book.title} was successfully added to the cart!`)
    }
  }

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Router>
        <Navbar />
        <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
        <Switch>

          <Route path="/books/new">
            <Form handleNewBook={handleSubmit}/>
          </Route>


          <Route path="/books/:bookId/edit">
            <EditForm booksList={booksList} />
          </Route>
          
          <Route path="/books/:bookId">
            <BookDetails booksList={booksList} handleDelete={handleDelete} addToCart={addToCart}/>
          </Route>

          <Route path="/books">
            <div style={{display:"flex"}}>
              <GenreList handleClick={handleClick} genreList={genresList} />
            </div>
            <BookContainer handleDelete={handleDelete} addToCart={addToCart} booksList={filteredList} genreList={genresList}/>
          </Route>

          <Route path="/cart">
            <BookContainer handleDelete={handleDelete} addToCart={addToCart} booksList={cart} genreList={genresList}/> 
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

export default App;


