import { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'

export default class Form extends PureComponent {

    state = {
        title: "",
        author: "",
        genre: "",
        price: "",
        imageUrl: "",
        submitted: false
    }
    
    handleSubmit = e => {
        e.preventDefault()
        const newBook = {...this.state, liked: false, review: []}
        fetch(`http://localhost:3000/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        this.props.handleNewBook(newBook)
        this.setState({
            title: "",
            author: "",
            genre: "",
            price: "",
            imageUrl: "",
            submitted: true
        })
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        })
    }
    
    render() {
        if (this.state.submitted) return <Redirect to="/books"/>
        const {title, author, genre, price, imageUrl} = this.state
        return(
            <form onSubmit={this.handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
                <label>Title</label>
                <input onChange={this.handleChange} type="text" value={title} name="title"  />
                <label>Author</label>
                <input onChange={this.handleChange} type="text" name="author" value={author} />
                <label>Genre</label>
                <select onChange={this.handleChange} name="genre" id="genres" value={genre}>
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
                <label>Image Url</label>
                <input onChange={this.handleChange} type="text" name="imageUrl" value={imageUrl} />
                <label>Price</label>
                <input onChange={this.handleChange} type="text" name="price" value={price}/>
                <input type="reset" />
                <input type="submit" value="Create" />
            </form>
        )
    }
}


// const Form = ({handleNewBook}) => {
//     const { register, handleSubmit, formState: { errors } } = useForm();

//     const onSubmit = (data, e) => {
//         e.preventDefault()
//         e.target.reset()
//         handleNewBook({...data, liked: false, reviews: []})
//     }

    // return(
    //     <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
    //         <label>Title</label>
    //         <input type="text" name="title" {...register("title", { required: true })} />
    //   {errors.title && <span>This field is required</span>}
    //         <label>Author</label>
    //         <input type="text" name="author" {...register("author", { required: true })} />
    //   {errors.author && <span>This field is required</span>}
    //         <label>Genre</label>
    //         <select name="genre" id="genres" {...register("genre", { required: true })}>
    //             <option value=""></option>
    //             <option value="horror">Horror</option>
    //             <option value="fantasy">Fantasy</option>
    //             <option value="sci-fi">Sci-fi</option>
    //             <option value="non-fiction">Non-fiction</option>
    //             <option value="technical">Technical</option>
    //             <option value="fiction">Fiction</option>
    //             <option value="mistery">Mistery</option>
    //             <option value="biography">Biography</option>
    //         </select>
    //   {errors.genre && <span>This field is required</span>}
    //         <label>Image Url</label>
    //         <input type="text" name="imageUrl" {...register("imageUrl", { required: true })} />
    //   {errors.imageUrl && <span>This field is required</span>}
    //         <label>Price</label>
    //         <input type="text" name="price" {...register("price", { required: true })} />
    //   {errors.price && <span>This field is required</span>}
    //         <input type="reset" />
    //         <input type="submit" value="Create" />
    //     </form>
    // )
// }
// export default Form