import { useState } from "react"

export const App = () => {
    const [ count, setCounter ] = useState(0);
    const [ values, setValues ] = useState([])

    const handleClick = () => {
        setCounter(count + 1)
        setValues(values.concat(count))
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick}>
                Press button
            </button>
            {count}
        </div>
    )
};