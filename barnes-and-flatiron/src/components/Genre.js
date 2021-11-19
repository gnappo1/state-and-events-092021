import React from 'react'

const Genre = ({genre, handleClick}) => {
    return (
        <div onClick={handleClick} style={{margin:"auto"}}>
           - {genre.toUpperCase()} -
        </div>
    )
}

export default Genre;
