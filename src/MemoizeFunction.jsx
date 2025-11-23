import { useMemo, useState } from "react"

const MemoizeFunction = () => {
    const [count, setCount] = useState(0)
    const [test, setTest] = useState(1)

    const result = useMemo(() => {
        console.log('computation in progress')
        for (let i = 0; i < 5000000; i++) {
            return count * 2
        }
    }, [test])
    // const result = expensiveCalculation()
    return (
        <>
            <p>Result: {result}</p>

            <button onClick={() => setCount(count + 1)}>Click Me!</button>
        </>
    )
}

export default MemoizeFunction