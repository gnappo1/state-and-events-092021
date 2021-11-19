const Form = ({handleSubmit}) =>{
    return(
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
            <label>Title</label>
            <input type="text" />
            <label>Author</label>
            <input type="text" />
            <label>Genre</label>
            <input type="text" />
            <label>Price</label>
            <input type="number" step="0.01" /><br />
            <input type="reset" />
            <input type="submit" value="Create" />
        </form>
    )
}
export default Form