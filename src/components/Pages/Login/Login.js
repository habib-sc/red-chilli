import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/images/red-chilli-logo.png';
import auth from '../../../firebase.init';

const Login = () => {

    // User Information hook 
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setUserInfo({ ...userInfo, email: e.target.value });
    }
    const handlePassword = e => {
        setUserInfo({ ...userInfo, password: e.target.value });
    }

    // Handling Sign up form on submit 
    const handleLoginForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password);
        navigate('/');
    }

    return (
        <div>
            <div className='text-center mt-3'>
                <img src={logo} style={{ 'height': '80px' }} alt="" />
                <hr style={{ 'width': '250px' }} className='mx-auto mt-1' />
                <h2>Login</h2>
            </div>
            <form onSubmit={handleLoginForm} className='d-flex flex-column w-25 mx-auto mt-4'>
                <input onChange={handleEmail} type="email" name='email' placeholder='Email' className='rc-form-input my-2 border-0 rounded-3' />
                <input onChange={handlePassword} type="password" name='password' placeholder='Password' className='rc-form-input my-2 border-0 rounded-3' />
                <button className='btn btn-danger mb-5 mt-2'>Login</button>
            </form>
        </div>
    );
};

export default Login;