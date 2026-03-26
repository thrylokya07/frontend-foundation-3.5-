import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h2>Creator Platform</h2>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Header;