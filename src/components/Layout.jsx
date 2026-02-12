import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="d-flex">
      <Sidebar show={showSidebar} setShow={setShowSidebar} />
      <div className="flex-grow-1">
        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />
        <div className="p-3 p-md-4">{children}</div>
      </div>
    </div>
  );
}
