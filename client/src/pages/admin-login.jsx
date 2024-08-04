import React, { useState } from "react";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../store/authcontext";


const Adminlogin = () => {
  const navigate = useNavigate();
  const { setLogged } = useContext(AuthContext);
  const [log, setLog] = useState({
    email: "",
    password: ""
  });

  const [login] = useState({
    email: "r@gmail.com",
    password: "1234"
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLog((prevLog) => ({
      ...prevLog,
      [name]: value,
    }));
  };

  const loginAdmin = (e) => {
    e.preventDefault();
    if (login.email === log.email && login.password === log.password) {
      toast.success("logged in successfully")
      setLogged(true);
      navigate("/admin");
    } else {
      toast.error("Invalid email or password!!");
    }
  };

  return (
    <div className="bg-red-50 w-[50%] p-6 m-auto mt-20 flex justify-center items-center">
      <form onSubmit={loginAdmin} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="email"
            name="email"
            className="form-input sm:text-22px mb-7 px-4 py-2 w-full"
            placeholder="Enter email"
            required
            autoComplete="off"
            value={log.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            className="form-input sm:text-22px mb-7 px-4 py-2 w-full"
            placeholder="Enter password"
            required
            autoComplete="off"
            value={log.password}
            onChange={handleInput}
          />
        </div>
        <div className="text-center">
          <button className="px-6 py-2 rounded-md bg-red-700 text-white">Login to Admin Panel</button>
        </div>
      </form>
    </div>
  );
};

export default Adminlogin;
