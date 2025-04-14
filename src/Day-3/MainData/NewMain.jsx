import React from 'react'
import ChangeNameContext from '../Context/ChangeNameContext'
import Child from '../Child/Child'

const NewMain = () => {
    return (
        <ChangeNameContext>
            <Child />
        </ChangeNameContext>
    )
}

export default NewMain