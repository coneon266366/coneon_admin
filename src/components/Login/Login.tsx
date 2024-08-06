import React from "react";
import "./Login.css";
import logo from "../../assets/coneonlogo.svg";
import openEye from "../../assets/loginImages/visibility.svg";
interface FormStates {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}

interface LoginProps {
  formStates: FormStates;
  errors: Errors;
  showPassword: boolean;
  toggleShowPassword: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const {
    formStates,
    errors,
    showPassword,
    toggleShowPassword,
    handleChange,
    handleSubmit,
  } = props;

  return (
    <div className="login-container">
      <img src={logo} alt="coneon logo" className="login-logo" />
      <h1 className="login-head">Sign in</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-div">
          <label className="login-label">
            Email ID <span style={{ color: "#EA0202" }}>*</span>
          </label>
          <input
            type="text"
            className="login-input"
            placeholder="Enter Email ID"
            name="email"
            onChange={handleChange}
            value={formStates.email}
          />
          <img
            src={openEye}
            alt="visible-password"
            className={errors.email ? "login-inputIconA" : "login-inputIcon"}
          />
          <p className="error-text">{errors.email}</p>
        </div>
        <div className="login-div">
          <label className="login-label">
            Password <span style={{ color: "#EA0202" }}>*</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="login-input"
            placeholder="Enter Password"
            name="password"
            value={formStates.password}
            onChange={handleChange}
          />
          <img
            src={showPassword ? openEye : openEye}
            alt="visible-password"
            className={
              errors.password ? "login-inputIcon2" : "login-inputIcon1"
            }
            onClick={() => toggleShowPassword()}
          />
          <p className="error-text">{errors.password}</p>
          <p className="login-forgot">Forgot Password?</p>
        </div>

        <button type="submit" className="login-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
