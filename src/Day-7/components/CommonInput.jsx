import React from 'react'

const CommonInput = ({ type, value, placeholder, className, onChange, name }) => {

    return (
        <input
            type={type || "text"}
            placeholder={placeholder || "Enter Text"}
            value={value}
            name={name}
            onChange={onChange}
            className={className || "border rounded-lg p-1 w-full block text-black mt-2"}
            required
        />
    )
}

export default CommonInput