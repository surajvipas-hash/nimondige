import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h3 className="mb-4">Dashboard</h3>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h6>No. of active accounts</h6>
            <h4>1</h4>
            <Link to="/accounts">More info →</Link>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h6>No of receipts</h6>
            <h4>3</h4>
            <Link to="/receipts">More info →</Link>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h6>Total Received Amount</h6>
            <h4>600</h4>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow-sm">
            <h6>Devicewise Summary</h6>
            <Link to="/device">More info →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
