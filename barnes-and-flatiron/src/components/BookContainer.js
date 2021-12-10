import BookCard from "./BookCard"

const BookContainer = ({handleDelete, booksList, addToCart}) => {
    return(
        <>
            <div style={{display:"flex", flexWrap:"wrap"}}>
            {booksList.map(bookObj => <BookCard key={bookObj.id} handleDelete={handleDelete} addToCart={addToCart} book={bookObj}/>)}
            </div>
        </>
    )
}

export default BookContainer