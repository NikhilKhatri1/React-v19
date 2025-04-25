import React from 'react'
import InputComponent from '../InputComponent/InputComponent';

const formElementTypes = {
    INPUT: "input",
    SELECT: "select",
    BUTTON: "button",
}

const FormComponent = ({ fromControls = [], formData, setFormData, onSubmit }) => {
    const renderFormElement = (getCurrentFormElement, getFormData) => {
        let element = null;
        switch (getCurrentFormElement.type) {
            case formElementTypes.INPUT:
                element = (
                    <InputComponent
                        type={getCurrentFormElement.type}
                        name={getCurrentFormElement.name}
                        value={getFormData[getCurrentFormElement.name]}
                        placeholder={getCurrentFormElement.placeholder}
                        required={getCurrentFormElement.required}
                        onChange={(e) => setFormData({
                            ...formData,
                            [getCurrentFormElement.name]: e.target.value
                        })}
                    />
                )
                break;
            default:
                element = (
                    <InputComponent
                        type={getCurrentFormElement.type}
                        name={getCurrentFormElement.name}
                        value={getFormData[getCurrentFormElement.name]}
                        placeholder={getCurrentFormElement.placeholder}
                        required={getCurrentFormElement.required}
                        onChange={(e) => setFormData({
                            ...formData,
                            [getCurrentFormElement.name]: e.target.value
                        })}
                    />
                )
                break;
        }
        return element
    }
    return (
        <form onSubmit={onSubmit}>
            {
                fromControls.map((getCurrentFormElement) => renderFormElement(getCurrentFormElement, formData))
            }
            <button type='button' className='p-2 border bg-gray-100 rounded-lg'>Submit</button>
        </form>
    )
}

export default FormComponent