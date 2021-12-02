import BookContainer from "./BookContainer";
import Header from "./Header";
import GenreList from "./GenreList";
import Form from "./Form";
import Counter from "./Counter";
import {useState, useEffect} from 'react'

const App = () => {
  const [cart, setCart] = useState([])
  const [cartView, setcartView] = useState(false)
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
      <button onClick={() => setcartView(bool => !bool)}>Cart</button>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Counter />
      <Form handleNewBook={handleSubmit}/>
      <div style={{display:"flex"}}>
        <GenreList handleClick={handleClick} genreList={genresList} />
      </div>
      {!!cartView ? (
        <BookContainer handleDelete={handleDelete} addToCart={addToCart} booksList={cart} genreList={genresList}/> 
      ) : (
        <BookContainer handleDelete={handleDelete} addToCart={addToCart} booksList={filteredList} genreList={genresList}/>
      )}
    </div>
  );
}

export default App;


