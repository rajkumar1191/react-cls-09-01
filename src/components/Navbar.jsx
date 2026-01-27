import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../context/Auth";

const Navbar = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <NavLink to="/home">Home</NavLink>
      <Link to="/home">Home</Link>
      <NavLink to="/add">Add Illustration</NavLink>
      <NavLink to="/illustrations">Illustration List</NavLink>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
