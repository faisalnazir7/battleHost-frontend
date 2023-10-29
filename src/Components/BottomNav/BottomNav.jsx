import React from "react";
import "./BottomNav.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sidebarExceptions from "../../util/sidebarExceptions";
import {
  BarChart,
  Wallet,
  PenSquare,
  LogOut,
  Wrench,
  Hand,
} from "lucide-react";
function BottomNav() {
    const location = useLocation();
    if (sidebarExceptions.includes(location.pathname)) {
      return null;
    }
    const navigator = useNavigate();
  async function logout() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/users/logout`,
        {
          method: "POST", // Or the appropriate HTTP method
          credentials: "same-origin", // This sends cookies along with the request
        }
      );
      const data = await response.json();
      if (response.ok) {
        // Logout was successful, handle UI changes or redirects here
        // console.log('Logged out successfully');
        // console.log(data.message)
        // Clear the cookies on the client side
        document.cookie =
          "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        localStorage.clear();
        navigator("/signin");
        toast.success("Logged out successfully!");
      } else {
        // Handle error response
        // console.error('Logout failed');
        toast.error("Could not logout!");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  }
  return (
    <div className="BottomNav hidden fixed p-5 bottom-0 w-full bg-black bg-opacity-80 justify-between">
      <Link
        to="/dashboard"
        className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
      >
        <BarChart className="h-5 w-5" aria-hidden="true" />
      </Link>
      {JSON.parse(localStorage.getItem("user_data"))?.role === "Host" ? (
        <Link
          to="/tournaments/create"
          className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <PenSquare className="h-5 w-5" aria-hidden="true" />
        </Link>
      ) : (
        <Link
          to="/tournaments/live"
          className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <Hand className="h-5 w-5" aria-hidden="true" />
        </Link>
      )}

      {JSON.parse(localStorage.getItem("user_data"))?.role === "Host" && (
        <Link
          to="/hostdashboard"
          className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <Wallet className="h-5 w-5" aria-hidden="true" />
        </Link>
      )}
      <Link
        to="/profile"
        className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
      >
        <Wrench className="h-5 w-5" aria-hidden="true" />
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (window.confirm("Do you wish to logout?")) {
            logout();
          }
        }}
      >
        <button
          type="submit"
          className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
        >
          <LogOut className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

export default BottomNav;
