import { genres } from "../data/data"
import Genre from './Genre'
const GenreList = ({genreList}) =>{
    return(
        <div style={{display:"flex"}}>
            {genreList.map(genre => <Genre genre={genre} />)}
        </div>
    )
}
export default GenreList