import { useGlobalContext } from "../context";
import "../styles/register.css";
import Header from "./Header"

const Login = () => {
  const { setRegister } = useGlobalContext();
  return (
    <>
      <main className="login">
        <Header header="Sign in"/>
        <form>
          <input type="text" placeholder="Email address" />
          <br />
          <input type="password" placeholder="password" />
          <p>forget password?</p>
          <button type="submit" className="login-btn">
            Sign in
          </button>
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
