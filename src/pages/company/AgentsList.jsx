import { useNavigate } from "react-router-dom";

export default function AgentsList() {
  const navigate = useNavigate();

  const agents = [
    { id: 1, name: "Anilkumar", code: "ANIL" },
    { id: 2, name: "Nagesh Joshi", code: "NBJ" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Manage Agents</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h4 className="font-medium">{agent.name}</h4>
            <p className="text-sm text-gray-500 mb-4">{agent.code}</p>

            <button
              onClick={() => navigate(`/company/edit-agent/${agent.id}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
