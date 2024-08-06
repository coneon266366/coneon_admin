import React, { useState, ChangeEvent, FormEvent } from "react";
import Login from "../../components/Login/Login";
import { postData } from "../../config/config";
import { useNavigate } from "react-router-dom";
import { Home } from "../../Routes/Constants";

interface FormStates {
  email: string;
  password: string;
}

interface Errors {
  email: string;
  password: string;
}

const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const [formStates, setFormStates] = useState<FormStates>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    let error = "";

    switch (name) {
      case "email":
        error =
          value.trim() === ""
            ? "Email is required"
            : !/\S+@\S+\.\S+/.test(value)
            ? "Invalid email address"
            : "";
        break;

      case "password":
        error =
          value.length < 8
            ? "Password must be at least 8 characters long"
            : !/[A-Z]/.test(value)
            ? "Password must contain at least one uppercase letter"
            : !/[a-z]/.test(value)
            ? "Password must contain at least one lowercase letter"
            : !/[0-9]/.test(value)
            ? "Password must contain at least one number"
            : !/[!@#$%^&*]/.test(value)
            ? "Password must contain at least one special character"
            : "";
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    setFormStates((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = formStates;

    const emailError =
      email.trim() === ""
        ? "Email is required"
        : !/\S+@\S+\.\S+/.test(email)
        ? "Invalid email address"
        : "";

    const passwordError =
      password.length < 8
        ? "Password must be at least 8 characters long"
        : !/[A-Z]/.test(password)
        ? "Password must contain at least one uppercase letter"
        : !/[a-z]/.test(password)
        ? "Password must contain at least one lowercase letter"
        : !/[0-9]/.test(password)
        ? "Password must contain at least one number"
        : !/[!@#$%^&*]/.test(password)
        ? "Password must contain at least one special character"
        : "";

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });
    } else {
      await handleLogin();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await postData(
        "login/",
        { email: formStates.email, password: formStates.password },
        {}
      );
      console.log(response);
      localStorage.setItem("isLoggedIn", "1");
      navigate(Home);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Login
      formStates={formStates}
      errors={errors}
      showPassword={showPassword}
      toggleShowPassword={toggleShowPassword}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
    />
  );
};

export default LoginContainer;
