import { Link } from "react-router-dom";

export default function Sidebar({ show, setShow }) {
  return (
    <>
      <div
        className={`sidebar bg-dark text-white p-3 ${
          show ? "sidebar-show" : ""
        }`}
      >
        <h5>Agent Panel</h5>
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard" onClick={() => setShow(false)}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/accounts" onClick={() => setShow(false)}>
              Accounts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/receipts" onClick={() => setShow(false)}>
              Receipts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/device" onClick={() => setShow(false)}>
              Device Summary
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/profile" onClick={() => setShow(false)}>
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {show && (
        <div
          className="sidebar-backdrop"
          onClick={() => setShow(false)}
        ></div>
      )}
    </>
  );
}
