import BookCard from "./BookCard"
import Genre from "./GenreList";

const BookContainer = (props) => {
    return(
        <>
            {/* <Genre genreList={props.genreList}/> */}
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {props.bookList.map(bookObj => <BookCard key={bookObj.id} book={bookObj}/>)}
            </div>
        </>
    )
}

export default BookContainer