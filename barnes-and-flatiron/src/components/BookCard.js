const BookCard = ({book:{title,author,price=10,genre,imageUrl="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}) =>{
//TODO: control like with state
    return(
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p>&#9825;</p>
            <img  alt="book logo" style={{width:"200px"}}src={imageUrl} />
        </div>
    )
}

export default BookCard

