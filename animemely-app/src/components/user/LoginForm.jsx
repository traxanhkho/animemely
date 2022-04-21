import React, { useState } from "react";
import Joi  from "joi-browser";
import Heading from "../common/Heading";
import Form from "../common/Form";
import { login } from "../../services/fakeAuthService";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/userForm.css";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
      const { username , password } = this.state ; 
      login(username,password) ; 
  };

  render() {
    return (
      <div className="login-section">
        <Heading name="đăng nhập thành viên" />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Đăng nhập", "Đăng ký", "/register")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
