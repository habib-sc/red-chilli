import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import logo from '../../../assets/images/red-chilli-logo.png';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {
    // User Information hook 
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
        hookError: ''
    });

    // Create user hook - React Firebase Hooks 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Handling Inputs 
    const handleName = e => {
        setUserInfo({ ...userInfo, name: e.target.value });
    }
    const handlePhone = e => {
        setUserInfo({ ...userInfo, phone: e.target.value });
    }
    const handleEmail = e => {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const validEmail = emailRegEx.test(e.target.value);
        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({...errors, emailError: ''})
        }else{
            setErrors({...errors, emailError: 'Invalid Email!'});
        }
    }

    const handlePassword = e => {
        const passwordRegEx = /.{6,}/;
        const validPassword = passwordRegEx.test(e.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setErrors({...errors, passwordError: ''});
        }else{
            setErrors({...errors, passwordError: 'At least 6 character required!'})
        }
    }
    const handleConfirmPassword = e => {
        setUserInfo({ ...userInfo, password: e.target.value });
    }
    // Handling Sign up form on submit 
    const handleSignUpForm = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        if (user) {
            console.log('successfully registered');
        }
    }

    return (
        <div>
            <div className='text-center mt-3'>
                <img src={logo} style={{ 'height': '80px' }} alt="" />
                <hr style={{ 'width': '250px' }} className='mx-auto mt-1' />
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSignUpForm} className='d-flex flex-column w-25 mx-auto mt-4'>
                <input onChange={handleName} type="text" name='name' placeholder='Name' className='rc-form-input my-2 border-0 rounded-3' />
                <input onChange={handleEmail} type="email" name='email' placeholder='Email' className='rc-form-input my-2 border-0 rounded-3' />
                {errors.emailError && 
                <p className='rc-input-error'>{errors.emailError}</p>
                }
                <input onChange={handlePhone} type="phone" name='phone' placeholder='Phone' className='rc-form-input my-2 border-0 rounded-3' />
                <input onChange={handlePassword} type="password" name='password' placeholder='Password' className='rc-form-input my-2 border-0 rounded-3' />
                {errors.passwordError && 
                <p className='rc-input-error'>{errors.passwordError}</p>
                }
                <input onChange={handleConfirmPassword} type="password" name='confirm-password' placeholder='Confirm Password' className='rc-form-input my-2 border-0 rounded-3' />
                <button onChange={handleName} className='btn btn-danger mb-5 mt-2'>Sign Up</button>
            </form>
        </div>
    );
};

export default Register;