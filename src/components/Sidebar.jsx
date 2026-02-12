import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ width: "250px", minHeight: "100vh" }}>
      <h5>Agent</h5>
      <hr />
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/accounts">Manage Account</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/profile">User Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/device">Device Summary</Link>
        </li>
      </ul>
    </div>
  );
}
