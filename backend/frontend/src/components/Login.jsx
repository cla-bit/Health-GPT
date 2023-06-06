import axios from "axios";
import { useState } from "react";
import { useGlobalContext } from "../context";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [nextPage, setNextPage] = useState(false);
  const [showError, setShowError] = useState(false);
  const { setRegister, email, setEmail, password, setPassword } =
    useGlobalContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setNextPage(false);
      // setShowError(true);
      console.log("Cannot be empty");
    } else {
      setNextPage(true);
      try {
        const login = {
          email: email,
          password: password,
        };
        console.log(login);
        const { data } = await axios.post(
          "/api/login/",
          login
        );
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      // setShowError(false);
    }
  };

  return (
    <>
      <main className="login">
        <form onSubmit={handleSubmit}>
          {showError && <p>Field cannot be empty</p>}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>forget password?</p>
          {nextPage ? (
            <Link to="/dashboard">
              <button type="submit" className="login-btn">
                Sign in
              </button>
            </Link>
          ) : (
            <button type="submit" className="login-btn">
              Sign in
            </button>
          )}
          <span>
            Don't have an account?{" "}
            <span onClick={() => setRegister(true)}>Sign up</span>
          </span>
        </form>
      </main>
    </>
  );
};

export default Login;
