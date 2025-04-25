// Home.js
import React, { useContext } from 'react';
import FormComponent from '../ReusableComponents/FormComponent/FormComponent';
import { LoginFormControls } from '../config/Config';
import { ResuableContext } from '../Context/Context';

const Home = () => {
    const { loginFormData, setLoginFormData, handleSubmit } = useContext(ResuableContext);

    return (
        <div>
            <h1>Creating reusable Component in react</h1>
            <FormComponent
                fromControls={LoginFormControls}
                formData={loginFormData}
                setFormData={setLoginFormData}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default Home;
