import {useForm} from 'react-hook-form'

const Form = ({handleNewBook}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault()
        e.target.reset()
        handleNewBook({...data, liked: false, reviews: []})
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input type="text" name="title" {...register("title", { required: true })} />
      {errors.title && <span>This field is required</span>}
            <label>Author</label>
            <input type="text" name="author" {...register("author", { required: true })} />
      {errors.author && <span>This field is required</span>}
            <label>Genre</label>
            <select name="genre" id="genres" {...register("genre", { required: true })}>
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
            <input type="text" name="imageUrl" {...register("imageUrl", { required: true })} />
      {errors.imageUrl && <span>This field is required</span>}
            <label>Price</label>
            <input type="text" name="price" {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}
            <input type="reset" />
            <input type="submit" value="Create" />
        </form>
    )
}
export default Form