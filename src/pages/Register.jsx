import Login from "../components/Login";
import Signup from "../components/Signup";
import { useGlobalContext } from "../context";

const Register = () => {
  const { register, setRegister } = useGlobalContext();

  return (
    <>
      {register ? <Signup /> : <Login />}
      {/* {register && } */}
    </>
  );
};

export default Register;
