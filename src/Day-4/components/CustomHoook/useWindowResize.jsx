import React from 'react'
import { useState } from 'react'

const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })
    return (
        <div></div>
    )
}

export default useWindowResize