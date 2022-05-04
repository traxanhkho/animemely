import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Joi from "joi-browser";
import Heading from "../common/Heading";
import Form from "../common/Form";
import { toast } from "react-toastify";
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

  doSubmit = async () => {
    const { username, password } = this.state.data;
    console.log(username, password);
    try {
      const { login } = useAuth();
      await login(username, password);
      // this.props.history("/");
      // window.location.reload();
      toast.success("Bạn đã đăng nhập thành công.");
    } catch (error) {
      this.setState({
        errors: { username: "Email hoặc Mật khẩu không hợp lệ." },
      });
    }
  };

  render() {
    return (
      <div className="login-section">
        <Heading name="đăng nhập thành viên" />
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username", "Email của bạn")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Đăng nhập", "Đăng ký", "/register")}
        </form>
      </div>
    );
  }
}
export default (props) => <LoginForm history={useNavigate()} />;
