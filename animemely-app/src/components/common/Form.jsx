import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/userForm.css";

function Form(props) {
  return (
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="Nhập email của bạn"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Mật khẩu
        </label>
        <input
          type="password"
          placeholder="Nhập mật khẩu của bạn"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div className="form-submit">
        <button type="submit" className="btn">
          Đăng nhập
        </button>
        <button type="submit" className="btn register-btn">
          Đăng ký
        </button>
      </div>
    </form>
  );
}

export default Form;
