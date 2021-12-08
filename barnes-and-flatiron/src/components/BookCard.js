import {Link} from 'react-router-dom'
const BookCard = ({handleDelete, addToCart, book:{id, title,author,price=10,genre,imageUrl="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}) =>{

  return(
    <div style={{border:"solid", width:"300px", margin:"auto"}}>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>${price}</p>
      <p>{genre}</p>
      <Link to={`/books/${id}`}>Details</Link>
    </div> 
  )
}

export default BookCard

