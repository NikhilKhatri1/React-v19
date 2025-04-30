import React, { useState } from 'react'

const Child = ({ count }) => {
    const [theme, setTheme] = useState(true);
    return (
        <div>
            <h1 data-testid="countValue">{count}</h1>
            <button
                data-testid="themeBtn"
                className='border bg-black py-1 px-4 text-white my-10'
                onClick={() => setTheme(!theme)}
            >Theme
            </button>
            <h1
                data-testid="themeValue"
                className='text-3xl font-bold'
            >{theme ? "true" : "false"}
            </h1>
        </div>
    )
}

export default Child