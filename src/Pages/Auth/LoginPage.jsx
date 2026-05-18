import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    // Password validation
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }
    else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    // Return true if valid
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const userLogin = async (formData) => {
    const users = await axios.get('http://localhost:3001/users/').then(res => res.data)
    const user = users.find((user) => user.email === formData.email && user.password === formData.password)
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
      window.location.href = '/'
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;
    
    userLogin(formData)
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <InputForm
            onChange={handleChange}
            value={formData.email}
            label="Email"
            type="email"
            name="email"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <InputForm
            onChange={handleChange}
            onCha
            value={formData.password}
            label="Password"
            type="password"
            name="password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}

          <div className="mt-4 md:mt-10 flex flex-col gap-4">
            <ButtonForm label="Login" />
            <p className="text-center">
              Don't have an account?{" "}
              <Link to="/register" className="hover:text-cyan-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
