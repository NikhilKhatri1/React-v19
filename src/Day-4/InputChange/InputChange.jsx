import React, { useState } from 'react'

const InputChange = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    /*
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    */
    const handleOnChange = (e) => {
        console.log(e.target.name);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleInputValue = (e) => {
        e.preventDefault();
        console.log("Name = ", formData.name, "\nEmail = ", formData.email, "\nPassword = ", formData.password);
    }
    console.log(formData);

    return (
        <div className='text-center'>
            <h1 className='text-4xl mb-5'>Changing Input</h1>
            <form onSubmit={handleInputValue} className='flex items-center flex-col justify-center'>

                <div className='flex justify-center'>
                    <label htmlFor={name}>Name: </label>
                    <input
                        type="text"
                        placeholder='Your Name'
                        value={formData.name}
                        name='name'
                        id='name'
                        className='border rounded-sm mb-2 ms-2'
                        onChange={handleOnChange}
                    />
                </div>
                <div className='flex justify-center'>
                    <label>Email: </label>
                    <input
                        type="email"
                        placeholder='Your Email'
                        value={formData.email}
                        name='email'
                        id="email"
                        className='border rounded-sm mb-2 ms-2'
                        onChange={handleOnChange}
                    />
                </div>
                <div className='flex justify-center'>
                    <label htmlFor={password}>Password:</label>
                    <input
                        type="password"
                        placeholder='Your password'
                        value={formData.password}
                        name='password'
                        id='password'
                        className='border rounded-sm mb-2 ms-2'
                        onChange={handleOnChange}
                    />
                </div>
                <button
                    className='border-1 p-2 rounded-lg outline-none'
                    type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default InputChange