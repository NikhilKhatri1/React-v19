import React from 'react'

const ConditionalComponent = () => {
    const items = ["item-1", "item-2", "item-3"];

    const flag = false;

    // conditional statement like function
    // const ShowItems = (getFlag) => {
    //     return getFlag ?
    //         (
    //             items.map((item, index) => (
    //                 <div key={index}>{item}</div>
    //             ))
    //         )
    //         :
    //         (
    //             <div>No Item Found</div>
    //         )
    // }

    const ShowItems = flag ? (items.map((item, index) => (<div key={index}>{item}</div>))) : (<div>No Item Found</div>)
    return (
        <div className='border border-gray-950 p-10 '>
            <h1>ConditionalComponent</h1>
            {/* {ShowItems(flag)} */}


            {/* Writting directly inside jsx */}

            {/* {
                flag ?
                    (
                        items.map((item, index) => (
                            <div key={index}>{item}</div>
                        ))
                    )
                    :
                    (
                        <div> Not item Available</div>
                    )
            } */}

            {/* Writing inside variable */}

            {ShowItems}

        </div>
    )
}

export default ConditionalComponent