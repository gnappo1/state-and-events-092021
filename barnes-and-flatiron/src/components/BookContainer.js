import BookCard from "./BookCard"
import Genre from "./GenreList";

const BookContainer = ({handleDelete, booksList, addToCart}) => {
    return(
        <>
            {/* <Genre genreList={props.genreList}/> */}
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {booksList.map(bookObj => <BookCard key={bookObj.id} handleDelete={handleDelete} addToCart={addToCart} book={bookObj}/>)}
            </div>
        </>
    )
}

export default BookContainer