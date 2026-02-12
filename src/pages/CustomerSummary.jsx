import { Link } from "react-router-dom";

export default function CustomerSummary() {
  return (
    <div>
      <h3 className="mb-4">Customer Summary</h3>
      <p>Customer details...</p>
      <Link to="/accounts">Back to accounts</Link>
    </div>
  );
}
