import { Link } from "react-router-dom";
import { FaUsers, FaReceipt, FaMoneyBillWave, FaMobileAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <h3 className="mb-4 fw-bold">Dashboard</h3>

      <div className="row g-4">

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card card-1 text-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Active Accounts</h6>
                <h3>1</h3>
              </div>
              <FaUsers size={35} />
            </div>
            <Link to="/accounts" className="text-white small">
              View Details →
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card card-2 text-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Total Receipts</h6>
                <h3>3</h3>
              </div>
              <FaReceipt size={35} />
            </div>
            <Link to="/receipts" className="text-white small">
              View Details →
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card card-3 text-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Total Collection</h6>
                <h3>₹600</h3>
              </div>
              <FaMoneyBillWave size={35} />
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card card-4 text-white">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h6>Device Summary</h6>
                <h3>1 Device</h3>
              </div>
              <FaMobileAlt size={35} />
            </div>
            <Link to="/device" className="text-white small">
              View Details →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
