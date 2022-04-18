import React from "react";
import { Link } from "react-router-dom" ; 

function renderInput(name, label, placeholder, type = "text") {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
}

function renderButton(name, link , path) {
  return (
    <div className="form-submit">
      <button type="submit" className="btn">
        {name}
      </button>
      <Link to={path} type="submit" className="btn link">
        {link}
      </Link>
    </div>
  );
}

export default {
  renderInput,
  renderButton,
};
