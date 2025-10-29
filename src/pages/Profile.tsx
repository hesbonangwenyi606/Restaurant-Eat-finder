import React from "react";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>Email: {user?.email}</p>

      <div className="mt-4">
        <h2 className="font-semibold mb-2">Favorites</h2>
        <p>No favorites yet.</p>
      </div>

      <div className="mt-4">
        <h2 className="font-semibold mb-2">Reservations</h2>
        <p>No reservations yet.</p>
      </div>

      <button className="mt-4 bg-red-500 text-white px-4 py-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
