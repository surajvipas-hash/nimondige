import { Link } from "react-router-dom";

export default function DeviceSummary() {
  return (
    <div>
      <h3 className="mb-4">Device Summary</h3>
      <p>Device details...</p>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}
