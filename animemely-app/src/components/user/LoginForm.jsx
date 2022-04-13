import React from 'react';
import Heading from '../common/Heading' ; 
import Form from "../common/Form"  ; 

function Login(props) {
    return (
        <div className='login-section'>
            <Heading name="đăng nhập thành viên"/>
            <Form />
        </div>
    );
}

export default Login;