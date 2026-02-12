import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleSidebar }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-light p-3 d-flex justify-content-between align-items-center">
      <button
        className="btn btn-outline-primary d-md-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <div className="fw-semibold">Agent Dashboard</div>

      <div>
        {user?.name}{" "}
        <button
          className="btn btn-sm btn-danger ms-2"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
