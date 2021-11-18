const Form = () =>{
    return(
        <form style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input type="text" />
            <label>Author</label>
            <input type="text" />
            <label>Genre</label>
            <input type="text" />
            <label>Price</label>
            <input type="number" /><br />
            <input type="submit" value="Create" />
        </form>
    )
}
export default Form