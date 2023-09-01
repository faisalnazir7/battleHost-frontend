"use client";
import React from "react";
import { Menu } from "lucide-react";
import Dropdown from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import Logo from "../../../public/bH-black.png"
export default function Navbar() {
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-3">
        <img src={Logo} alt="logo" className='h-12'/>
        </div>
        <div className="flex-grow ml-6">
          <input
            className="flex h-10 w-[250px] rounded-full bg-gray-100 px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-30 disabled:opacity-50"
            type="text"
            placeholder="Search"
          />
        </div>

        {!localStorage.getItem('user_data') ? (
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
          <h2 className="text-lg font-bold">{JSON.parse(localStorage.getItem('user_data'))?.name}</h2>
          <p className="text-m font-m">{JSON.parse(localStorage.getItem('user_data'))?.role}</p>
        </div>
      </div>
    </div>
  );
}