export default function ChangePassword() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow max-w-md">
      <h2 className="text-xl font-semibold mb-6">Change Password</h2>

      <input
        type="password"
        placeholder="Old Password"
        className="w-full mb-4 p-3 border rounded-xl"
      />

      <input
        type="password"
        placeholder="New Password"
        className="w-full mb-4 p-3 border rounded-xl"
      />

      <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">
        Update Password
      </button>
    </div>
  );
}
