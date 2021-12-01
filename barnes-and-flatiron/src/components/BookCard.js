const BookCard = ({handleDelete, addToCart, book:{title,author,price=10,genre,imageUrl="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}) =>{
  const handleLike = e => {
    e.target.innerText = (e.target.innerText === "♡") ? "♥" : "♡"
  }
    return(
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p onClick={handleLike}>&#9825;</p>
            <img  alt="book logo" style={{width:"200px"}}src={imageUrl} /><br />
            <button>Edit</button>
            <button onClick={() => addToCart({title,author,price,genre,imageUrl})}>Add to Cart</button>
            <button onClick={() => handleDelete({title,author,price,genre,imageUrl})}>Delete</button>
        </div>
    )
}

export default BookCard

