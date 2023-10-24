import React, { useState, useEffect } from "react";
import { BarChart, Users2, Trophy, Award } from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function SideNav() {
  const { tournamentId } = useParams();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    const currentTab = location.pathname.split("/").pop();
    setActiveTab(currentTab || "general");
  }, [location.pathname]);

  return (
    <aside className="flex  w-64 flex-col md:overflow-y-auto border-b md:border-r bg-white md:px-5 md:py-8 -mt-8 mb-12 md:mt-0 md:mb-0">
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="mx-3 space-y-6 ">
          <div className="space-y-8 flex justify-between md:block">
            <Link
              to={`/hostdashboard/manage/${tournamentId}/general`}
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 ${
                activeTab === "general"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 hover:text-gray-700"
              } `}
            >
              <BarChart className="h-5 w-5 mt-8 md:mt-0" aria-hidden="true" />
              <span className="mx-2 text-base font-medium hidden md:block">
                General
              </span>
            </Link>
            <Link
              to={`/hostdashboard/manage/${tournamentId}/participants`}
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 ${
                activeTab === "participants"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <Users2 className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium hidden md:block">
                Team Members
              </span>
            </Link>

            <Link
              to={`/hostdashboard/manage/${tournamentId}/result`}
              className={`flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 ${
                activeTab === "result"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              <Award className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-base  font-medium hidden md:block">
                Result
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
