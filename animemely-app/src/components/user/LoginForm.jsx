import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Joi from "joi-browser";
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
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    const { data } = this.state;
    const success = login(data.username, data.password);
    if (success) {
      toast.success("Đăng nhập thành công.");
      console.log(this.props.history("/"))

    } else {
      toast.error("Tài khoản hoặc mật khẩu đã sai.");
    }
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
export default (props) => (
  <LoginForm history={useNavigate()} />
);

