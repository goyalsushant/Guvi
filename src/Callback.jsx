import { useCallback, useState } from "react"

const ChildComponent = ({onClick}) => {
    console.log('Child Component Rendered')
    return (
        <button onClick={onClick}>Click Me!</button>
    )
}

const Callback = () => {

    const [count, setCount] = useState(0)
    const [test, setTest] = useState(1)

    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [test])

    console.log('Callback Component rendered')
    return (
        <>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </>
    )
}

export default Callback