import React from 'react'

const Props = ({ details }) => {
    const { title, rating, isCool, actors } = details;

    return (
        <div>
            <h3>Title: {title}</h3>
            <p>Rating: {rating}</p>
            <p>Available: {isCool ? "Yes" : "No"}</p>
            <ul>
                {actors.map((actor, index) => (
                    <li key={index}>Actor Name: {actor.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Props;
