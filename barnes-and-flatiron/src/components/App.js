import BookContainer from "./BookContainer";
import Header from "./Header";
import GenreList from "./GenreList";
import Form from "./Form";
import {books, genres} from "../data/data.js"
import {useState} from 'react'

const App = () => {
//TODO: filter out books based on genre
  const [booksList, setBooks] = useState(books)
  const handleClick = e => {
    const selectedGenre = e.target.textContent.replaceAll("-", "").replaceAll(" ", "").toLowerCase()
    const filteredBooks = books.filter(book => book.genre === selectedGenre)
    setBooks(filteredBooks)
  }

  const handleSubmit = book => {
    const bookWithId = {...book, id: books.slice(-1)[0].id + 1}
    setBooks(currentBooks => [...currentBooks, bookWithId])
  }

  return (
    <div className="App" style={{textAlign:"center"}}>
      <Header storeName="Barnes and Flatiron" slogan="Live Love Code Bake Repeat"/>
      <Form handleNewBook={handleSubmit}/>
      <div style={{display:"flex"}}>
        <GenreList handleClick={handleClick} genreList={genres} />
      </div>
      <BookContainer bookList={booksList} genreList={genres}/>
    </div>
  );
}

export default App;


