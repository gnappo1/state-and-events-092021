import {useRef, useState} from 'react'

export default function Test() {
    const [countOne, setCountOne] = useState(0)
    let countTwo = 0
    const countThree = useRef(0)
    
    const handleClick = e => {
        if (e.target.name === "upvote") {
            countTwo++
            countThree.current += 1
            setCountOne(count => count + 1)
            console.log(countTwo, countThree.current)
        } else {
            countTwo--
            countThree.current -= 1
            setCountOne(count => count - 1)
            console.log(countTwo, countThree.current)
        }
    }

    console.log("I just re-rendered")

    return (
        <div>
            <h1>Test</h1>
            <p>Count One is: {countOne} - Count Two is: {countTwo} - Count Three is: {countThree.current} </p>
            <button name="upvote" onClick={handleClick}>Upvote</button>
            <button name="downvote" onClick={handleClick}>Downvote</button>
        </div>
    )
}
