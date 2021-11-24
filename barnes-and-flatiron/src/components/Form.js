import {useReducer} from 'react'

const initialState = {
    title: "",
    author: "",
    genre: "",
    imageUrl: "",
    price: ""
}

const reducer = (state, {key, value}) => {
    return {
        ...state,
        [key]: value
    }
}

const Form = ({handleSubmit}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const validateForm = e => {
        e.preventDefault()
        const bool = Object.values(state).some(element => element.trim() === "")
        if (!!bool) {
            alert("You must fill out all the input fields!")
        } else {
            const newBook = {...state, liked: false, reviews: []}
            Object.keys(state).forEach(key => dispatch({key, value: ""}))
            handleSubmit(newBook)
        }
    }

    const handleChange = e => {
        dispatch({key: e.target.name, value: e.target.value})
    }

    const {title, author, genre, imageUrl, price} = state

    return(
        <form onSubmit={validateForm} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input name="title" onChange={handleChange} value={title} type="text" required/>
            <label>Author</label>
            <input name="author" onChange={handleChange} value={author} type="text" required/>
            <label>Genre</label>
            <input name="genre" onChange={handleChange} value={genre} type="text" required/>
            <label>Image Url</label>
            <input name="imageUrl" onChange={handleChange} value={imageUrl} type="text" required/>
            <label>Price</label>
            <input name="price" onChange={handleChange} value={price} type="number" step="0.01" required/><br />
            <input type="reset" />
            <input type="submit" value="Create" />
        </form>
    )
}
export default Form