import React, { useState } from "react";
import { API } from "../../API/Api";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data, "lll");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   console.log(data,"kkkk")

    const { data } = API.post("/auth/login", data);
  };
  return (
    <div className="login">
      <div className="form_str">
        <h2>Login Form</h2>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="username"
            onChange={handleChange}
            value={data.username}
          />
          <input
            type="text"
            placeholder=" password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
