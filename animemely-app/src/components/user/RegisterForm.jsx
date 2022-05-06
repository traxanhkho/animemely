import React from "react";
import { useNavigate } from "react-router-dom";
import form from "../common/Form";
import Joi from "joi-browser";
import Heading from "../common/Heading";
import AnimeContext  from "../../context/AnimeContext";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/userForm.css";

class RegisterForm extends form {
  state = {
    data: { nickname: "", username: "", password: "" },
    errors: {},
  };

  static contextType = AnimeContext;

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().required().label("Password"),
    nickname: Joi.string().required().label("Nickname"),
  };

  doSubmit = async () => {
    const { username, password } = this.state.data;
    const { signup } = this.context;
    try {
      await signup(username, password);
      this.props.history("/");
      window.location.reload();
    } catch (error) {
        this.setState({
          errors: { nickname: "Lỗi tạo tài khoản vui lòng kiểm tra lại." },
        });
    }
  };

  render() {
    return (
      <div className="register-section">
        <Heading name="đăng ký thành viên" />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("nickname", "Biệt danh", "Biệt danh bạn muốn đặt")}
          {this.renderInput("username", "Email", "Nhập email của bạn", "email")}
          {this.renderInput("password", "Mật khẩu", "password", "password")}
          {this.renderButton("Đăng ký", "Đăng nhập", "/login")}
        </form>
      </div>
    );
  }
}

export default (props) => <RegisterForm history={useNavigate()} />;
