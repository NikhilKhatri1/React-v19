import React from 'react'
import CommonInput from './CommonInput';

const formElementTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea',
    CHECKBOX: 'checkbox',
    RADIO: 'radio',
    BUTTON: 'button',
}

const CommonForm = ({ formControls = [], buttonText, formData, setFormData, onSubmit }) => {

    function renderFormElement(getCurrentFormControl, getFormData) {
        let element = null;

        switch (getCurrentFormControl.componentType) {
            case formElementTypes.INPUT:
                element = (<CommonInput
                    type={getCurrentFormControl.type}
                    placeholder={getCurrentFormControl.placeholder}
                    value={getFormData[getCurrentFormControl.name]}
                    name={getCurrentFormControl.name}
                    onChange={(e) => setFormData({
                        ...formData,
                        [getCurrentFormControl.name]: e.target.value,

                    })}
                />)
                break;
            default:
                element = (<CommonInput
                    type={getCurrentFormControl.type}
                    placeholder={getCurrentFormControl.placeholder}
                    value={getFormData[getCurrentFormControl.name]}
                    name={getCurrentFormControl.name}
                    onChange={(e) => setFormData({
                        ...formData,
                        [getCurrentFormControl.name]: e.target.value,

                    })}
                />)
                break;
        }
        return element;
    }

    return (
        <form onSubmit={onSubmit}>
            {
                formControls.map((singleFormElement) => renderFormElement(singleFormElement, formData))
            }


            <button className='bg-gray-200 p-2 rounded-lg text-black mt-2 w-full'>{buttonText || 'Submit'}</button>
        </form>
    )
}

export default CommonForm