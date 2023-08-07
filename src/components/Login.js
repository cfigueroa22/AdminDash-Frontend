import React, { useState } from "react";
import hrLogo from "../assets/hr-logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "admin@gmail.com",
    password: "password",
  });

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleEmail = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const handlePassword = (e) => {
    setValues({ ...values, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios

      .post("/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          // eslint-disable-next-line no-undef
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-background h-screen flex items-center justify-center">
      <div className="bg-divColor h-fit rounded-md p-4">
        <div className="flex items-center justify-center pb-6 gap-2">
          <img src={hrLogo} alt="hr-logo" className="w-24" />
          <h1 className="text-5xl font-overpass font-black">EmployLink</h1>
        </div>

        <h1 className="flex justify-center pb-6 text-4xl font-quicksand font-black">
          Admin Login
        </h1>
        <form className="flex flex-col">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            className="p-2 rounded placeholder:text-xl "
            onChange={handleEmail}
            value={values.email}
            onClick={handleEmail}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            autoComplete="off"
            className="p-2 rounded placeholder:text-xl mt-4"
            onChange={handlePassword}
            value={values.password}
            onClick={handlePassword}
          />
          <button
            type="submit"
            className="w-full bg-primary font-quicksand font-bold py-2 rounded mt-4 text-2xl hover:bg-accent"
            onClick={handleSubmit}
          >
            Login (Demo)
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
