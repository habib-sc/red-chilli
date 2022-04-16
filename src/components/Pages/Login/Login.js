import React from 'react';
import logo from '../../../assets/images/red-chilli-logo.png';

const Login = () => {
    return (
        <div>
            <div className='text-center mt-3'>
                <img src={logo} style={{ 'height': '80px' }} alt="" />
                <hr style={{ 'width': '250px' }} className='mx-auto mt-1' />
                <h2>Login</h2>
            </div>
            <form className='d-flex flex-column w-25 mx-auto mt-4'>
                <input type="email" name='email' placeholder='Email' className='rc-form-input my-2 border-0 rounded-3' />
                <input type="password" name='password' placeholder='Password' className='rc-form-input my-2 border-0 rounded-3' />
                <button className='btn btn-danger mb-5 mt-2'>Login</button>
            </form>
        </div>
    );
};

export default Login;