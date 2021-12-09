import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'

const BookDetails = ({addToCart, handleDelete}) => {
    const { bookId } = useParams();
    const history = useHistory();
    const [book, setBook] = useState(null)
    const [isLoaded, setIsLoaded] = useState(null)
    
    useEffect(()=>{
        fetch(`http://localhost:3000/books/${bookId}`)
        .then(res => res.json())
        .then(bookData => {
            setBook(bookData)
            setIsLoaded(true)
        })
    },[bookId])

    const handleLike = e => {
        e.target.innerText = (e.target.innerText === "♡") ? "♥" : "♡"
    }

    if(!isLoaded) return <h2>Loading...</h2>
    
    const {id, title, author, price, genre, imageUrl="https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"} = book
    
    return(
        <div style={{border:"solid", width:"300px", margin:"auto"}}>
        <h3>{title}</h3>
        <p>{author}</p>
        <p>${price}</p>
        <p>{genre}</p>
        <p onClick={handleLike}>&#9825;</p>
        <img  alt="book logo" style={{width:"200px"}}src={imageUrl} /><br />
        <button onClick={() => history.push(`/books/${id}/edit`)}>Edit</button>
        <button onClick={() => addToCart({title,author,price,genre,imageUrl})}>Add to Cart</button>
        <button onClick={() => handleDelete({title,author,price,genre,imageUrl})}>Delete</button>
        </div> 
    )
}

export default BookDetails;