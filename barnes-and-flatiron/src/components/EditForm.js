import {useForm} from 'react-hook-form'
import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'


const EditForm = () => {
    const { bookId } = useParams();
    const [book, setBook] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const history = useHistory();
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(()=>{
        fetch(`http://localhost:3000/books/${bookId}`)
        .then(res => res.json())
        .then(bookData => {
            setBook(bookData)
            setIsLoaded(true)
        })
    },[bookId])

    
    const onUpdate = (data, e) => {
        e.preventDefault()
        e.target.reset()
        fetch(`http://localhost:3000/books/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(() => history.push(`/books/${bookId}`))
    }
    if (!isLoaded) {
        return <h1>Loading...</h1>
    }
    const {id, title, author, price, genre, imageUrl} = book

    return(
        <form onSubmit={handleSubmit(onUpdate)} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input type="text" name="title" defaultValue={title} {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}
            <label>Author</label>
            <input type="text" name="author" defaultValue={author} {...register("author", { required: true })} />
      {errors.author && <span>This field is required</span>}
            <label>Genre</label>
            <select name="genre" id="genres" defaultValue={genre} {...register("genre", { required: true })}>
                <option value=""></option>
                <option value="horror">Horror</option>
                <option value="fantasy">Fantasy</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="non-fiction">Non-fiction</option>
                <option value="technical">Technical</option>
                <option value="fiction">Fiction</option>
                <option value="mistery">Mistery</option>
                <option value="biography">Biography</option>
            </select>
      {errors.genre && <span>This field is required</span>}
            <label>Image Url</label>
            <input type="text" name="imageUrl" defaultValue={imageUrl} {...register("imageUrl", { required: true })} />
      {errors.imageUrl && <span>This field is required</span>}
            <label>Price</label>
            <input type="text" name="price" defaultValue={price} {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}
            <input type="reset" />
            <input type="submit" value="Update" />
            <button onClick={() => history.goBack()}>Back</button>
        </form>
    )
}
export default EditForm