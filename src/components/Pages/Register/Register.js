import React, { useState } from 'react';
import logo from '../../../assets/images/red-chilli-logo.png';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    // User Information hook 
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
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
        setUserInfo({ ...userInfo, email: e.target.value });
    }
    const handlePassword = e => {
        setUserInfo({ ...userInfo, password: e.target.value });
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
                <input onChange={handlePhone} type="phone" name='phone' placeholder='Phone' className='rc-form-input my-2 border-0 rounded-3' />
                <input onChange={handlePassword} type="password" name='password' placeholder='Password' className='rc-form-input my-2 border-0 rounded-3' />
                <input onChange={handleConfirmPassword} type="password" name='confirm-password' placeholder='Confirm Password' className='rc-form-input my-2 border-0 rounded-3' />
                <button onChange={handleName} className='btn btn-danger mb-5 mt-2'>Sign Up</button>
            </form>
        </div>
    );
};

export default Register;