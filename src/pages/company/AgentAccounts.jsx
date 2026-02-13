import { useNavigate } from "react-router-dom";

export default function AgentAccounts() {
  const navigate = useNavigate();

  const accounts = [
    {
      id: 1,
      accountType: "PGAC",
      name: "ANEELKUMAR HALLADAMATH",
      mobile: "9743280546",
    },
    {
      id: 2,
      accountType: "PGAC",
      name: "ERANNA HADAPAD",
      mobile: "9743566719",
    },
    {
      id: 3,
      accountType: "PGAC",
      name: "RAGHAVENDR KULKARNI",
      mobile: "0000000000",
    },
    {
      id: 4,
      accountType: "PGAC",
      name: "SAGAR PATIL",
      mobile: "6362270676",
    },
    {
      id: 5,
      accountType: "PGAC",
      name: "VINAYKUMAR",
      mobile: "9844921650",
    },
    {
      id: 6,
      accountType: "PGAC",
      name: "GURU RABAKAVI",
      mobile: "8904658143",
    },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Anilkumar - Accounts
        </h1>

        <div className="text-sm text-gray-500">
          Showing {accounts.length} accounts
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="px-6 py-4 border-b bg-gray-50 font-semibold text-gray-700">
          Accounts List
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead className="bg-gray-100 text-sm text-gray-600 uppercase tracking-wide">
              <tr>
                <th className="px-6 py-3">S.No</th>
                <th className="px-6 py-3">Account Id</th>
                <th className="px-6 py-3">Account Type</th>
                <th className="px-6 py-3">Account Name</th>
                <th className="px-6 py-3">Mobile</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 text-gray-700">
              {accounts.map((acc, index) => (
                <tr key={acc.id} className="hover:bg-gray-50 transition">

                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4 font-medium">
                    {acc.id}
                  </td>

                  <td className="px-6 py-4">
                    {acc.accountType}
                  </td>

                  <td className="px-6 py-4">
                    {acc.name}
                  </td>

                  <td className="px-6 py-4">
                    {acc.mobile}
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate("/company/customer-summary")}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition shadow-sm"
                    >
                      Summary
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
