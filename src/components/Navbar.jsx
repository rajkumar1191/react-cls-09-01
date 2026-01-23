import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/home">Home</NavLink>
      <Link to="/home">Home</Link>
      <NavLink to="/add">Add Illustration</NavLink>
      <NavLink to="/illustrations">Illustration List</NavLink>
    </nav>
  );
};

export default Navbar;
