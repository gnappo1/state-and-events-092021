import {useState} from 'react'
import EditForm from './EditForm';

const BookCard = ({handleDelete, addToCart, book:{title,author,price=10,genre,imageUrl="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"}}) =>{
  const [editView, setEditView] = useState(false);

  const handleLike = e => {
    e.target.innerText = (e.target.innerText === "♡") ? "♥" : "♡"
  }

  const formatView = () => {
    if (editView) {
      const book = {title,author,price,genre,imageUrl}
      return <EditForm book={book} />
    } else {
      return (
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>${price}</p>
            <p>{genre}</p>
            <p onClick={handleLike}>&#9825;</p>
            <img  alt="book logo" style={{width:"200px"}}src={imageUrl} /><br />
            <button onClick={() => setEditView(bool => !bool)}>Edit</button>
            <button onClick={() => addToCart({title,author,price,genre,imageUrl})}>Add to Cart</button>
            <button onClick={() => handleDelete({title,author,price,genre,imageUrl})}>Delete</button>
        </div>
      )
    }
  }
    return(
        {formatView}
    )
}

export default BookCard

