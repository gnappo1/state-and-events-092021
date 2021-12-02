import {useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {
        if (!!isRunning) {
            const id = setInterval(() => {
                setCount(num => num + 1)
            }, 1000)
    
            return () => clearInterval(id)
        }
    }, [isRunning])
    
    const handleClick = e => {
        setIsRunning(bool => !bool)
        e.target.innerText = (e.target.innerText === "Pause") ? "Resume" : "Pause"
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Pause</button>
        </>
    )
}

export default Counter;