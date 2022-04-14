import React from 'react';
import form from '../common/Form';
import Heading from '../common/Heading';
import "bootstrap/dist/css/bootstrap.css";
import "../../style/userForm.css";

function RegisterForm(props) {
    return (
        <div className='register-section'>
            <Heading name="đăng ký thành viên"/>
            <form>
                {form.renderInput("name" , "Biệt danh" ,"Biệt danh bạn muốn đặt")}
                {form.renderInput("email" , "Email" , "Nhập email của bạn" , "email")}
                {form.renderInput("password","Mật khẩu" , "Nhập mật khẩu của bạn" , "password")}
                {form.renderInput("password","Nhập lại mật khẩu" , "Nhập lại mật khẩu của bạn" , "password")}
                {form.renderButton("Đăng ký","Đăng nhập")}
            </form>
        </div>
    );
}

export default RegisterForm;