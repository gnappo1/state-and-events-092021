import React from 'react'

export default function Genre({genre}) {
    return (
        <div style={{margin:"auto"}}>
           - {genre.toUpperCase()} -
        </div>
    )
}
