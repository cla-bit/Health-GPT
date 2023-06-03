import { useGlobalContext } from "../context";
import "../styles/register.css";

const Signup = () => {
  const { setRegister } = useGlobalContext();

  return (
    <>
      <main className="signup">
        <form>
          <input type="text" placeholder="Username" />
          <br />
          <input type="text" placeholder="Email address" />
          <br />
          <select name="group" id="group">
            <option value="">Select Blood Group</option>
            <option value="">A+</option>
            <option value="">A-</option>
            <option value="">B+</option>
            <option value="">B-</option>
            <option value="">O+</option>
            <option value="">O-</option>
            <option value="">AB+</option>
            <option value="">AB-</option>
          </select>
          <br />
          <select name="geno" id="geno">
            <option value="">Select Genotype</option>
            <option value="">AA</option>
            <option value="">AS</option>
            <option value="">SS</option>
          </select>
          <br />
          <input type="password" placeholder="password" />
          <br />
          <input type="password" placeholder="Confirm password" />
          <button type="submit" className="signup-btn">
            Sign up
          </button>
          <span>
            Have an account already?
            <span onClick={() => setRegister(false)}>Sign in</span>
          </span>
        </form>
      </main>
    </>
  );
};

export default Signup;
