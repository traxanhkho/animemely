import React from "react";

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

function renderButton(name, text) {
  return (
    <div className="form-submit">
      <button type="submit" className="btn">
        {name}
      </button>
      <button type="submit" className="btn register-btn">
        {text}
      </button>
    </div>
  );
}

export default {
  renderInput,
  renderButton,
};
