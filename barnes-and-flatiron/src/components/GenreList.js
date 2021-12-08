import { genres } from "../data/data"
import Genre from './Genre'

const GenreList = ({genreList, handleClick}) =>{
    return(
        <div style={{display:"flex"}}>
            {genreList.map((genre, index) => <Genre key={index} handleClick={handleClick} genre={genre} />)}
        </div>
    )
}
export default GenreList