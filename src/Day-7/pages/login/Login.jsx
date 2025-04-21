import React, { useContext } from 'react'
import CommonForm from '../../components/CommonForm'
import { loginFormControls } from '../../config/Config'
import { AuthContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { loginFormData, setLoginFormData, loginWithFirebase, user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginWithFirebase()
      .then((result) => {
        if (result) {
          navigate("/profile")
        }
      })
      .catch(error => console.log(error))
  }

  if (loading) return <h1>Loading....</h1>
  if (user) return navigate("/profile");

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='px-6 py-5 bg-white shadow-md rounded-lg w-96' >
        <h1 className='text-xl mb-10 font-bold'>Welcome Back!</h1>
        <p className='text-lg mb-5 font-semibold'>Login page</p>
        <CommonForm
          formControls={loginFormControls}
          formData={loginFormData}
          setFormData={setLoginFormData}
          buttonText={'Login'}
          onSubmit={handleLoginSubmit}
        />
      </div>
    </div>
  )
}

export default Login