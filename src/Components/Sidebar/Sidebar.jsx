import React, { useState } from "react";
import {
  BarChart,
  Wallet,
  PenSquare,
  LogOut,
  Wrench,
  Hand,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sidebarExceptions from "../../util/sidebarExceptions";

export function Sidebar() {
  const location = useLocation();
  if (sidebarExceptions.includes(location.pathname)) {
    return null;
  }
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSidebarToggle = () => {
    setIsExpanded(!isExpanded);
  };
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
    <>
      <aside
        className={`w-${
          isExpanded ? "64" : "20"
        } flex fixed h-screen z-10  flex-col overflow-y-auto border-r bg-black bg-opacity-80 px-5 py-8 transition-width duration-300`}
        onMouseEnter={handleSidebarToggle}
        onMouseLeave={handleSidebarToggle}
      >
        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-12 mt-24 ">
              <Link
                to="/dashboard"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              >
                <BarChart className="h-5 w-5" aria-hidden="true" />
                {isExpanded && (
                  <span className="mx-2 text-sm font-medium">Dashboard</span>
                )}
              </Link>
              {JSON.parse(localStorage.getItem("user_data"))?.role ===
              "Host" ? (
                <Link
                  to="/tournaments/create"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <PenSquare className="h-5 w-5" aria-hidden="true" />
                  {isExpanded && (
                    <span className="mx-2 text-sm font-medium">
                      Create Tournament
                    </span>
                  )}
                </Link>
              ) : (
                <Link
                  to="/tournaments/live"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <Hand className="h-5 w-5" aria-hidden="true" />
                  {isExpanded && (
                    <span className="mx-2 text-sm font-medium">
                      Participate
                    </span>
                  )}
                </Link>
              )}

              {JSON.parse(localStorage.getItem("user_data"))?.role ===
                "Host" && (
                <Link
                  to="/hostdashboard"
                  className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                >
                  <Wallet className="h-5 w-5" aria-hidden="true" />
                  {isExpanded && (
                    <span className="mx-2 text-sm font-medium">Manage</span>
                  )}
                </Link>
              )}
              <Link
                to="/profile"
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              >
                <Wrench className="h-5 w-5" aria-hidden="true" />
                {isExpanded && (
                  <span className="mx-2 text-sm font-medium">
                    Account Settings
                  </span>
                )}
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
                  {isExpanded && (
                    <span className="mx-2 text-sm font-medium">Log Out</span>
                  )}
                </button>
              </form>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
