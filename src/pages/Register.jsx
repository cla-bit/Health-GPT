import Login from "../components/Login";
import Signup from "../components/Signup";
import { useGlobalContext } from "../context";

const Register = () => {
  const { register } = useGlobalContext();

  return <>{register ? <Signup /> : <Login />}</>;
};

export default Register;
