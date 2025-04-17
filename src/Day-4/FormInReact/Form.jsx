import React from 'react'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const handleFormSubmit = (formData) => {
    console.log(formData);
    reset();
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='mb-20'>Form in React</h1>
      <form className='flex flex-col justify-center items-center bg-gray-200 w-[500px] h-[300px] rounded-lg shadow-lg' onSubmit={handleSubmit(handleFormSubmit)}>
        <h1 className='text-3xl mb-10'>Login/register</h1>
        <div className='w-[320px] mb-5 text-center'>

          <div className='flex justify-between '>
            <label>Email/Username: </label>
            <input
              {...register("email", { required: true })}
              type="text"
              name='email'
              className='border rounded-lg bg-gray-50'
            />
          </div>
          {
            errors.email && errors.email.type === "required"
              ? <p className="text-red-600 text-bold my-1">Email is Required</p>
              : null
          }
        </div>
        <div className='w-[320px] text-center mb-5'>
          <div className='flex justify-between'>
            <label>Password: </label>
            <input
              {...register("password", { required: true, minLength: 8 })}
              type="password"
              name="password"
              className='border rounded-lg bg-gray-50'
            />
          </div>
          {
            errors.password && errors.password.type === "required"
              ? <p className="text-red-600 text-bold my-1">Password is Required</p>
              : null
          }
          {
            errors.password && errors.password.type === "minLength"
              ? <p className="text-red-600 text-bold my-1">Password must at least 8 character, Enter new Password</p>
              : null
          }
        </div>
        <div className='w-[320px]'>
          <button

            type='submit'
            className='border rounded-lg bg-gray-50 p-2 w-full'
          >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form