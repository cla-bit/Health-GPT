import "../styles/disease.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main className="error">
        <img
          className="pulse"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
          alt="error-page"
        />
        <h2> Oops! This page does not exist</h2>
        <Link to="/">
          <button>Go Home</button>
        </Link>
      </main>
    </>
  );
};

export default Error;
