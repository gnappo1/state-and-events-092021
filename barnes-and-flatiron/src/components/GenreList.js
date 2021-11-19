import { genres } from "../data/data"
import Genre from './Genre'

const GenreList = ({genreList, handleClick}) =>{
    return(
        <div style={{display:"flex"}}>
            {genreList.map(genre => <Genre handleClick={handleClick} genre={genre} />)}
        </div>
    )
}
export default GenreList