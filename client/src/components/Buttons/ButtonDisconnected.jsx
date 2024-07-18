import { useUserContext } from "../context/UserContext";

export default function ButtonDisconnected() {
  const { logout } = useUserContext();

  const handleLogout = () => {
    logout(false);
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="flex items-center justify-center bg-secondary  text-white rounded-md mx-auto max-w-sm min-w-32 px-3 py-2 mb-1 border border-secondary shadow-custom mt-5 hover:scale-105 transform transition duration-300"
        type="button"
      >
        Se déconnecter
      </button>
    </div>
  );
}
