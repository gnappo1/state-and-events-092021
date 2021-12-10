import Genre from './Genre'

const GenreList = ({genresList=[], handleClick}) =>{
    return(
        <div style={{display:"flex"}}>
            {genresList.map((genre, index) => <Genre key={index} handleClick={handleClick} genre={genre} />)}
        </div>
    )
}
export default GenreList