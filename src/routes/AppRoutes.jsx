import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Accounts from "../pages/Accounts";
import CustomerSummary from "../pages/CustomerSummary";
import ReceiptDetails from "../pages/ReceiptDetails";
import DeviceSummary from "../pages/DeviceSummary";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/accounts"
        element={
          <ProtectedRoute>
            <Layout>
              <Accounts />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/customer"
        element={
          <ProtectedRoute>
            <Layout>
              <CustomerSummary />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/receipts"
        element={
          <ProtectedRoute>
            <Layout>
              <ReceiptDetails />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/device"
        element={
          <ProtectedRoute>
            <Layout>
              <DeviceSummary />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Layout>
              <Profile />
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
