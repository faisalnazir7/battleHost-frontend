import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Dropdown from "../Dropdown/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../public/bH-black.png";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigator = useNavigate();
  const [tournaments, setTournaments] = useState([]);
  const getAllTournaments = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/api/tournament/alltournaments`
    );
    const data = await response.json();
    console.log(data);
    setTournaments(data.allTournaments);
  };
  const searchData = (search) => {
    const filteredTournaments = tournaments?.filter((tournament) =>
      tournament?.name?.toLowerCase().includes(search?.toLowerCase()) ||
      tournament?.organizerId?.name?.toLowerCase().includes(search?.toLowerCase())
    );
    return filteredTournaments;
  };
  useEffect(() => {
    getAllTournaments();
  }, []);

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:space-x-10">
          <div className="flex items-center space-x-2 mb-3 ml-3 ">
            <Link to="/">
              <img src={Logo} alt="logo" className="h-12" />
            </Link>
          </div>
          <div className="flex-grow ml-6 mr-6 md:w-[250px]">
            <input
              className="w-full h-10 rounded-full bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-30 disabled:opacity-50"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
                // console.log(e.target.value);
              }}
            />
            {search && (
              <div className="fixed w-[250px] mt-2 z-30 border-solid border-2 rounded-xl shadow-md p-4 bg-white">
                {searchData(search).length > 0 ? (
                  searchData(search)?.map((result) => (
                    <div
                      key={result._id}
                      onClick={() => {
                        navigator(`/tournaments/details/${result._id}`);
                        setSearch("");
                      }}
                    >
                      <h1>
                        <b>{result?.name}</b>
                      </h1>
                      <p className="text-sm mt-1 mb-2">
                        {result?.organizerId?.name}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="font-semibold">No results found.</p>
                )}
              </div>
            )}
          </div>
          <div className="hidden md:flex items-center mr-3 space-x-4">
            {!localStorage.getItem("user_data") ? (
              <Link to="/signin">
                <button
                  type="button"
                  className="rounded-md bg-black px-4 py-2 text-sm ml-4 font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Login
                </button>
              </Link>
            ) : (
              <Dropdown />
            )}
            <div>
              <h2 className="text-lg font-bold">
                {JSON.parse(localStorage.getItem("user_data"))?.name}
              </h2>
              <p className="text-m font-m">
                {JSON.parse(localStorage.getItem("user_data"))?.role}
              </p>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
