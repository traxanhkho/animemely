import React from 'react';
import Heading from '../common/Heading' ; 
import form from "../common/Form"  ; 
import "bootstrap/dist/css/bootstrap.css";
import "../../style/userForm.css";

function Login(props) {
    return (
        <div className='login-section'>
            <Heading name="đăng nhập thành viên"/>
            <form>
                {form.renderInput("email" , "Email" , "Nhập email của bạn" , "email")}
                {form.renderInput("password","Password" , "Nhập mật khẩu của bạn" , "password")}
                {form.renderButton("Đăng nhập","Đăng ký")}
            </form>
        </div>
    );
}

export default Login;