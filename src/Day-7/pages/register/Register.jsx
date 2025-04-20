import React, { useContext } from 'react'
import CommonForm from '../../components/CommonForm'
import { AuthContext } from '../../context/Context'
import { registerFormControls } from '../../config/Config';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { registerFormData, setRegisterFormData, RegisterWithFirebase, user, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleRegisterFormEvent(e) {
    e.preventDefault();
    RegisterWithFirebase()
      .then(result => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: registerFormData.name
          })
        }
        navigate('/profile')
      })
      .catch(error => console.log(error))
  }

  if (loading) return <h1>Loading.....</h1>

  if (user) navigate("/profile")

  console.log("Register Form Data", registerFormData)
  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md w-96'>
        <div className='text-center'>
          <h1 className='text-xl'>Register</h1>
        </div>
        <div>
          <CommonForm
            formControls={registerFormControls}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={handleRegisterFormEvent}
            buttonText={"Save"}
          />
        </div>
      </div>
    </div>
  )
}

export default Register