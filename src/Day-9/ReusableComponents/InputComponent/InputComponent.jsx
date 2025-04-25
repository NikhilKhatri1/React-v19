import React from 'react'

const InputComponent = ({ type, name, value, onChange, required, className, placeholder }) => {
  return (
    <input
      type={type || 'text'}
      name={name}
      placeholder={placeholder || "Enter text"}
      value={value}
      className={className || "border-1 border-gray-400 p-2 rounded-lg"}
      onChange={onChange}
      required={required || false}
    />
  )
}

export default InputComponent