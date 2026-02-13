import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditAgent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    code: "Admin",
    name: "Raghavendra Joshi",
    mobile: "9022402010",
    gender: "Male",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Agent Updated Successfully");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Edit Agent</h2>
        <div className="text-sm text-gray-500">
          <span
            onClick={() => navigate("/company/dashboard")}
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </span>
          {" / "} Edit Agent
        </div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl">

        {/* Blue Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
          <h3 className="text-white font-semibold text-lg">
            Edit Agent - {form.name}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">

          {/* Code */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Code
            </label>
            <input
              type="text"
              name="code"
              value={form.code}
              disabled
              className="w-full px-4 py-3 rounded-xl bg-gray-100 text-gray-600 border focus:outline-none"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Update Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Update
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
