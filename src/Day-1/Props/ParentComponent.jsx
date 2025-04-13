import React from 'react'
import ChildComponent from './ChildComponent';
import ConditionalComponent from '../ConditionalRendering/ConditionalComponent';

const ParentComponent = () => {
    const products = ["product-1", "product-2", "product-3"];
    return (
        <div>
            <h1>ParentComponent</h1>
            <ChildComponent Products={products} />
            <ConditionalComponent />
        </div>
    )
}

export default ParentComponent