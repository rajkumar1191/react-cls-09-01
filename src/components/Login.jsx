import { useNavigate } from "react-router-dom";
import useAuth from "../context/Auth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/Home");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
