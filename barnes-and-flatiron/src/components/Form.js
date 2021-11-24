import {useState} from 'react'

const Form = ({handleSubmit}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [price, setPrice] = useState("")

    const validateForm = e => {
        e.preventDefault()
        const inputs = [title, author, genre, imageUrl, price]
        const bool = inputs.some(element => element.trim() === "")
        if (!!bool) {
            alert("You must fill out all the input fields!")
        } else {
            const newBook = {title, author, genre, imageUrl, price, liked: false, reviews: []}
            setTitle("")
            setAuthor("")
            setGenre("")
            setImageUrl("")
            setPrice("")
            handleSubmit(newBook)
        }
    }

    return(
        <form onSubmit={validateForm} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input name="title" onChange={e => setTitle(e.target.value)} value={title} type="text" required/>
            <label>Author</label>
            <input name="author" onChange={e => setAuthor(e.target.value)} value={author} type="text" required/>
            <label>Genre</label>
            <input name="genre" onChange={e => setGenre(e.target.value)} value={genre} type="text" required/>
            <label>Image Url</label>
            <input name="imageUrl" onChange={e => setImageUrl(e.target.value)} value={imageUrl} type="text" required/>
            <label>Price</label>
            <input name="price" onChange={e => setPrice(e.target.value)} value={price} type="number" step="0.01" required/><br />
            <input type="reset" />
            <input type="submit" value="Create" />
        </form>
    )
}
export default Form