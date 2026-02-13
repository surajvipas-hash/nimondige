export default function CompanyProfile() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm max-w-lg">
      <h2 className="text-xl font-semibold mb-6">Profile Update</h2>

      <input
        type="text"
        placeholder="Name"
        className="w-full mb-4 p-3 border rounded-lg"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-3 border rounded-lg"
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
        Update Profile
      </button>
    </div>
  );
}
