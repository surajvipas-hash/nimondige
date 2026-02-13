import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const agents = [
    { id: 1, code: "ANIL", name: "Anilkumar", receipts: 1, amount: 200 },
    { id: 2, code: "NBJ", name: "Nagesh Joshi", receipts: 70, amount: 2152155 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 space-y-10">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            Company Dashboard
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Overview of system performance
          </p>
        </div>
      </motion.div>

      {/* ================= STATS CARDS ================= */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[ 
          { label: "Active Agents", value: 8, color: "from-blue-500 to-blue-600", path: "/company/agents" },
          { label: "No. of Accounts", value: 140, color: "from-green-500 to-green-600", path: "/company/agent-accounts" },
          { label: "No. of Receipts", value: 153, color: "from-purple-500 to-purple-600", path: "/company/reports" },
          { label: "Total Collection", value: 2184617, color: "from-red-500 to-red-600", path: "/company/reports", currency: true },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => navigate(item.path)}
            className="relative backdrop-blur-lg bg-white/60 border border-white/40 rounded-2xl shadow-lg p-6 cursor-pointer hover:scale-[1.03] transition duration-300"
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />

            <p className="text-gray-600 text-sm">{item.label}</p>

            <h3 className="text-3xl font-bold mt-3 text-gray-800">
              {loading ? (
                <div className="h-8 w-20 bg-gray-200 animate-pulse rounded-md"></div>
              ) : (
                <>
                  {item.currency && "₹ "}
                  <CountUp end={item.value} duration={2} separator="," />
                </>
              )}
            </h3>

            <p className="text-sm mt-2 text-gray-500 hover:underline">
              More info →
            </p>
          </motion.div>
        ))}

      </div>

      {/* ================= SUMMARY TABLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-lg overflow-hidden"
      >
        <div className="px-6 py-4 border-b bg-white/80 font-semibold text-gray-700">
          Agents Collection Summary
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gray-100 text-sm text-gray-500 uppercase tracking-wide">
              <tr>
                <th className="px-6 py-3">Serial</th>
                <th className="px-6 py-3">Code</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Receipts</th>
                <th className="px-6 py-3">Amount</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-gray-700">

              {loading
                ? Array(2)
                    .fill(0)
                    .map((_, i) => (
                      <tr key={i}>
                        {Array(5)
                          .fill(0)
                          .map((_, j) => (
                            <td key={j} className="px-6 py-4">
                              <div className="h-4 bg-gray-200 animate-pulse rounded-md"></div>
                            </td>
                          ))}
                      </tr>
                    ))
                : agents.map((agent, index) => (
                    <tr
                      key={agent.id}
                      className="hover:bg-gray-50 transition"
                    >
                      <td className="px-6 py-4">
                        {index + 1}
                      </td>

                      <td
                        onClick={() =>
                          navigate("/company/agent-accounts")
                        }
                        className="px-6 py-4 font-semibold text-blue-600 cursor-pointer hover:underline"
                      >
                        {agent.code}
                      </td>

                      <td className="px-6 py-4">
                        {agent.name}
                      </td>

                      <td className="px-6 py-4">
                        {agent.receipts}
                      </td>

                      <td className="px-6 py-4 font-semibold">
                        ₹ {agent.amount.toLocaleString()}
                      </td>
                    </tr>
                  ))}

            </tbody>

          </table>
        </div>
      </motion.div>

    </div>
  );
}
