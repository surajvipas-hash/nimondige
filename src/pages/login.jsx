import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [usercode, setUsercode] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (login(usercode, password)) {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="login-card shadow-lg">
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">PigmyLite</h3>
          <p className="text-muted mb-0">Agent Portal</p>
        </div>

        <div className="mb-3">
          <label className="form-label">User Code</label>
          <input
            type="text"
            className="form-control modern-input"
            placeholder="Enter user code"
            value={usercode}
            onChange={(e) => setUsercode(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control modern-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <div className="alert alert-danger py-2">{error}</div>}

        <button
          className="btn btn-primary w-100 modern-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <div className="text-center mt-3 small text-muted">
          © 2026 PigmyLite Banking System
        </div>
      </div>
    </div>
  );
}
