import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      navigate("./login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="bg-slate-100 text-black">
      {/* component */}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-slate-800 text-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form method="POST" onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 text-slate-800"
                name="firstName"
                required
                onChange={handleChange}
                value={data.firstName}
                placeholder="Full Name"
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4  text-slate-800"
                name="lastName"
                required
                onChange={handleChange}
                value={data.lastName}
                placeholder="last Name"
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 text-slate-800"
                name="email"
                onChange={handleChange}
                value={data.email}
                placeholder="Email"
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 text-slate-800"
                name="password"
                onChange={handleChange}
                value={data.password}
                placeholder="Password"
              />
              {error && <div>{error} </div>}
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green text-white hover:bg-white-dark focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <Link
              className="no-underline border-b border-blue text-blue"
              to={"./login"}
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
