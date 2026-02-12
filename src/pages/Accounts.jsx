import { Link } from "react-router-dom";

export default function Accounts() {
  return (
    <div>
      <h3 className="mb-4">Accounts</h3>
      <p>List of accounts will appear here.</p>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}
