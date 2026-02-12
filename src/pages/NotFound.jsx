import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h4 className="mb-3">Page Not Found</h4>
      <p className="text-muted">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </button>
    </div>
  );
}
