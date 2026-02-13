import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ========== PAGES ========== */
import Login from "../pages/Login";

/* ========== AGENT ========== */
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Accounts from "../pages/Accounts";

/* ========== COMPANY ========== */
import CompanyLayout from "../components/CompanyLayout";
import CompanyDashboard from "../pages/company/CompanyDashboard";
import AgentsList from "../pages/company/AgentsList";
import EditAgent from "../pages/company/EditAgent";
import ActiveAccounts from "../pages/company/ActiveAccounts";
import Reports from "../pages/company/Reports";
import CompanyProfile from "../pages/company/CompanyProfile";

/* NEW PAGES */
import AgentAccounts from "../pages/company/AgentAccounts";
import CustomerSummary from "../pages/company/CustomerSummary";

/* ================= PROTECTED ROUTE ================= */
function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  if (role && user.role !== role) return <Navigate to="/" />;

  return children;
}

/* ================= ROUTES ================= */
export default function AppRoutes() {
  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/" element={<Login />} />

      {/* ================= AGENT ROUTES ================= */}
      <Route
        path="/agent"
        element={
          <ProtectedRoute role="agent">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="accounts" element={<Accounts />} />
      </Route>

      {/* ================= COMPANY ROUTES ================= */}
      <Route
        path="/company"
        element={
          <ProtectedRoute role="company">
            <CompanyLayout />
          </ProtectedRoute>
        }
      >
        {/* Dashboard */}
        <Route path="dashboard" element={<CompanyDashboard />} />

        {/* Agents */}
        <Route path="agents" element={<AgentsList />} />
        <Route path="edit-agent/:id" element={<EditAgent />} />

        {/* Accounts */}
        <Route path="accounts" element={<ActiveAccounts />} />

        {/* NEW: Agent Accounts Page */}
        <Route path="agent-accounts" element={<AgentAccounts />} />

        {/* NEW: Customer Summary Page */}
        <Route path="customer-summary" element={<CustomerSummary />} />

        {/* Reports */}
        <Route path="reports" element={<Reports />} />

        {/* Profile */}
        <Route path="profile" element={<CompanyProfile />} />
      </Route>

      {/* DEFAULT FALLBACK */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}
