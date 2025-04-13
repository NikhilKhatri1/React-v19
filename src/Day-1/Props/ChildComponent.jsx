import React from 'react'
import Button from './Button'

const ChildComponent = ({ Products }) => {
    return (
        <div>
            <h1>ChildComponent</h1>
            {
                Products.map((product, index) => (
                    <div key={index}>
                        <div>{product}</div>
                        <Button />
                    </div>
                ))
            }
        </div>
    )
}

export default ChildComponent