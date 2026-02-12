import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-light p-3 d-flex justify-content-between">
      <div>Home</div>
      <div>
        {user?.name} |{" "}
        <button
          className="btn btn-sm btn-danger"
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
