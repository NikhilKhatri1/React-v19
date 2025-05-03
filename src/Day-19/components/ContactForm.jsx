import React, { useEffect, useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        id: 0,
        name: "",
        email: "",
        message: "",
    })
    const [formDataList, setFormDataList] = useState([])
    const handleInputChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...formData, id: Date.now() }
        setFormDataList((prevData) => [...prevData, newData])
        alert("Your Message is Saved");
        setFormData({
            id: 0,
            name: '',
            email: '',
            message: ''
        })
    }
    useEffect(() => {
        localStorage.setItem("contact_Info", JSON.stringify(formDataList))
    }, [formDataList])

    return (
        <div className='flex items-center justify-center h-screen bg-gray-50'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col bg-gray-100 w-100 px-4 py-4 rounded-xl shadow-lg'>
                <h1 className='text-4xl mb-10 font-semibold'>Contact Form</h1>
                <div className='flex justify-between items-center gap-5'>
                    <label>Name:</label>
                    <input
                        onChange={handleInputChange}
                        className='border py-1 px-2 rounded-lg w-full mx-10'
                        value={formData.name}
                        type="text"
                        placeholder='Enter your name'
                        name='name'
                    />
                </div>
                <div className='flex justify-between items-center gap-6.5'>
                    <label>Email:</label>
                    <input
                        onChange={handleInputChange}
                        className='border my-5 py-1 px-2 rounded-lg w-full mx-10'
                        value={formData.email}
                        type="text"
                        placeholder='Enter your email'
                        name='email'
                    />
                </div>
                <div className='flex justify-between items-center mb-5 gap-5'>
                    <label>Message:</label>
                    <textarea
                        onChange={handleInputChange}
                        className='border py-1 px-2 rounded-lg w-full mx-5'
                        value={formData.message}
                        placeholder='Enter your message'
                        name='message'

                    >
                    </textarea>
                </div>

                <button className='w-full border-sky-600 bg-sky-500 py-2 mb-5 rounded-lg' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm