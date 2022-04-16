import React from 'react';
import logo from '../../../assets/images/red-chilli-logo.png';
import './Register.css';

const Register = () => {
    return (
        <div>
            <div className='text-center mt-3'>
                <img src={logo} style={{ 'height': '80px' }} alt="" />
                <hr style={{ 'width': '250px' }} className='mx-auto mt-1' />
                <h2>Sign Up</h2>
            </div>
            <form className='d-flex flex-column w-25 mx-auto mt-4'>
                <input type="text" name='name' placeholder='Name' className='rc-form-input my-2 border-0 rounded-3' />
                <input type="email" name='email' placeholder='Email' className='rc-form-input my-2 border-0 rounded-3' />
                <input type="phone" name='phone' placeholder='Phone' className='rc-form-input my-2 border-0 rounded-3' />
                <input type="password" name='password' placeholder='Password' className='rc-form-input my-2 border-0 rounded-3' />
                <input type="password" name='confirm-password' placeholder='Confirm Password' className='rc-form-input my-2 border-0 rounded-3' />
                <button className='btn btn-danger mb-5 mt-2'>Sign Up</button>
            </form>
        </div>
    );
};

export default Register;