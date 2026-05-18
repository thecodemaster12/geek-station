import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import ButtonForm from "../../components/ButtonForm";
import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Username validation
    if (formData.username.trim() === "") {
      newErrors.username = "Username is required";
    }

    // Email validation
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    // Password validation
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) return;

    console.log("Form Submitted", formData);
  };
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-xl font-bold">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" action="">
          <InputForm
            onChange={handleChange}
            value={formData.username}
            label="Username"
            type="username"
            name="username"
          />
          {errors.username && <p className="text-red-500">{errors.username}</p>}
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
            <ButtonForm label="Register" />
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="hover:text-cyan-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
