import React, { useState } from "react";
import { API } from "../../API/Api";
import "./Register.css";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
    number: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data, "lll");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { Data } = API.post("/auth/register", data);
    console.log(Data, "dddd");
  };
  return (
    <div className="register">
      <div className="form_str">
        <h2>Register Form</h2>
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder=" password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="number"
            name="number"
            value={data.number}
            onChange={handleChange}
          />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
