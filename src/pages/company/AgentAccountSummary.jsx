import { useParams } from "react-router-dom";

export default function AgentAccountSummary() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h2 className="text-3xl font-bold mb-8">
        Agent Account Summary
      </h2>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="px-6 py-4 bg-teal-600 text-white font-semibold">
          Collected Amount (200)
        </div>

        <table className="w-full text-left">
          <thead className="bg-gray-100 text-sm text-gray-600">
            <tr>
              <th className="px-6 py-3">Serial</th>
              <th className="px-6 py-3">Device</th>
              <th className="px-6 py-3">Receipts</th>
              <th className="px-6 py-3">Amount</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">
                Realme RMX3521 - A95FB63F52F47149
              </td>
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4 font-semibold">₹ 200</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}
