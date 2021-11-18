import React from 'react'

const Genre = ({genre}) => {
    return (
        <div style={{margin:"auto"}}>
           - {genre.toUpperCase()} -
        </div>
    )
}

export default Genre;
